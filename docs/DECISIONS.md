# Entscheidungsprotokoll

Stand: 7. November 2026

Statusbegriffe:
- **Beschlossen**: ausdrücklich vom Auftraggeber entschieden
- **Empfohlen**: Vorschlag, noch nicht abschließend freigegeben
- **Offen**: Entscheidung oder Daten fehlen

## Beschlossene Entscheidungen

| Bereich | Entscheidung | Status |
|---|---|---|
| Markenarchitektur | BA-One ist Hauptmarke; WiFi-Planung ist spezialisierter Webauftritt | Beschlossen |
| Markenauftritt | Gemeinsame visuelle Grundregeln, BA-One-Logo sichtbar auf WiFi-Planung | Beschlossen |
| Positionierung | Unternehmensmarke im Vordergrund, nicht persönliche Freelancer-Marke | Beschlossen |
| Persönliche Rolle | Marc Klinnert – Inhaber und verantwortlicher WLAN-Planer bei BA-One / WiFi-Planung | Beschlossen |
| WiFi-Planung-Leistungen | Digitale WLAN-Planung, Predictive Simulation, AP-Auswahl und Dokumentation | Beschlossen |
| Abgrenzung BA-One | Allgemeine Netzwerk-, Glasfaser- und Fernsehtechnik bei BA-One | Beschlossen |
| Vor-Ort-Messungen | Nicht Teil des WiFi-Planung-Portfolios | Beschlossen |
| Design | Eckige Formen, keine runden UI-Elemente, keine Standard-Emojis | Beschlossen |
| Glassmorphism | Dezent für Tiefe allgemein; Glossy-Glass-Hintergrund besonders für den Kalkulator | Beschlossen |
| UX | Möglichst wenig unnötiges Scrollen; kompakte, hochwertige Informationsstruktur | Beschlossen |
| Entwicklungseditor | Visueller Live-Editor im lokalen Entwicklungsworkflow | Beschlossen |
| CMS-Editor | Visueller Editor für veröffentlichte Website-Inhalte | Beschlossen |
| Projektarten | Neubau, Bestand, WLAN-Erweiterung, Neuplanung/Modernisierung | Beschlossen |
| Anforderungen | Dynamische Mehrfachauswahl abhängig von Paket, Gebäudetyp und Projektart | Beschlossen |
| Paketlogik | Basic, Professional, Premium bleiben als auswählbare Leistungsangebote; Leistungsgrenzen noch zu prüfen | Beschlossen / Details offen |
| Kalkulator | Besucher erhält einen konkreten kalkulierten Mindestpreis vor Kontaktaufnahme | Beschlossen |
| Fläche | Degressive Preisstaffel statt einheitlichem linearem Preis je m² | Beschlossen |
| Flächenregler | Erste Hälfte des Reglerwegs: 0–500 m²; zweite Hälfte progressiv: 500–10.000 m² | Beschlossen |
| Große Flächen | Über 10.000 m² freie Zahleneingabe | Beschlossen |
| Grundrisse | Upload PDF, DWG, DXF, PNG, JPG; mehrere Dateien; späteres Nachreichen möglich | Beschlossen |
| Herstellerpriorität | 1. Ubiquiti UniFi, 2. Cisco, danach weitere geeignete Hersteller | Beschlossen |
| AP-Empfehlung | Konkrete Hersteller/Modelle und geplante AP-Anzahl/Positionierung in Basisleistung | Beschlossen |
| Grundrissqualität | Maßstabsangabe: Ja / Nein / unbekannt | Beschlossen |
| Umsatzsteuer | Derzeit wird laut Auftraggeber keine Umsatzsteuer ausgewiesen; technische Konfiguration für künftige Änderung | Beschlossen |
| Referenz Brudermühle | HÖY Hotel und Wirtshaus GRASER sind ein WLAN-Projekt in einem Gebäude | Beschlossen |
| Arivo | WLAN-Erweiterung; Fernsehtechnik gehört zu BA-One | Beschlossen |

## Empfohlene technische Entscheidungen

| Bereich | Empfehlung | Status |
|---|---|---|
| Frontend | Next.js App Router + TypeScript | Empfohlen |
| Styling | Tailwind CSS, Design Tokens und komponentenbasiertes Designsystem | Empfohlen |
| Visuelles CMS | Sanity Presentation Tool / Visual Editing für Click-to-edit und Live Preview | Empfohlen |
| Private Daten | Supabase Postgres, Auth und private Storage-Buckets für Leads und vertrauliche Uploads | Empfohlen |
| Server-Kalkulation | Preisberechnung serverseitig; keine vertraulichen Preisparameter im Browser | Empfohlen |
| Motion | Motion für ausgewählte Animationen, sparsam und mit Reduced-Motion-Unterstützung | Empfohlen |
| Tests | Playwright für Browser-/End-to-End-Tests | Empfohlen |
| Entwicklungs-Live-Editor | Impeccable Live Mode lokal; Status und Kompatibilität vor Nutzung prüfen | Empfohlen |
| Paketmanager | pnpm, Lockfile committen | Empfohlen |
| Git-Workflow | main stabil, develop Integration, feature-Branches und Pull Requests | Empfohlen |

## Offene Punkte vor Produktivbetrieb

1. Vollständige Erfassung der bestehenden Website-Texte, Navigation und aktuellen Farben.
2. Finale Preismatrix inklusive Flächenstaffelung, Mindestpreisen und Gebäudefaktoren.
3. Inhaltliche Grenzen der Pakete Basic / Professional / Premium.
4. Definition der alten Position Remote-Bestandsaufnahme 149 €; sie darf nicht als Vor-Ort-Messung oder physische Aufnahme verstanden werden.
5. Neubewertung der Zusatzleistung AP-Stückliste 120 €, da konkrete AP-Modelle und -Anzahl bereits Teil der Basisleistung werden.
6. Hosting / Deployment und DNS.
7. E-Mail-Versanddienst und Absenderadresse.
8. Supabase-Projekt, EU-Region, Auftragsverarbeitungsvertrag, Backup- und Aufbewahrungskonzept.
9. Sanity-Projekt und gegebenenfalls Kosten / Rollenmodell.
10. Freigabe für Logos, Kundenreferenzen, Fotos und anonymisierte Projektvisualisierungen.
11. Rechtliche Prüfung der Umsatzsteuer-/Kleinunternehmerangaben und Website-Rechtstexte.
12. Aufbewahrungsfristen und Löschkonzept für Projektanfragen und Grundrisse.

## Veraltete oder nicht freigegebene Werte

Historische Preiswerte aus dem bisherigen Kalkulator sind in docs/CALCULATOR_SPEC.md dokumentiert, aber nicht als aktuelle Preise freigegeben. Die alte lineare Berechnung von 0,30 €/m² über eine sehr große Gesamtfläche wird nicht übernommen.
