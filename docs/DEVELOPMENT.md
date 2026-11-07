# Entwicklung – technisches Grundgerüst

Stand: 7. November 2026 (Phase 1)

Dieses Dokument beschreibt den technischen Arbeitsablauf. Fachliche Vorgaben stehen in `CLAUDE.md` und den übrigen Dokumenten unter `docs/`.

## 1. Arbeitsablauf im Browser

Gearbeitet wird ausschließlich mit Claude Code im Browser (Cloud-Sitzungen) und der GitHub-Weboberfläche. Lokale Installationen sind nicht erforderlich.

1. Claude arbeitet in einer Cloud-Sitzung auf einem `feature/*`-Branch, der von `develop` abzweigt.
2. Claude führt alle Prüfungen in der Sitzung aus und öffnet einen Pull Request nach `develop`.
3. GitHub Actions führt dieselben Prüfungen erneut aus. Ergebnisse stehen im Pull Request unter **Checks**.
4. Screenshots aller Viewports liegen im Actions-Lauf unter **Artifacts → screenshots** (7 Tage). Bei Fehlern zusätzlich **playwright-report**.
5. Review und Merge erfolgen manuell in der GitHub-Weboberfläche. `main` wird nur über geprüfte Pull Requests aktualisiert.

## 2. Toolchain

| Werkzeug | Version | Festlegung |
|---|---|---|
| Node.js | 24.x (LTS „Krypton“) | `.node-version` = `24`, `engines.node` = `>=24.11.0 <25`, `engineStrict: true` in `pnpm-workspace.yaml` |
| pnpm | 12.18.0 | `packageManager` in `package.json` |
| Next.js | 16.4.5 | App Router, Turbopack |
| React | 19.3.1 | |
| TypeScript | 5.9.3 | `strict`, `noUncheckedIndexedAccess`; Version laut `create-next-app`-Vorlage (`^5`) |
| Tailwind CSS | 4.3.5 | Einbindung über `@tailwindcss/turbopack` (Standard der `create-next-app`-Vorlage) |
| ESLint | 9.39.5 | `eslint-config-next` 16.4.5 |
| Prettier | 3.9.10 | mit `prettier-plugin-tailwindcss` 0.8.1 (Peer: `prettier ^3.0`) |
| Playwright Test | 1.63.0 (exakt) | passend zu Chromium-Revision 1243 |
| axe-core/playwright | 4.14.0 | automatische Accessibility-Prüfung |

Alle Abhängigkeiten sind exakt fixiert, das Lockfile ist versioniert. Weitere Pakete, Skills, Plugins, MCP-Server, Hooks oder Agent-CLIs nur nach separater Freigabe (siehe `docs/TOOLS_AND_SKILLS.md`).

### Node 24

Next.js (`>=20.9`), TypeScript, ESLint (`>=24` unterstützt), Playwright (Node 22/24/26) und Sanity (`>=22.12`, spätere Phase) sind mit Node 24 kompatibel. Node 24 ist eine LTS-Linie; seit Ende Oktober 2026 ist Node 26 die neueste LTS-Linie. Ein Wechsel auf 26 ist eine separate Entscheidung.

In der Cloud-Sitzung ist das Standard-`node` derzeit Version 22. Befehle laufen deshalb mit vorangestelltem `/opt/node24/bin` im `PATH`. Durch `engineStrict` schlägt `pnpm install` mit Node 22 bewusst fehl.

### Playwright und Browser

Die Cloud-Umgebung stellt Chromium in Revision 1243 unter `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers` bereit und blockiert den Browser-Download. `@playwright/test` ist daher exakt auf `1.63.0` fixiert, deren `browsers.json` genau diese Revision verlangt. In CI installiert `playwright install --with-deps chromium` dieselbe Revision. Es werden keine Browserpfade fest eingetragen.

Ein Upgrade erfolgt erst, wenn die Cloud-Umgebung eine neuere Revision mitbringt. `pnpm check:toolchain:browsers` erkennt Abweichungen.

## 3. Skripte

| Skript | Zweck |
|---|---|
| `pnpm dev` | Entwicklungsserver |
| `pnpm build` / `pnpm start` | Produktionsbuild / -server |
| `pnpm lint` | ESLint |
| `pnpm format` / `pnpm format:check` | Prettier (Markdown-Dokumente ausgenommen) |
| `pnpm typecheck` | `next typegen` + `tsc --noEmit` |
| `pnpm check:toolchain` | Node 24, `.node-version`, `engines`, Playwright-Fixierung, CI-Workflow |
| `pnpm check:toolchain:browsers` | zusätzlich: passende Chromium-Revision installiert |
| `pnpm check:contrast` | WCAG-Kontrast aller semantischen Farbpaare |
| `pnpm check:css` | nach dem Build: keine `border-radius`-Werte ungleich 0 |
| `pnpm test:e2e` | Playwright gegen den bereits gebauten Server |
| `pnpm check` | alle Prüfungen in der richtigen Reihenfolge, genau ein Build |

Reihenfolge in CI: Toolchain → Lint → Format → Typecheck → Kontrast → **Build (einmal)** → Radius → Browser-Installation → Toolchain (Browser) → E2E → Artefakte.

## 4. Projektstruktur

```
src/app/            Layout (lang="de", Skip-Link, noindex), Platzhalterseite, 404, globals.css
src/styles/         tokens.css – Design-Tokens (Tailwind v4 @theme)
src/components/ui/  Basiskomponenten (ab Phase 2)
src/lib/            Domänenlogik; Preis- und Provisionslogik später nur serverseitig
scripts/            Prüfskripte (Toolchain, Kontrast, Radius)
tests/e2e/          Playwright-Smoke- und Screenshot-Tests
assets/brand/       nur freigegebene, öffentliche Marken-Assets (siehe README dort)
```

## 5. Design-Tokens

- `src/app/globals.css` importiert `tailwindcss` und danach `src/styles/tokens.css`.
- Tailwind-Standardfarben sind entfernt. Verfügbar sind nur die projekteigenen Farben.
- Komponenten verwenden semantische Tokens (`bg-surface`, `text-fg`, `text-fg-muted`, `text-link`, `text-accent`, `bg-control`, `text-control-fg`, `border-border`, `text-status-*`). Die Zuordnung wechselt mit `data-surface="light"` bzw. `data-surface="dark"`.
- **Eckige Geometrie:** Alle Radius-Tokens sind entfernt (`--radius-*: initial`), eine Basisregel setzt `border-radius: 0`. `pnpm check:css` prüft das generierte CSS, ein E2E-Test die berechneten Werte aller Elemente.
- Fokus: sichtbarer `outline` (3 px, `--wp-focus`). Bewegung: globale `prefers-reduced-motion`-Regel.
- Glass-Tokens (`--wp-glass-*`) sind definiert, aber noch nicht verwendet.
- Schriften: Systemschriftstapel, bis eine lizenzierte Hausschrift festgelegt ist. Google Fonts sind aus der Cloud-Sitzung nicht erreichbar.

### Farben und Kontrast (WCAG 2.2, geprüft durch `pnpm check:contrast`)

Markenfarben #0262B4 und #02ADF4 sind Startwerte und vor der finalen Festlegung an den Originaldateien zu prüfen. Navy #071B33 ist ein Gestaltungsvorschlag.

| Kombination | Kontrast | Verwendung |
|---|---:|---|
| Blau #0262B4 auf Weiß | 6,16:1 | Link, Fokus, Bedienelement (hell) |
| Weiß auf Blau #0262B4 | 6,16:1 | Text auf Primär-Bedienelement |
| Cyan #02ADF4 auf Weiß | **2,53:1** | **nicht** als Text oder alleiniger Fokus auf hell |
| Cyan-on-light #00668F auf Weiß | 6,37:1 | Akzenttext (hell) |
| Cyan #02ADF4 auf Navy | 6,83:1 | Akzent, Fokus, Bedienelement (dunkel) |
| Navy auf Cyan #02ADF4 | 6,83:1 | Text auf Cyan-Bedienelement |
| Blau #0262B4 auf Navy | **2,81:1** | **nicht** als Text oder Fokus auf dunkel |
| Blue-on-dark #6FB2F0 auf Navy | 7,66:1 | Link (dunkel) |
| Ink #0B1726 auf Weiß | 18,03:1 | Fließtext (hell) |
| Weiß auf Navy | 17,30:1 | Fließtext (dunkel) |
| Neutral-600 #4A5A6E auf Weiß | 7,05:1 | Sekundärtext (hell) |
| Neutral-300 #A7B4C3 auf Navy | 8,21:1 | Sekundärtext (dunkel) |
| Neutral-400 #7B8A9C auf Weiß / Navy | 3,52:1 / 4,91:1 | Rahmen von Bedienelementen |

## 6. Sicherheitsheader und spätere Sanity-Vorschau

Gesetzt in `next.config.ts`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`; `X-Powered-By` ist deaktiviert.

Bewusst **nicht** gesetzt: `X-Frame-Options` und `frame-ancestors`. Das Sanity Presentation Tool zeigt die Website im iFrame des Studios. Beim CMS-Aufbau wird deshalb eine gezielte Content-Security-Policy mit `frame-ancestors 'self' <autorisierte Sanity-Studio-Origin>` eingerichtet, statt die Einbettung pauschal zu verbieten. HSTS folgt mit dem HTTPS-Hosting. Ein E2E-Test stellt sicher, dass `X-Frame-Options` nicht versehentlich gesetzt wird.

## 7. GitHub Actions

| Action | Version | Commit-SHA |
|---|---|---|
| `actions/checkout` | v7.0.1 | `3d3c42e5aac5ba805825da76410c181273ba90b1` |
| `pnpm/action-setup` | v6.1.1 | `73e46992e05b19abd31f2f3c20e0e7370d762115` |
| `actions/setup-node` | v7.1.0 | `949feb2413d6458794dcd2491c4babbbce0c15c1` |
| `actions/upload-artifact` | v7.0.2 | `cf430e030ddbb5b0abf93d22962f4752f3646cd9` |

Härtung: Pinning per vollständigem Commit-SHA, `permissions: contents: read`, `persist-credentials: false`, keine Secrets, kein `pull_request_target`, `concurrency` mit Abbruch, `timeout-minutes`, fester Runner `ubuntu-24.04`. `pnpm/action-setup` v6.1.1 unterstützt laut README pnpm bis v12.

## 8. Vertraulichkeit

Das Repository ist öffentlich. Keine Secrets, `.env`-Dateien, Kundendaten, Grundrisse, Planungsunterlagen, Zertifikatsscans, Preislisten oder Logos ohne Freigabe committen. Details in `CLAUDE.md` und `assets/brand/README.md`.
