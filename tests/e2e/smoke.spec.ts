import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

async function expectNoSeriousA11yViolations(page: Page) {
  const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
  const serious = results.violations.filter(
    (v) => v.impact === "serious" || v.impact === "critical",
  );
  expect(serious.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`)).toEqual(
    [],
  );
}

test.describe("Startpfad", () => {
  test("lädt mit Status 200, deutscher Sprache und genau einer h1", async ({
    page,
  }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", "de");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/WiFi-Planung/);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
  });

  test("erzeugt keine Konsolen- oder Seitenfehler", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors).toEqual([]);
  });

  test("hat kein horizontales Scrollen", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test("Skip-Link ist per Tastatur erreichbar und sichtbar fokussiert", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Zum Inhalt springen" });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();
    const outline = await skipLink.evaluate((el) => {
      const style = getComputedStyle(el);
      return {
        width: parseFloat(style.outlineWidth),
        style: style.outlineStyle,
      };
    });
    expect(outline.style).not.toBe("none");
    expect(outline.width).toBeGreaterThanOrEqual(2);

    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main$/);
    await expect(page.locator("#main")).toBeFocused();
  });

  test("hat keine schwerwiegenden Accessibility-Verstöße (axe)", async ({
    page,
  }) => {
    await page.goto("/");
    await expectNoSeriousA11yViolations(page);
  });

  test("verwendet ausschließlich eckige Geometrie", async ({ page }) => {
    await page.goto("/");
    const rounded = await page.evaluate(() => {
      const corners = [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ] as const;
      const found: string[] = [];
      for (const el of Array.from(document.querySelectorAll("*"))) {
        for (const pseudo of [null, "::before", "::after"]) {
          const style = getComputedStyle(el, pseudo);
          for (const corner of corners) {
            if (style[corner] !== "0px") {
              found.push(
                `${el.tagName}${pseudo ?? ""} ${corner}=${style[corner]}`,
              );
            }
          }
        }
      }
      return found;
    });
    expect(rounded).toEqual([]);
  });

  test("respektiert prefers-reduced-motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const moving = await page.evaluate(() => {
      const toMs = (value: string) =>
        Math.max(
          ...value
            .split(",")
            .map((v) =>
              v.trim().endsWith("ms") ? parseFloat(v) : parseFloat(v) * 1000,
            ),
        );
      return Array.from(document.querySelectorAll("*"))
        .map((el) => {
          const s = getComputedStyle(el);
          return {
            el: el.tagName,
            transition: toMs(s.transitionDuration),
            animation: toMs(s.animationDuration),
          };
        })
        .filter((x) => x.transition > 0.01 || x.animation > 0.01);
    });
    expect(moving).toEqual([]);
  });
});

test.describe("Sicherheitsheader", () => {
  test("setzt Basisheader und lässt das Einbetten für Sanity offen", async ({
    request,
  }) => {
    const response = await request.get("/");
    const headers = response.headers();
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toBe(
      "camera=(), microphone=(), geolocation=()",
    );
    expect(headers["x-powered-by"]).toBeUndefined();
    // Spätere Sanity-Presentation-Vorschau benötigt Einbettung im iFrame.
    expect(headers["x-frame-options"]).toBeUndefined();
    expect(headers["content-security-policy"] ?? "").not.toContain(
      "frame-ancestors",
    );
  });
});

test.describe("404-Seite", () => {
  test("liefert Status 404 mit verständlicher Meldung", async ({ page }) => {
    const response = await page.goto("/diese-seite-gibt-es-nicht");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { level: 1, name: "Seite nicht gefunden" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Zur Startseite" }),
    ).toBeVisible();
    await expectNoSeriousA11yViolations(page);
  });
});
