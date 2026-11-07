# Externe Tools und Skills – Projektkontext

Stand der Prüfung: 7. November 2026  
Zweck: Quellen und mögliche Werkzeuge für Claude Code dauerhaft dokumentieren. **Ein Link in diesem Dokument bedeutet weder Installation noch Freigabe.**

## Verbindliche Regeln

1. In Phase 1 werden keine dieser externen Skills oder Plugins installiert. Phase 1 bleibt auf die technische Next.js-Grundlage, Design-Tokens, Tests und CI begrenzt.
2. Vor jeder späteren Installation muss Claude die aktuelle Originalquelle, Lizenz, Installationsanleitung, Abhängigkeiten, Hooks, Netzwerkzugriffe und Cloud-Kompatibilität prüfen.
3. Keine Hooks, MCP-Server, Plugins, externen CLIs oder zusätzlichen Pakete ohne ausdrückliche Freigabe aktivieren.
4. Versionen oder Commits nach Möglichkeit pinnen und Änderungen in einem eigenen PR dokumentieren.
5. Projektentscheidungen in `CLAUDE.md` und den Fachdokumenten haben Vorrang vor allgemeinen Regeln eines externen Skills. Ein Skill darf unsere Marken- und UX-Vorgaben nicht überschreiben.
6. Da ausschließlich Claude Code im Browser / in Cloud-Sitzungen genutzt wird, muss die tatsächliche Ausführbarkeit dort geprüft werden. Lokale Installationsanleitungen sind kein Beleg für Cloud-Kompatibilität.

## Quellen und Bewertung

### 1. Taste Skill – Designrichtung und Art Direction

- Repository: https://github.com/Leonxlnx/taste-skill
- Offizielle Dokumentation: https://www.tasteskill.dev/docs
- Lizenz laut Repository: MIT
- Claude-Code-Integration: Das Projekt bietet einen Claude-Code-Plugin-Marketplace-Eintrag sowie eine Installation als Agent Skill. Der Skill heißt aktuell `design-taste-frontend`.
- Anforderungen laut Dokumentation: Node.js 22+, Chrome/Edge/Chromium; zusätzliche Bildsuche benötigt Netzwerkzugriff; keine API-Keys erforderlich.

**Nutzen für dieses Projekt:** Art Direction, visuelle Referenzsuche, eigenständige Layoutideen und Browserprüfung. Passt zum Ziel, keine generische KI-Template-Optik zu erzeugen.

**Einschränkungen:** Die Skill-Pipeline kann umfangreich und token-/zeitintensiv sein und greift für Bildmaterial auf externe Quellen zurück. Gefundene Bilder müssen einzeln hinsichtlich Lizenz, Attribution und Eignung geprüft werden. Keine fremden Fotos als BA-One-/WiFi-Planung-Projektbilder ausgeben.

**Status:** Für die spätere Designphase empfohlen. Nicht in Phase 1 installieren. Vor Nutzung in einer Cloud-Sitzung testen, ob Browserinspektion und benötigter Netzwerkzugriff funktionieren.

### 2. Impeccable – Designsystem, Review und visuelle Iteration

- Repository: https://github.com/pbakaus/impeccable
- Dokumentation: https://impeccable.style/docs/
- Live Mode: https://impeccable.style/docs/live/
- Lizenz laut Repository: Apache-2.0
- Claude-Code-Integration: Das Repository bietet einen Claude-Code-Plugin-Marketplace-Eintrag. Das Tool stellt unter anderem `critique`, `audit`, `polish`, `document` und `live` bereit.

**Nutzen für dieses Projekt:** Designreviews, Barrierefreiheits-/Responsive-Prüfungen und gezielte Verfeinerung einzelner Komponenten. Besonders sinnvoll, sobald erste echte Seiten und Komponenten existieren.

**Cloud-Hinweis:** Die Plugin-/Skill-Integration ist für Claude Code dokumentiert. Der Live Mode ist Beta und benötigt eine laufende Web-App sowie eine funktionierende Browser-/Helper-Verbindung. Ob diese Verbindung in unserer Claude-Code-Cloud-Sitzung zuverlässig funktioniert, ist noch nicht bestätigt. Daher nicht mehr pauschal als „nur lokal“ einstufen, aber Cloud-Kompatibilität vor Einsatz praktisch testen.

**Sicherheits-/Betriebshinweis:** Die Installation kann Hooks und eine Hilfs-Engine einrichten. Vor Installation genau prüfen, welche Hooks und Netzwerkzugriffe aktiviert werden. Hooks nicht ungeprüft akzeptieren. Zunächst sind die Review-Kommandos ohne Live Mode die risikoärmere Option.

**Status:** Für die spätere Design- und Reviewphase empfohlen. Nicht in Phase 1 installieren.

### 3. MotionSites Web Builder – Inspiration, nicht Produktionsstandard

- Repository: https://github.com/MotionSites-AI/claude-skill

**Bisheriger Projekt-Audit:** Die zuvor geprüfte Fassung war auf die Generierung einer einzelnen HTML-Datei ausgerichtet und verwendete externe/hot-linked Assets; außerdem wurden werbliche Hinweise im Agenten-Workflow festgestellt. Das passt nicht zu unserer geplanten wartbaren Next.js-Komponentenarchitektur.

**Nutzung:** Allenfalls als Ideensammlung für Motion-Techniken oder visuelle Referenzen. Keine generierten Ein-Datei-Websites in das Projekt übernehmen, keine fremden Assets hotlinken und keine ungeprüften Code-/Asset-Blöcke kopieren.

**Lizenz:** Vor jeder weitergehenden Übernahme erneut direkt im Repository prüfen; aus dem bisherigen Audit liegt keine belastbare Freigabe zur Übernahme fremder Assets oder Vorlagen vor.

**Status:** Nicht installieren und nicht als Produktionsgenerator einsetzen.

### 4. Playwright – zwei getrennte Werkzeuge

**A. Playwright Test (für Phase 1 vorgesehen)**

- Dokumentation: https://playwright.dev/docs/test-intro
- npm-Paket: https://www.npmjs.com/package/@playwright/test

Das ist unser Testframework für automatisierte Browser- und End-to-End-Tests. Phase 1 sieht `@playwright/test` exakt in Version `1.63.0` vor, weil diese Version zur vorinstallierten Chromium-Revision 1243 der Cloud-Umgebung passt. Diese Festlegung ist Teil des Phase-1-Plans und wird dort verifiziert.

**B. Playwright CLI (optional für Agenten-Browserarbeit)**

- Repository: https://github.com/microsoft/playwright-cli
- npm-Paket: https://www.npmjs.com/package/@playwright/cli

Die CLI ist ein separates Werkzeug für Agenten-gestützte Browseraktionen, Aufzeichnung, Selector-Inspektion und Screenshots. Das Projekt bietet zusätzlich Skills über `playwright-cli install --skills`.

Die CLI ist **nicht** dasselbe wie `@playwright/test` und ersetzt unser Testframework nicht. Eine spätere Installation muss auf Browser-Version, Browserpfad, Cloud-Berechtigungen und mögliche Versionskonflikte geprüft werden.

**Status:** Playwright Test gehört zur Phase 1 gemäß Plan. Playwright CLI nicht in Phase 1 installieren; später bei echtem Bedarf in einer Cloud-Sitzung testen.

### 5. Context7 – aktuelle Bibliotheksdokumentation

- Repository: https://github.com/upstash/context7
- Claude-Code-Plugin: https://github.com/upstash/context7/tree/master/plugins/claude/context7
- Dokumentation für Claude Code: https://github.com/upstash/context7/blob/master/docs/clients/claude-code.mdx
- Dienst: https://context7.com/
- Remote-MCP-Endpunkt laut aktueller Dokumentation: https://mcp.context7.com/mcp

Context7 kann aktuelle Bibliotheksdokumentation über MCP oder CLI-/Skill-Integration bereitstellen. Für Claude Code werden aktuell sowohl ein Plugin-Marketplace-Weg als auch `ctx7 setup` dokumentiert.

**Cloud-Hinweis:** Die gehostete MCP-Verbindung benötigt aus der Cloud-Sitzung erreichbaren Netzwerkzugriff und einen Authentifizierungs-/Anmeldeweg. In einem früheren Audit war der Zugriff aus der damaligen Cloud-Umgebung eingeschränkt. Deshalb vor Installation erneut Erreichbarkeit und Login testen. Bis dahin offizielle Herstellerdokumentationen direkt nutzen.

**Status:** Für spätere technische Arbeit empfohlen, sobald die Verbindung in Claude Code Cloud nachweislich funktioniert. Kein `.mcp.json` und keine Installation in Phase 1.

### 6. Ponytail – Code-Review- und YAGNI-Regeln

- Verifiziertes Original-Repository: https://github.com/DietrichGebert/ponytail
- Lizenz laut Repository: MIT

Das Repository enthält eine Claude-Code-Plugin-Integration, Skills und Lifecycle-Hooks. Die Review-Kommandos überschneiden sich teilweise mit unserem geplanten Review-/Testworkflow und mit den Regeln in `CLAUDE.md`.

**Cloud-Hinweis:** Die aktuelle Dokumentation sagt ausdrücklich, dass das zusätzliche Ponytail-Band nicht in Cloud-Sitzungen angezeigt wird. Das betrifft die Kosten-/Token-/Statusanzeige; andere Skill-Funktionen sind davon getrennt zu beurteilen. Die Hooks und die zusätzliche Always-on-Regelbasis sind für unser Projekt zunächst unnötige Komplexität.

**Status:** Vorläufig nicht installieren. Nur bei späterem konkretem Bedarf erneut prüfen. Das zuvor verifizierte Original-Repository ist dieses Repository; keine ähnlich benannten Forks verwenden.

### 7. Cloudflare Security Audit Skill – Sicherheitsprüfung vor Launch

- Repository: https://github.com/cloudflare/security-audit-skill

Das Skill führt mehrstufige Sicherheitsprüfungen mit Reconnaissance, coverage-orientierter Suche und unabhängiger Prüfung möglicher Findings durch.

**Wesentliche Voraussetzungen laut Repository:** Agent mit Tool-Use und parallelen Sub-Agents, Node.js und eine OS-erzwungene Sandbox für Tests/Builds/Prozesse. Die Sandbox muss externes Netzwerk deaktivieren, eine bereinigte Allowlist-Umgebung erzwingen, Ressourcen begrenzen und Schreibzugriffe auf zugewiesene Scratch-Verzeichnisse beschränken.

**Cloud-Hinweis:** Nicht voraussetzen, dass die Claude-Code-Cloud-Sitzung diese konkreten Sandbox-Anforderungen erfüllt. Vor Nutzung die Umgebung und die aktuelle Skill-Lizenz prüfen. Ohne passende Sandbox keine Ziel-Builds oder nicht vertrauenswürdigen Prozesse ausführen.

**Status:** Für eine spätere Sicherheitsphase vormerken. Nicht in Phase 1 installieren oder ausführen.

## Empfohlene Reihenfolge

1. Phase 1 ohne externe Design-/Audit-Skills fertigstellen.
2. Taste Skill als ersten Design-Assistenten prüfen und nach separater Freigabe gezielt installieren.
3. Impeccable als Review-Werkzeug prüfen; anschließend Live Mode in einer Cloud-Sitzung testen.
4. Context7 erst nach erfolgreichem Cloud-Verbindungstest aktivieren.
5. Playwright CLI nur ergänzen, wenn die bestehende Playwright-Testumgebung für Agenten-Browseraktionen nicht ausreicht.
6. Cloudflare Security Audit vor Launch nur in einer nachweislich geeigneten Sandbox einsetzen.
7. MotionSites und Ponytail zunächst nicht installieren.

## Freigabeprinzip

Claude darf aus diesem Katalog keine Installation ableiten. Jede Installation, Aktivierung von Hooks/MCP, Änderung der Cloud-Umgebung oder Aufnahme eines neuen Pakets benötigt einen separaten, vorherigen Auftrag und einen nachvollziehbaren Änderungsplan.
