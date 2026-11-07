#!/usr/bin/env node
/**
 * Prüft die Konsistenz von Node.js, Playwright und CI-Konfiguration.
 *
 *   node scripts/check-toolchain.mjs             Node, engines, Playwright-Version, Workflow
 *   node scripts/check-toolchain.mjs --browsers  zusätzlich: passende Chromium-Revision installiert
 *
 * Hintergrund: Die Claude-Code-Cloud-Umgebung bringt Chromium in einer festen
 * Revision mit und blockiert den Browser-Download. @playwright/test ist daher
 * exakt auf die dazu passende Version fixiert; Sitzung und CI nutzen dieselbe
 * Revision.
 */
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { dirname, join } from "node:path";

const EXPECTED_NODE_MAJOR = 24;
const EXPECTED_ENGINES = ">=24.11.0 <25";

const root = new URL("..", import.meta.url).pathname;
const require = createRequire(join(root, "package.json"));
const checkBrowsers = process.argv.includes("--browsers");

const errors = [];
const ok = (msg) => console.log(`✓ ${msg}`);
const fail = (msg) => {
  errors.push(msg);
  console.error(`✗ ${msg}`);
};

const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

// 1. Laufende Node-Version
const nodeMajor = Number(process.versions.node.split(".")[0]);
if (nodeMajor === EXPECTED_NODE_MAJOR) ok(`Node ${process.versions.node}`);
else
  fail(
    `Node ${process.versions.node} läuft, erwartet ${EXPECTED_NODE_MAJOR}.x`,
  );

// 2. .node-version
const nodeVersionFile = readFileSync(
  join(root, ".node-version"),
  "utf8",
).trim();
if (nodeVersionFile === String(EXPECTED_NODE_MAJOR))
  ok(`.node-version = ${nodeVersionFile}`);
else
  fail(
    `.node-version = "${nodeVersionFile}", erwartet "${EXPECTED_NODE_MAJOR}"`,
  );

// 3. engines.node
if (pkg.engines?.node === EXPECTED_ENGINES)
  ok(`engines.node = "${pkg.engines.node}"`);
else
  fail(`engines.node = "${pkg.engines?.node}", erwartet "${EXPECTED_ENGINES}"`);

// 4. Playwright exakt fixiert und installiert
const pinned = pkg.devDependencies?.["@playwright/test"];
if (!/^\d+\.\d+\.\d+$/.test(pinned ?? "")) {
  fail(`@playwright/test muss exakt fixiert sein (aktuell "${pinned}")`);
}
let playwrightCoreDir;
try {
  const testPkgPath = require.resolve("@playwright/test/package.json");
  const installed = JSON.parse(readFileSync(testPkgPath, "utf8")).version;
  if (installed === pinned) ok(`@playwright/test ${installed} installiert`);
  else
    fail(
      `@playwright/test ${installed} installiert, package.json fixiert ${pinned}`,
    );

  const coreRequire = createRequire(testPkgPath);
  playwrightCoreDir = dirname(
    coreRequire.resolve("playwright-core/package.json"),
  );
  const coreVersion = JSON.parse(
    readFileSync(join(playwrightCoreDir, "package.json"), "utf8"),
  ).version;
  if (coreVersion === pinned) ok(`playwright-core ${coreVersion}`);
  else
    fail(
      `playwright-core ${coreVersion} weicht von @playwright/test ${pinned} ab`,
    );
} catch {
  fail("@playwright/test ist nicht installiert (pnpm install ausführen)");
}

// 5. CI-Workflow nutzt .node-version
const workflowPath = join(root, ".github", "workflows", "ci.yml");
if (existsSync(workflowPath)) {
  const workflow = readFileSync(workflowPath, "utf8");
  if (/node-version-file:\s*\.node-version/.test(workflow)) {
    ok("CI-Workflow nutzt node-version-file: .node-version");
  } else {
    fail("CI-Workflow muss node-version-file: .node-version verwenden");
  }
  if (/node-version:\s/.test(workflow)) {
    fail("CI-Workflow darf keine abweichende node-version fest eintragen");
  }
}

// 6. Passende Chromium-Revision vorhanden
if (checkBrowsers && playwrightCoreDir) {
  const browsers = JSON.parse(
    readFileSync(join(playwrightCoreDir, "browsers.json"), "utf8"),
  ).browsers;
  const browsersPath =
    process.env.PLAYWRIGHT_BROWSERS_PATH ||
    join(homedir(), ".cache", "ms-playwright");
  for (const name of ["chromium", "chromium-headless-shell"]) {
    const entry = browsers.find((b) => b.name === name);
    if (!entry) {
      fail(`browsers.json enthält keinen Eintrag "${name}"`);
      continue;
    }
    const dir = join(
      browsersPath,
      `${name.replaceAll("-", "_")}-${entry.revision}`,
    );
    if (existsSync(join(dir, "INSTALLATION_COMPLETE"))) {
      ok(
        `${name} Revision ${entry.revision} (${entry.browserVersion}) in ${browsersPath}`,
      );
    } else {
      fail(
        `${name} Revision ${entry.revision} fehlt in ${browsersPath} – Playwright-Version und installierter Browser passen nicht zusammen`,
      );
    }
  }
}

if (errors.length > 0) {
  console.error(`\nToolchain-Prüfung fehlgeschlagen (${errors.length}).`);
  process.exit(1);
}
console.log("\nToolchain-Prüfung erfolgreich.");
