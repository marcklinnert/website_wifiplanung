# Startanleitung und erster Arbeitsauftrag für Claude Code im Browser

Dieser Ablauf ist für **Claude Code unter https://claude.ai/code** ausgelegt. Es werden keine lokalen Terminalbefehle benötigt.

## Einrichtung in Claude Code

1. Öffne https://claude.ai/code und melde dich an.
2. Verbinde dein GitHub-Konto und installiere/autorisiere die Claude GitHub App für `marcklinnert/website_wifiplanung).
3. Wähle das Repository `marcklinnert/website_wifiplanung`.
4. Wähle als Ausgangsbranch ausdrücklich `develop`, nicht `main`.
5. Nutze die von Claude bereitgestellte Cloud-Umgebung (bei der ersten Einrichtung die Standardumgebung anlegen).
6. Wähle zunächst den Modus **Plan**.
7. Füge den nachfolgenden Arbeitsauftrag in das Eingabefeld der Browser-Sitzung ein.

Jede Cloud-Sitzung arbeitet in einer eigenen isolierten Umgebung und auf einem eigenen Arbeits-Branch. Claude soll den Pull Request gegen `develop` richten. Den Pull Request erst nach Review mergen.

---

# Arbeitsauftrag: Phase 0 – Projektprüfung und technischer Umsetzungsplan

Du übernimmst die Rolle eines erfahrenen Lead Frontend Engineers, Full-Stack Engineers und Design Engineers für das Projekt WiFi-Planung.

## 1. Zuerst vollständig lesen

Lies zuerst:
- `CLAUDE.md`
- `docs/PROJECT_BRIEF.md`
- `docs/DECISIONS.md`
- `docs/TECH_STACK.md`
- `docs/CALCULATOR_SPEC.md`
- `docs/REFERENCES_AND_CASE_STUDIES.md`

Diese Dateien enthalten die abgestimmten Projektentscheidungen. Beschlossene Entscheidungen nicht stillschweigend ändern.

## 2. Repository prüfen

- Bestätige Repository, Ausgangsbranch und Arbeits-Branch der Cloud-Sitzung.
- Prüfe alle vorhandenen Dateien und den aktuellen Projektstand.
- Das Repository enthält bisher Dokumentation und noch keine produktive Website-Anwendung.
- Verändere `main) nicht.
- Keine vorhandenen Dateien oder Assets löschen oder überschreiben.
- Keine Secrets ausgeben oder in Git schreiben.

## 3. Externe Skills und Werkzeuge recherchieren – noch nicht installieren

Prüfe die offiziellen bzw. ursprünglichen Quellen:

- Taste Skill: https://github.com/Leonxlnx/taste-skill
- Impeccable: https://github.com/pbakaus/impeccable
- MotionSites Web Builder: https://github.com/MotionSites-AI/claude-skill
- Playwright CLI: https://github.com/microsoft/playwright-cli
- Context7: https://context7.com/
- Ponytail: Repository-Adresse und Projektstatus zuerst verifizieren; nicht anhand eines vermuteten GitHub-Pfads installieren.
- Cloudflare Security Audit Skill: https://github.com/cloudflare/security-audit-skill

Prüfe bei jedem Werkzeug:
- Herkunft und Vertrauenswürdigkeit
- Lizenz und Nutzungsbedingungen
- Installationsanforderungen
- Kompatibilität mit Claude Code Cloud-Sessions
- Notwendige Berechtigungen und Netzwerkzugriffe
- tatsächlichen Nutzen für dieses Projekt
- ob es sich um ein Claude-Plugin, einen Claude-Skill, eine MCP-Integration oder ein normales CLI/Testwerkzeug handelt

Wichtig: Nicht jedes GitHub-Repository ist ein Plugin-Marketplace. Versuche nicht, ein einfaches Skill-Repository als Plugin-Marketplace hinzuzufügen. Unterscheide zwischen Account-Plugins, Projekt-Skills unter `.claude/skills/<skill-name>/SKILL.md` und CLI-/MCP-Werkzeugen.

## 4. Vorläufige Priorisierung

Zuerst auf Eignung prüfen:
1. Taste Skill – eigenständige Designrichtung
2. Impeccable – Designreview und prüfen, ob der Live Mode in Cloud-Sessions verfügbar ist
3. MotionSites Web Builder – Designreferenzen und Animationen
4. Playwright – Browser- und End-to-End-Tests; CLI-Unterstützung in Cloud-Umgebung verifizieren
5. Context7 – aktuelle technische Dokumentation

Ponytail zunächst nur prüfen. Cloudflare Security Audit für die spätere Sicherheitsprüfung vormerken.

Noch keine Skills, Plugins oder Tools ungeprüft installieren. Erst konkrete Empfehlung mit Installationsplan vorlegen.

## 5. Technische Architektur verifizieren

Prüfe aktuelle stabile offizielle Dokumentationen zu:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Sanity Visual Editing / Presentation Tool
- Supabase Postgres, Auth und private Storage
- Motion
- Playwright

Nutze Context7, falls verfügbar; andernfalls offizielle Dokumentationen. Versionsnummern und Kompatibilität nicht raten.

Bestätige oder korrigiere die Empfehlungen in `docs/TECH_STACK.md) mit kurzer Begründung.

Besonders beachten:
- Sanity nur für veröffentlichbare Marketinginhalte.
- Vertrauliche Preisparameter, Kundenanfragen und Grundrisse in geschützten serverseitigen Systemen.
- Private Supabase Storage Buckets, RLS und autorisierte Downloads.
- Impeccable Live Mode ist ein Entwicklungswerkzeug; Verfügbarkeit im Cloud-Browser separat prüfen. Nicht voraussetzen, dass ein lokaler Browser-Live-Editor in einer Cloud-Sitzung funktioniert.
- Keine Accounts oder kostenpflichtigen Dienste anlegen.
- Deployment- und E-Mail-Provider sind noch nicht entschieden.

## 6. Browser-Workflow und Asset-Handling

- Es wird ausschließlich im Browser gearbeitet. Keine Anweisungen geben, die lokale PowerShell, Git CLI, VS Code oder einen lokalen Dateipfad voraussetzen.
- Prüfe, wie in Claude Code Web Dateien an eine Sitzung angehängt bzw. in die Cloud-Arbeitsumgebung eingebracht werden können.
- Weise darauf hin, dass vertrauliche Projektunterlagen und Originalgrundrisse nicht in das öffentliche Repository hochgeladen werden dürfen.
- Falls lokale Assets fehlen, dokumentiere die benötigten Dateien; verwende keine erfundenen Platzhalterlogos als echte Referenzen.

## 7. Noch keine Implementierung

In dieser Phase:
- Keine Website-App scaffolden.
- Keine Startseite bauen.
- Keinen Kalkulator bauen.
- Keine CMS-Integration implementieren.
- Keine externen Dienste einrichten.
- Keine Dateien ändern oder installieren, außer wenn eine rein notwendige Dokumentationskorrektur nach Rückfrage freigegeben wurde.

## 8. Ergebnis

Erstelle einen klar strukturierten Bericht mit:
- geprüftem Repository- und Branch-Zustand
- bestätigt/korrigierter Technologiearchitektur
- Skills und Tools: geeignet, ungeeignet, offene Prüfung
- Kompatibilität mit Claude Code Cloud-Sessions
- Vorschlag zur Asset-Übermittlung
- Risiken und benötigte externe Freigaben
- konkrete nächste Phase zur Freigabe

Warte danach auf meine ausdrückliche Freigabe. Keine Implementierung vor dieser Freigabe.
