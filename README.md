# WiFi-Planung

Neuentwicklung des spezialisierten Webauftritts von WiFi-Planung als Teil der übergeordneten Marke BA-One.

## Projektstatus

**Phase:** Konzept- und Repository-Vorbereitung  
**Noch nicht begonnen:** produktive Frontend-Implementierung  
**Stand:** 7. November 2026

Das Repository enthält zunächst Projektbriefing, Architekturentscheidungen, Designvorgaben und den Startprompt für Claude Code. Es enthält noch keine Website-Anwendung.

## Projektdokumente

- `CLAUDE.md` – Arbeitsregeln für Claude Code
- `docs/PROJECT_BRIEF.md` – Ziele, Zielgruppen, Positionierung und Seitenstruktur
- `docs/DECISIONS.md` – Beschlossene Entscheidungen und offene Punkte
- `docs/TECH_STACK.md` – Empfohlene technische Architektur
- `docs/CALCULATOR_SPEC.md` – Anforderungen an den Projektkalkulator
- `docs/REFERENCES_AND_CASE_STUDIES.md` – Referenzen und Fallstudien
- `docs/START_PROMPT_FOR_CLAUDE.md` – Startanleitung und erster Arbeitsauftrag

## Arbeiten ausschließlich im Browser

Das Projekt ist für **Claude Code im Browser (Cloud-Sessions)** vorbereitet. Lokale Installation von Git, Node.js, pnpm, VS Code oder PowerShell ist für diesen Workflow nicht erforderlich.

1. Öffne [Claude Code](https://claude.ai/code) und verbinde dein GitHub-Konto.
2. Autorisiere die Claude GitHub App für das Repository `marcklinnert/website_wifiplanung`.
3. Wähle das Repository und als Ausgangsbranch `develop`.
4. Starte die erste Sitzung im Modus **Plan**, lies den Startprompt in `docs/START_PROMPT_FOR_CLAUDE.md) und lasse zunächst nur einen Plan erstellen.
5. Nach Prüfung und Freigabe darf Claude die technische Basis umsetzen.
6. Prüfe anschließend den erzeugten Pull Request. Zielbranch muss `develop` sein. Nicht ungeprüft mergen.

Claude Code Cloud-Sessions arbeiten in einer isolierten Umgebung und erstellen für Aufgaben eigene Arbeits-Branches. Änderungen werden anschließend über einen Pull Request zur Prüfung bereitgestellt.

## Branch-Modell

- `main`: stabiler, freigegebener Stand
- `develop`: laufende Integration und Entwicklung
- `feature/<thema>`: einzelne Funktionen oder Arbeitspakete

Keine ungeprüften Änderungen direkt auf `main`. Pull Requests immer kontrollieren und manuell freigeben.

## Sicherheit

Das Repository ist öffentlich. Daher niemals Zugangsdaten, API-Schlüssel, Kundendaten, vertrauliche Grundrisse, interne WLAN-Konfigurationen oder private Projektunterlagen committen.

Lokale Umgebungsvariablen gehören in nicht versionierte `.env.local`-Dateien. Nur eine bereinigte `.env.example` darf versioniert werden.

Kundenpläne und Projektdateien gehören später in einen geschützten privaten Dateispeicher, nicht in Git oder in öffentliche CMS-Medien.

## Optional: lokale Entwicklung

Ein lokaler Workflow über Git, Node.js, pnpm, VS Code und Claude Code CLI kann später zusätzlich eingerichtet werden. Er ist für den aktuellen browserbasierten Start nicht notwendig.
