# Technische Architektur – Empfehlung

Stand: 7. November 2026  
Status: Empfehlung zur Bestätigung vor Implementierung

## 1. Zielarchitektur

Empfohlener Aufbau:

- **Frontend und Server:** Next.js App Router + TypeScript
- **UI und Styling:** Tailwind CSS mit eigenem Design-Token-System und wiederverwendbaren Komponenten
- **CMS / Marketinginhalte:** Sanity Studio mit Presentation Tool und Visual Editing
- **Vertrauliche Projektdaten:** Supabase Postgres
- **Private Dateiuploads:** Supabase Storage mit privaten Buckets, Zugriffskontrollen und zeitlich begrenzten signierten URLs
- **Anmeldung für interne Admin-Funktionen:** Supabase Auth, rollenbasiert und mit RLS
- **Serverfunktionen:** Next.js Route Handlers / Server Actions, serverseitige Validierung und Preisberechnung
- **Animationen:** Motion (React) nur gezielt
- **Browser- und E2E-Tests:** Playwright
- **Entwicklungs-Live-Editor:** Impeccable ist als Projekt-Skill/Plugin für Design-Review vorgesehen; Live Mode nur nach praktischem Cloud-Kompatibilitätstest. Ein lokaler Workflow wird nicht vorausgesetzt.
- **Dokumentationsrecherche:** Context7 und offizielle Herstellerdokumentationen

## 2. Warum diese Kombination?

### Next.js App Router + TypeScript

Eine gemeinsame Full-Stack-Anwendung für öffentliche Seiten, Server-Routen, Formularannahme, sichere Upload-Initialisierung und die Berechnungs-API. App Router und TypeScript sind im offiziellen Next.js-Setup als empfohlener Einstieg dokumentiert.

Offizielle Dokumentation:
- https://nextjs.org/docs/app
- https://nextjs.org/docs/app/getting-started/installation

### Sanity – visueller Produktionseditor

Sanity Presentation Tool / Visual Editing bietet:
- Live-Vorschau von Entwürfen im Frontend
- Click-to-edit: im Preview auf einen Inhalt klicken und direkt zum zugehörigen Feld springen
- Live-Änderungen während der Bearbeitung
- Möglichkeit, Inhaltsbereiche visuell umzusortieren, sofern die Seitenstruktur entsprechend modelliert wurde

Offizielle Dokumentation:
- https://www.sanity.io/docs/visual-editing
- https://www.sanity.io/docs/nextjs/visual-editing-with-next-js-app-router

Sanity soll nur öffentliche Marketinginhalte, Seitenmodule, Bilder mit Veröffentlichungsfreigabe, Referenztexte und globale Website-Inhalte enthalten. Keine Kundendaten oder vertraulichen Grundrisse.

Aktuelle Sanity-Preisübersicht zum Zeitpunkt der Recherche:
- https://www.sanity.io/pricing

Der Free-Plan nennt öffentliche Datasets und Visual Editing. Private Datasets sind im Growth-Plan aufgeführt. Deshalb keine vertraulichen Preisparameter in einem öffentlichen Dataset speichern. Entweder Preisparameter in einer privaten Datenbank verwalten oder vor Nutzung eines privaten Sanity-Datasets Kosten und Rollenmodell bestätigen.

### Supabase – vertrauliche Anfragen und Dateien

Supabase soll nicht als öffentliches Medienarchiv dienen. Kundengrundrisse und Projektdateien gehören in private Storage-Buckets. Datenbanktabellen benötigen Row Level Security; Admin-Zugriffe müssen serverseitig autorisiert werden.

Offizielle Dokumentation:
- https://supabase.com/docs/guides/storage/buckets/fundamentals
- https://supabase.com/docs/guides/storage/serving/downloads
- https://supabase.com/docs/guides/auth/server-side

Private Buckets sind laut Dokumentation zugriffskontrolliert; Downloads können über autorisierte Requests oder zeitlich begrenzte signierte URLs bereitgestellt werden. Service-Role-Schlüssel dürfen nie im Browser landen.

Zu prüfen:
- Projektregion EU
- Supabase-Plan, Backups und Produktionsanforderungen
- RLS-Policies für Leads, Kalkulationen, Upload-Metadaten und Admin-Zugriff
- Auftragsverarbeitungsvertrag und Löschfristen

### Impeccable Live Mode – Entwicklungseditor

Impeccable bietet einen Claude-Code-Skill/Plugin mit Design-Review-Kommandos wie critique, audit und polish. Der Live Mode ist Beta und benötigt eine laufende Web-App sowie eine funktionierende Browser-/Helper-Verbindung. Die offizielle Dokumentation nennt Next.js als unterstütztes Webprojekt; ob die Verbindung in unserer Claude-Code-Cloud-Sitzung funktioniert, ist noch nicht bestätigt. Deshalb vor Einsatz in einer Cloud-Sitzung praktisch testen. Keine Hooks ungeprüft aktivieren.

Dokumentation:
- https://impeccable.style/docs/live/
- https://github.com/pbakaus/impeccable

Ein Fallback über Browser-Screenshots und Playwright bleibt erforderlich.

## 3. Preisverwaltung und Kalkulation

Empfohlene Trennung:
- Öffentliche Leistungsbeschreibungen und Seiteninhalte: Sanity
- Vertrauliche Preisparameter: private Supabase-Datenbank
- Preisberechnung: serverseitig
- Ergebnis und Angebotsgrundlage: im Browser anzeigen, aber auf dem Server erneut validieren
- Preisänderungen: authentifizierter Admin-Bereich mit Rollen/Rechten, Änderungsprotokoll und Vorschau

Keine geheimen Margen, Multiplikatoren oder Kalkulationsparameter in öffentlich auslieferbarem JavaScript.

## 4. Upload- und Anfragearchitektur

Ablauf:
1. Frontend erfasst Projektinformationen und ausgewählte Kalkulatoroptionen.
2. Backend validiert Eingaben und berechnet den Mindestpreis.
3. Uploads werden in privaten Speicherbereichen abgelegt.
4. Server speichert Anfrage, Preis-Snapshot und Datei-Metadaten.
5. Server verschickt eine strukturierte E-Mail an WiFi-Planung und eine Eingangsbestätigung an den Anfragenden.
6. Interne Mitarbeiter erhalten nur berechtigten Zugriff auf Anfrage und Dateien.

E-Mail-Provider / SMTP ist noch nicht ausgewählt.

Keine Kundendateien als Mail-Anhang erzwingen. Besser einen geschützten internen Verweis bereitstellen.

## 5. Deployment

Noch nicht entschieden. Vor Auswahl klären:
- bestehende Hosting- und DNS-Umgebung
- gewünschte EU-Region
- Domain- und E-Mail-DNS-Einstellungen
- Kosten und Betriebsverantwortung
- Preview-Deployments für Pull Requests

Vercel kann als Next.js-Option geprüft werden, ist aber noch keine beschlossene Vorgabe.

## 6. Entwicklungsstandards

- Aktuelle stabile Versionen zum Zeitpunkt der Implementierung prüfen; keine ungeprüften Versionsnummern in den Projektbrief schreiben.
- pnpm und Lockfile nutzen.
- TypeScript strict, ESLint, Formatierung und Typecheck.
- Playwright für wichtige Nutzerpfade.
- Automatisierte Prüfungen in GitHub Actions, sobald der App-Scaffold vorhanden ist.
- Komponenten und Design Tokens konsistent halten.
- Keine großen UI-Bibliotheken ohne klaren Mehrwert.
- Barrierefreiheit und Reduced Motion berücksichtigen.
- Keine sensiblen Umgebungsvariablen in Git.
