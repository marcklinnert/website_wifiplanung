#!/usr/bin/env node
/**
 * Prüft nach `pnpm build` alle generierten CSS-Dateien unter .next/static
 * auf Rundungen. Erlaubt ist ausschließlich ein Radius von 0.
 * Grund: Eckige Geometrie ist beschlossen (keine runden Karten, Buttons,
 * Eingabefelder oder Badges). `rounded-full` und `rounded-[…]` laufen in
 * Tailwind v4 nicht über das Theme und würden sonst unbemerkt durchrutschen.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const staticDir = join(root, ".next", "static");

function collectCss(dir) {
  /** @type {string[]} */
  const files = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) files.push(...collectCss(path));
    else if (entry.endsWith(".css")) files.push(path);
  }
  return files;
}

let files;
try {
  files = collectCss(staticDir);
} catch {
  console.error("Kein Build gefunden. Zuerst `pnpm build` ausführen.");
  process.exit(1);
}
if (files.length === 0) {
  console.error("Keine CSS-Dateien in .next/static gefunden.");
  process.exit(1);
}

// border-radius, border-top-left-radius, border-start-end-radius usw.
const declaration = /(border(?:-[a-z]+){0,2}-radius)\s*:\s*([^;}]+)/g;
// Erlaubt: 0, 0px, 0 0 0 0, 0px 0 …
const zeroOnly = /^(?:0(?:px|rem|em|%)?\s*)+(?:!important)?$/;

const violations = [];
let declarations = 0;

for (const file of files) {
  const css = readFileSync(file, "utf8");
  for (const match of css.matchAll(declaration)) {
    declarations++;
    const value = match[2].trim();
    if (!zeroOnly.test(value)) {
      const context = css.slice(Math.max(0, match.index - 80), match.index);
      const selector = context.slice(context.lastIndexOf("}") + 1).trim();
      violations.push(
        `${relative(root, file)}: ${selector} { ${match[1]}: ${value} }`,
      );
    }
  }
}

console.log(
  `${files.length} CSS-Datei(en), ${declarations} Radius-Deklaration(en) geprüft.`,
);
if (violations.length > 0) {
  console.error("\nUnzulässige Rundungen gefunden:");
  for (const v of violations) console.error(`  ✗ ${v}`);
  process.exit(1);
}
console.log("Keine Rundungen gefunden – eckige Geometrie eingehalten.");
