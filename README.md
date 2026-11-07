# WiFi-Planung

Neuentwicklung des spezialisierten Webauftritts von WiFi-Planung als Teil der übergeordneten Marke BA-One.

## Projektstatus

**Phase:** Konzept- und Repository-Vorbereitung  
**Noch nicht begonnen:** produktive Frontend-Implementierung  
**Stand:** 7. November 2026

Das Repository enthält zunächst Projektbriefing, Architekturentscheidungen, Designvorgaben und den Startprompt für Claude Code. Es enthält noch keine Website-Anwendung.

## Projektdokumente

- CLAUDE.md – Arbeitsregeln für Claude Code
- docs/PROJECT_BRIEF.md – Ziele, Zielgruppen, Positionierung und Seitenstruktur
- docs/DECISIONS.md – Beschlossene Entscheidungen und offene Punkte
- docs/TECH_STACK.md – Empfohlene technische Architektur
- docs/CALCULATOR_SPEC.md – Anforderungen an den Projektkalkulator
- docs/REFERENCES_AND_CASE_STUDIES.md – Referenzen und Fallstudien
- docs/START_PROMPT_FOR_CLAUDE.md – Prompt für den ersten Claude-Code-Durchlauf

## Branch-Modell

- main: stabiler, freigegebener Stand
- develop: laufende Integration und Entwicklung
- feature/<thema>: einzelne Funktionen oder Arbeitspakete, von develop abgezweigt

Keine direkte Feature-Entwicklung auf main. Änderungen werden über Pull Requests integriert. Bis automatisierte Prüfungen eingerichtet sind, wird jeder Pull Request manuell geprüft.

## Lokale Vorbereitung

Nach dem Klonen:

    git clone https://github.com/marcklinnert/website_wifiplanung.git
    cd website_wifiplanung
    git fetch --all --prune
    git switch develop
    git status

Die konkrete Anwendung wird erst nach Prüfung der Projektvorgaben und des lokalen Entwicklungsumfelds angelegt. Siehe docs/START_PROMPT_FOR_CLAUDE.md.

## Sicherheit

Das Repository ist öffentlich. Daher niemals Zugangsdaten, API-Schlüssel, Kundendaten, vertrauliche Grundrisse, interne WLAN-Konfigurationen oder private Projektunterlagen committen.

Lokale Umgebungsvariablen gehören in nicht versionierte .env.local-Dateien. Nur eine bereinigte .env.example darf versioniert werden.

Kundenpläne und Projektdateien gehören später in einen geschützten privaten Dateispeicher, nicht in Git oder in öffentliche CMS-Medien.
