# Startprompt für Claude Code

Diesen Prompt nach dem Klonen des Repositories auf dem Branch develop in Claude Code einfügen.

---

Du übernimmst die Rolle eines erfahrenen Lead Frontend Engineers, Full-Stack Engineers und Design Engineers für das Projekt WiFi-Planung.

## Zuerst vollständig lesen

Lies zuerst:
- CLAUDE.md
- docs/PROJECT_BRIEF.md
- docs/DECISIONS.md
- docs/TECH_STACK.md
- docs/CALCULATOR_SPEC.md
- docs/REFERENCES_AND_CASE_STUDIES.md

Diese Dateien enthalten die abgestimmten Projektentscheidungen. Beschlossene Entscheidungen nicht stillschweigend ändern.

## Ziel dieses ersten Durchlaufs

Noch NICHT die komplette Website gestalten oder alle Funktionen implementieren. Führe zunächst einen kontrollierten Phase-0-/Phase-1-Start durch:

### A. Repository und Umgebung prüfen
1. Prüfe git status, aktuellen Branch, Remotes und vorhandene Dateien.
2. Arbeite ausschließlich auf develop oder einem neu angelegten feature/*-Branch. Falls der aktuelle Branch main ist, wechsle nicht blind; melde den Zustand und wechsle nach Prüfung auf develop.
3. Prüfe lokal installierte Node.js- und pnpm-Versionen.
4. Prüfe, ob bereits Dateien oder lokale Assets des Auftraggebers vorhanden sind. Keine lokalen Assets überschreiben, verschieben oder löschen.
5. Keine Secrets ausgeben oder in Git schreiben.

### B. Technische Architektur verifizieren
1. Prüfe die aktuellen stabilen offiziellen Dokumentationen zu Next.js App Router, TypeScript, Tailwind CSS, Sanity Visual Editing und Supabase.
2. Nutze Context7, falls verfügbar. Ansonsten offizielle Dokumentationen.
3. Verifiziere die derzeit kompatiblen Versionen und Installationsanweisungen; Versionsnummern nicht raten.
4. Bestätige oder korrigiere die Empfehlung aus docs/TECH_STACK.md mit kurzer Begründung.
5. Beachte besonders:
   - Sanity ist ausschließlich für veröffentlichbare Marketinginhalte vorgesehen.
   - Vertrauliche Preisparameter, Kundenanfragen und Grundrisse gehören in geschützte serverseitige Systeme.
   - Supabase Storage muss private Buckets, RLS und autorisierte Downloads nutzen.
   - Impeccable Live Mode ist ein lokales Entwicklungswerkzeug und laut Dokumentation Beta. Nicht in der Produktionswebsite aktivieren.
6. Deployment- und E-Mail-Provider sind noch nicht entschieden. Keine Accounts oder kostenpflichtigen Dienste anlegen.

### C. Technische Grundstruktur vorbereiten
Wenn keine widersprechenden lokalen Dateien vorhanden sind:
1. Scaffold eine schlanke Next.js-App im bestehenden Repository mit App Router, TypeScript, Tailwind CSS, ESLint und pnpm.
2. Halte die Versionsstände aktuell und committe den pnpm-Lockfile.
3. Richte Grundskripte für dev, build, lint, typecheck und test ein.
4. Lege eine saubere Komponenten-/Designsystem-Struktur an, aber noch keine fertige Startseite.
5. Lege .env.example mit ausschließlich leeren Platzhaltern an, wenn die Integrationen vorbereitet werden müssen. Niemals echte Schlüssel eintragen.
6. Richte eine minimale GitHub-Actions-Prüfung für Lint, Typecheck und Build ein, sofern das mit dem gewählten Setup stabil möglich ist.
7. Schreibe keine Beispielpreise, Kundendaten oder vertraulichen Projektdaten in die Anwendung.

### D. Designsystem nur als Fundament
Erstelle zunächst Design-Tokens und eine knappe Dokumentation:
- Blau ungefähr #0262B4
- Cyan ungefähr #02ADF4
- Weiß
- Navy als Vorschlag, final mit BA-One-Markenauftritt abzugleichen
- eckige Formen; keine runden UI-Elemente
- keine Standard-Emojis
- konsistente SVG-Icons
- Glossy Glass besonders für den späteren Projektkalkulator
- gute Lesbarkeit, Kontrast und Reduced Motion
- kompakte Informationsarchitektur statt unnötigem Scrollen

Keine vollständige Landingpage, keinen Preiskalkulator und keine CMS-Integration in diesem ersten Durchlauf bauen.

### E. Dokumentation und Abschluss
Aktualisiere die Projektdokumentation nur, wenn eine überprüfte technische Entscheidung geändert wird. Notiere offene Integrationen und erforderliche Zugangsdaten, ohne Zugangsdaten anzufordern oder zu speichern.

Führe die verfügbaren Prüfungen aus. Erstelle eine Zusammenfassung mit:
- festgestelltem Ausgangszustand
- gewähltem Stack und offiziellen Quellen
- angelegten Dateien und Struktur
- ausgeführten Tests samt Ergebnis
- notwendigen nächsten Schritten
- offenen Entscheidungen oder Blockern

Stoppe nach diesem Fundament und warte auf die Freigabe, bevor du die eigentliche Website-Oberfläche implementierst.

## Gestaltungs- und Qualitätsmaßstab

Die Website muss hochwertig, eigenständig und technisch glaubwürdig wirken. Vermeide austauschbare KI-Layouts, übermäßige Animationen, dekorative Emojis, runde Karten und unnötig lange Scrollstrecken.

Die fachliche Positionierung lautet: WiFi-Planung fokussiert auf digitale WLAN-Planung und Predictive Simulation. Keine Vor-Ort-Messungen oder physische Bestandsaufnahme behaupten.

---

## Hinweis für den Auftraggeber

Vor dem ersten Claude-Code-Durchlauf:
- Repository lokal klonen bzw. aktualisieren.
- Auf develop wechseln.
- Logo, Unternehmenslogos, Portrait und freigegebene Grafikdateien lokal in einem vorbereiteten Medienordner ablegen.
- Keine vertrauliche Brudermühle-Original-PDF in das öffentliche Git-Repository kopieren.
