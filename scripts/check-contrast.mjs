#!/usr/bin/env node
/**
 * Prüft die festgelegten Farbkombinationen aus src/styles/tokens.css gegen
 * WCAG 2.2: Text >= 4,5:1, Fokus/UI-Grenzen >= 3:1.
 * Zusätzlich wird sichergestellt, dass die als ungeeignet bekannten Paare
 * (Cyan-Original auf Weiß, Blau-Original auf Navy) nicht als Text-/Fokuspaar
 * in den semantischen Tokens verwendet werden.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const tokensPath = fileURLToPath(
  new URL("../src/styles/tokens.css", import.meta.url),
);
const css = readFileSync(tokensPath, "utf8");

/** @type {Record<string, string>} */
const colors = {};
for (const [, name, hex] of css.matchAll(
  /--color-([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})\s*;/g,
)) {
  colors[name] = hex.toLowerCase();
}

/** Semantische Zuordnung je Fläche aus dem CSS lesen. */
function readSurface(selector) {
  const start = css.indexOf(selector);
  if (start === -1) throw new Error(`Selektor nicht gefunden: ${selector}`);
  const block = css.slice(css.indexOf("{", start) + 1, css.indexOf("}", start));
  /** @type {Record<string, string>} */
  const map = {};
  for (const [, name, ref] of block.matchAll(
    /--wp-([a-z-]+):\s*var\(--color-([a-z0-9-]+)\)/g,
  )) {
    map[name] = ref;
  }
  return map;
}

const surfaces = {
  light: readSurface('[data-surface="light"]'),
  dark: readSurface('[data-surface="dark"]'),
};

function luminance(hex) {
  const channels = [1, 3, 5].map(
    (i) => parseInt(hex.slice(i, i + 2), 16) / 255,
  );
  const [r, g, b] = channels.map((c) =>
    c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function hexOf(name) {
  const hex = colors[name];
  if (!hex) throw new Error(`Farbe nicht definiert: --color-${name}`);
  return hex;
}

const TEXT = 4.5;
const UI = 3;

/** [Vordergrund-Token, Hintergrund-Token, Mindestkontrast, Bezeichnung] */
const semanticChecks = [
  ["fg", "surface", TEXT, "Fließtext"],
  ["fg", "surface-raised", TEXT, "Fließtext auf erhöhter Fläche"],
  ["fg-muted", "surface", TEXT, "Sekundärtext"],
  ["fg-muted", "surface-raised", TEXT, "Sekundärtext auf erhöhter Fläche"],
  ["link", "surface", TEXT, "Link"],
  ["accent", "surface", TEXT, "Akzenttext"],
  ["focus", "surface", UI, "Fokusring"],
  ["control-fg", "control", TEXT, "Text auf Bedienelement"],
  ["control", "surface", UI, "Bedienelement gegen Fläche"],
  ["border", "surface", UI, "Bedienelement-Rahmen"],
  ["status-error", "surface", TEXT, "Fehlermeldung"],
  ["status-success", "surface", TEXT, "Erfolgsmeldung"],
  ["status-warning", "surface", TEXT, "Warnhinweis"],
];

let failures = 0;
const rows = [];

for (const [surfaceName, map] of Object.entries(surfaces)) {
  for (const [fg, bg, min, label] of semanticChecks) {
    const fgRef = map[fg];
    const bgRef = map[bg];
    if (!fgRef || !bgRef) {
      console.error(`✗ ${surfaceName}: Token fehlt (${fg} / ${bg})`);
      failures++;
      continue;
    }
    const ratio = contrast(hexOf(fgRef), hexOf(bgRef));
    const ok = ratio >= min;
    if (!ok) failures++;
    rows.push(
      `${ok ? "✓" : "✗"} ${surfaceName.padEnd(5)} ${label.padEnd(34)} ${fgRef} auf ${bgRef}: ${ratio.toFixed(2)}:1 (min. ${min}:1)`,
    );
  }
}

// Bekannte Problemfälle dürfen nicht als Text-/Fokusfarbe auf ihrer Fläche liegen.
const forbidden = [
  ["light", "brand-cyan", "Cyan #02ADF4 auf hellen Flächen"],
  ["dark", "brand-blue", "Blau #0262B4 auf Navy"],
];
for (const [surfaceName, colorName, label] of forbidden) {
  const map = surfaces[surfaceName];
  for (const key of ["fg", "fg-muted", "link", "accent", "focus"]) {
    if (map[key] === colorName) {
      rows.push(`✗ ${surfaceName}: ${label} als "${key}" verwendet`);
      failures++;
    }
  }
}

console.log(rows.join("\n"));
if (failures > 0) {
  console.error(
    `\nKontrastprüfung fehlgeschlagen: ${failures} Verstoß/Verstöße.`,
  );
  process.exit(1);
}
console.log("\nKontrastprüfung erfolgreich.");
