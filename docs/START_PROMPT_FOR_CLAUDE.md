# Startanleitung und erster Arbeitsauftrag für Claude Code im Browser

Dieser Ablauf ist für **Claude Code unter https://claude.ai/code** ausgelegt. Es werden keine lokalen Terminalbefehle benötigt.

## Einrichtung

1. Öffne https://claude.ai/code und melde dich an.
2. Verbinde dein GitHub-Konto und autorisiere die Claude GitHub App für `marcklinnert/website_wifiplanung).
3. Wähle das Repository `marcklinnert/website_wifiplanung`.
4. Wähle als Ausgangsbranch ausdrücklich `develop`, nicht `main`.
5. Nutze die Cloud-Umgebung von Claude Code.
6. Wähle zunächst den Modus **Plan**.
7. Füge den nachfolgenden Auftrag in das Eingabefeld ein.

Jede Cloud-Sitzung arbeitet in einer eigenen isolierten Umgebung und auf einem eigenen Arbeits-Branch. Erstelle Änderungen als Pull Request gegen `develop). Pull Requests erst nach Review mergen.

---

# Arbeitsauftrag: Phase 0 – Projektprüfung und Umsetzungsplan

Du bist Lead Frontend Engineer, Full-Stack Engineer und Design Engineer für WiFi-Planung.

## Zuerst lesen

Lies vollständig:
- `CLAUDE.md`
- `docs/PROJECT_BRIEF.md`
- `docs/DECISIONS.md`
- `docs/TECH_STACK.md`
- `docs/CALCULATOR_SPEC.md`
- `docs/REFERENCES_AND_CASE_STUDIES.md`

Beschlossene Entscheidungen nicht stillschweigend ändern.

## 1. Repository prüfen

- Bestätige Repository, Ausgangsbranch und Branch der Cloud-Sitzung.
- Prüfe alle Dateien. Das Repository enthält bisher Projektunterlagen, noch keine Website-App.
- Keine Änderungen direkt auf `main`.
- Keine Dateien oder Assets löschen oder überschreiben.
- Keine Secrets ausgeben oder committen.

## 2. Skills und Werkzeuge recherchieren – noch nicht installieren

Prüfe offizielle bzw. ursprüngliche Quellen:
- Taste Skill: https://github.com/Leonxlnx/taste-skill
- Impeccable: https://github.com/pbakaus/impeccable
- MotionSites Web Builder: https://github.com/MotionSites-AI/claude-skill
- Playwright CLI: https://github.com/microsoft/playwright-cli
- Context7: https://context7.com/
- Ponytail: Repository-Adresse und Projektstatus zuerst verifizieren; keinen vermuteten Pfad installieren.
- Cloudflare Security Audit Skill: https://github.com/cloudflare/security-audit-skill

Prüfe Herkunft, Lizenz, Installationsanforderungen, Kompatibilität mit Claude Code Cloud-Sessions, Berechtigungen, Sicherheitsrisiken und tatsächlichen Nutzen.

Unterscheide zwischen Claude-Plugins, Projekt-Skills unter `.claude/skills/<skill-name>/SKILL.md`, MCP-Integrationen und normalen CLI-/Testwerkzeugen. Nicht jedes GitHub-Repository ist ein Plugin-Marketplace.

### Priorisierung
1. Taste Skill
2. Impeccable – insbesondere Cloud-Kompatibilität des Live Mode prüfen
3. MotionSites Web Builder
4. Playwright
5. Context7

Ponytail zunächst nur prüfen. Cloudflare Security Audit für eine spätere Sicherheitsprüfung vormerken.

Noch nichts ungeprüft installieren. Zuerst Empfehlung und Installationsplan vorlegen.

## 3. Technische Architektur verifizieren

Prüfe aktuelle stabile offizielle Dokumentation zu Next.js App Router, TypeScript, Tailwind CSS, Sanity Visual Editing, Supabase, Motion und Playwright. Nutze Context7, falls verfügbar. Versionen und Kompatibilität nicht raten.

Bestätige oder korrigiere `docs/TECH_STACK.md` mit kurzer Begründung.

Beachte:
- Sanity nur für veröffentlichbare Marketinginhalte.
- Vertrauliche Preisparameter, Kundenanfragen und Grundrisse in geschützten serverseitigen Systemen.
- Private Storage-Buckets, RLS und autorisierte Downloads.
- Impeccable Live Mode ist ein Entwicklungswerkzeug. Verfügbarkeit in Cloud-Sessions prüfen und nicht voraussetzen.
- Keine externen Accounts oder kostenpflichtigen Dienste anlegen.
- Hosting und E-Mail-Provider sind noch nicht entschieden.

## 4. Browser-Workflow und Assets

- Ausschließlich im Browser arbeiten. Keine lokalen PowerShell-, Git-CLI- oder VS-Code-Befehle als Voraussetzung nennen.
- Prüfe, wie Dateien in eine Claude-Code-Cloud-Session eingebracht werden.
- Vertrauliche Projektunterlagen und Originalgrundrisse niemals in das öffentliche Repository laden.
- Fehlende Logos oder Assets dokumentieren, nicht mit erfundenen echten Referenzen ersetzen.

## 5. Noch keine Implementierung

In dieser Phase:
- Keine Website-App scaffolden.
- Keine Startseite und keinen Kalkulator bauen.
- Keine CMS-Integration implementieren.
- Keine externen Dienste einrichten.
- Keine Dateien ändern oder installieren, außer eine notwendige Dokumentationskorrektur wird vorher vorgeschlagen und freigegeben.

## 6. Ergebnis

Erstelle einen strukturierten Bericht:
- Repository- und Branch-Zustand
- bestätigte oder korrigierte Architektur
- Skills und Tools: geeignet, ungeeignet, noch zu prüfen
- Cloud-Kompatibilität
- Asset-Übermittlung
- Risiken und notwendige Freigaben
- konkrete Empfehlung für die nächste Phase

Warte danach auf meine ausdrückliche Freigabe. Keine Implementierung vor dieser Freigabe.

## Qualitätsmaßstab

Eigenständiges, hochwertiges und technisch glaubwürdiges Design. Keine austauschbaren KI-Layouts, keine dekorativen Standard-Emojis, keine runden UI-Elemente und keine unnötigen Scrollstrecken.

WiFi-Planung bietet digitale WLAN-Planung und Predictive Simulation. Keine Vor-Ort-Messungen oder physische Bestandsaufnahme behaupten.
