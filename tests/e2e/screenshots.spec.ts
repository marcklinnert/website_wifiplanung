import { test } from "@playwright/test";

/**
 * Erstellt je Viewport-Projekt ganzseitige Screenshots zur manuellen Prüfung.
 * Kein Pixelvergleich: Ohne fertiges Design gibt es noch keine Baseline.
 * Ablage: test-results/screenshots/<projekt>-<seite>.png (in CI als Artefakt).
 */
const pages = [
  { name: "start", path: "/" },
  { name: "404", path: "/diese-seite-gibt-es-nicht" },
];

for (const { name, path } of pages) {
  test(`Screenshot: ${name}`, async ({ page }, testInfo) => {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    const file = `test-results/screenshots/${testInfo.project.name}-${name}.png`;
    const image = await page.screenshot({ path: file, fullPage: true });
    await testInfo.attach(`${testInfo.project.name}-${name}`, {
      body: image,
      contentType: "image/png",
    });
  });
}
