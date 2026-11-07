import { defineConfig } from "@playwright/test";

/**
 * Playwright-Konfiguration für Smoke- und Screenshot-Tests.
 *
 * - Testet den bereits gebauten Produktionsserver (`pnpm build` vorher,
 *   hier wird nur `pnpm start` gestartet) – kein doppelter Build.
 * - Browser werden ausschließlich über PLAYWRIGHT_BROWSERS_PATH aufgelöst
 *   (Cloud-Sitzung: /opt/pw-browsers); keine fest eingetragenen Pfade.
 *   @playwright/test ist exakt auf die dazu passende Version fixiert,
 *   siehe scripts/check-toolchain.mjs.
 */
const PORT = 3000;
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    browserName: "chromium",
    locale: "de-DE",
    trace: "off",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "desktop-1440",
      use: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
    },
    {
      name: "mobile-360",
      use: {
        viewport: { width: 360, height: 800 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: "mobile-412",
      use: {
        viewport: { width: 412, height: 915 },
        deviceScaleFactor: 2.625,
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: {
    command: `pnpm start --hostname 127.0.0.1 --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 60_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
