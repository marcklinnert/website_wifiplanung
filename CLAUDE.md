# Claude Code – Projektregeln für WiFi-Planung

Lies vor jeder größeren Aufgabe mindestens:
- docs/PROJECT_BRIEF.md
- docs/DECISIONS.md
- das jeweils betroffene Fachdokument
- `docs/TOOLS_AND_SKILLS.md`, sobald externe Tools, Plugins, Skills, MCP-Server oder Browserautomatisierung betroffen sind

## Arbeitsweise

1. Prüfe zuerst git status, den aktuellen Branch und vorhandene Änderungen. Überschreibe niemals fremde oder uncommitted Änderungen.
2. Arbeite regulär auf develop oder einem passenden feature/*-Branch. Niemals direkt auf main entwickeln.
3. Vor größeren Änderungen kurz den Plan und betroffene Dateien benennen. Bei klaren Aufgaben keine unnötigen Rückfragen stellen.
4. Keine Funktionen, Inhalte, Referenzleistungen oder Preise erfinden.
5. Bei technischen Bibliotheken und APIs zuerst aktuelle offizielle Dokumentation prüfen. Context7 verwenden, wenn es in der aktuellen Claude-Code-Sitzung tatsächlich verfügbar ist; andernfalls die offiziellen Herstellerdokumentationen direkt nutzen.
6. Externe Tools, Plugins und Skills ausschließlich gemäß `docs/TOOLS_AND_SKILLS.md` behandeln. Ein dort verlinktes Repository ist nicht automatisch installiert oder freigegeben. Keine Installation, Hooks, MCP-Server, CLI-Werkzeuge oder Umgebungsänderungen ohne separaten ausdrücklichen Auftrag.
7. Die Projektregeln und bestätigten Entscheidungen haben Vorrang vor allgemeinen Vorgaben externer Skills. Externe Design-Skills dürfen insbesondere unsere Marken-, UX-, Barrierefreiheits- und Architekturvorgaben nicht überschreiben.
8. Kleine, nachvollziehbare Änderungen bevorzugen. Keine unnötige Architektur, Abstraktion oder zusätzliche Abhängigkeiten.
9. Nach Änderungen Tests, Linting, Typecheck und relevante Browserprüfungen ausführen. Fehler nicht verschweigen.
10. Keine Secrets, API-Keys, Kundendaten oder vertraulichen Planungsdateien committen.

## Marke und Gestaltung

- WiFi-Planung ist der spezialisierte Webauftritt innerhalb der übergeordneten Marke BA-One.
- Die beiden Websites sollen langfristig ein gemeinsames visuelles Designsystem erhalten.
- Primäre Logo-Farben aus dem bereitgestellten WiFi-Planung-Logo: Blau ungefähr #0262B4, Cyan ungefähr #02ADF4, Weiß #FFFFFF. Die Werte sind Startwerte und vor finaler Token-Festlegung an den Originaldateien zu prüfen.
- Dunkles Navy ungefähr #071B33 ist ein Gestaltungsvorschlag, kein aus dem Logo extrahierter Farbwert.
- Eckige Geometrie: keine runden Karten, Buttons, Eingabefelder oder Badges. Keine dekorativen pill-shaped UI-Elemente.
- Keine Standard-Emojis. Nur konsistente professionelle SVG-/Icon-Sets oder eigens gestaltete Grafiken.
- Glossy Glass / Glassmorphism gezielt und besonders im Projektkalkulator einsetzen. Transparenz, Unschärfe und Lichtreflexe dürfen Lesbarkeit, Kontrast, Performance und Bedienbarkeit nicht verschlechtern.
- Die restliche Website muss nicht vollständig aus Glasflächen bestehen.
- Hochwertige, technische und eigenständige Gestaltung. Keine austauschbare KI-Template-Optik.
- Wenig unnötiges Scrollen: kompakte Informationsarchitektur, klare Hierarchie, Inhalte früh sichtbar. Nicht alles auf einen Bildschirm quetschen.
- Responsive und mobile-first. Animationen dezent; prefers-reduced-motion berücksichtigen.
- Keine Gestaltung auf Kosten der Barrierefreiheit. Kontrast, Tastaturbedienung, Fokuszustände und verständliche Fehlermeldungen berücksichtigen.

## Inhalt und Sprache

- Website-Sprache zunächst Deutsch.
- Bestehende Website-Texte sollen nach Möglichkeit zunächst übernommen und strukturell verbessert werden. Da ein vollständiger Crawl noch nicht vorliegt, keine fehlenden Texte erfinden.
- Fachbegriffe korrekt verwenden: Predictive WLAN Planning, Funkfeldsimulation, Coverage Heatmap, Access Point, WLAN-Kanalplanung.
- WiFi-Planung fokussiert auf digitale WLAN-Planung und WLAN-Infrastrukturplanung. Allgemeine Netzwerktechnik, Glasfaser- und Fernsehtechnik sind eigenständige BA-One-Leistungen.
- Keine Vor-Ort-Messungen und keine physische Bestandsaufnahme als WiFi-Planungsleistung anbieten oder suggerieren.
- Eine Predictive Simulation ist eine rechnergestützte Prognose und keine vor Ort verifizierte Funkmessung.

## Kalkulator und Preise

- Anforderungen stehen in docs/CALCULATOR_SPEC.md.
- Keine historischen Beispielwerte als gültige Preise ausgeben.
- Keine Preismatrix, Schwellenwerte, Faktoren oder Mindestpreise ohne ausdrückliche Freigabe ändern.
- Degressive Flächenstaffelung verwenden; keine lineare Multiplikation eines einzigen Quadratmeterpreises über die Gesamtfläche.
- Flächenregler: erste Hälfte des Reglerwegs bildet 0–500 m² ab; zweite Hälfte bildet progressiv 500–10.000 m² ab. Über 10.000 m² muss eine freie Zahleneingabe möglich sein.
- Regler und direkte Eingabe müssen dieselbe serverseitige Preisberechnung verwenden.
- Besucher müssen einen konkreten kalkulierten Mindestpreis sehen, nicht nur eine Aufforderung zur Angebotsanfrage.
- Aktuell laut Auftraggeber keine Umsatzsteuer ausweisen. Steuerstatus technisch konfigurierbar halten und vor Veröffentlichung rechtlich prüfen lassen. Nicht eigenmächtig netto oder brutto behaupten.
- Modell- und Herstellerempfehlungen zuerst anhand Ubiquiti UniFi prüfen, danach Cisco, dann weitere passende Hersteller. Technische Eignung hat Vorrang vor Herstellerpräferenz.
- Die Empfehlung konkreter AP-Hersteller und -Modelle sowie die geplante Anzahl und Positionierung gehören zur Basisleistung. Eine detaillierte Material-/Zubehörstückliste kann optional sein.

## Uploads, Sicherheit und Datenschutz

- Kunden-Grundrisse und Projektunterlagen niemals im öffentlichen Repository oder in einem öffentlichen CMS-Datensatz speichern.
- Uploads müssen privat gespeichert, serverseitig geprüft und nur über autorisierte Zugriffe bzw. zeitlich begrenzte signierte URLs abrufbar sein.
- Zulässige Formate laut Konzept: PDF, DWG, DXF, PNG und JPG; Dateigrößen, tatsächliche MIME-Typen, Malware-Prüfung und Konvertierung sind noch technisch zu definieren.
- Kundendaten und Anfragen serverseitig verarbeiten. Keine Secrets im Browser-Bundle.
- RLS/Autorisierung, Eingabevalidierung, Rate-Limits, Spam-Schutz, sichere E-Mail-Übermittlung und Datenlöschung berücksichtigen.
- Datenschutz, Einwilligungen, Aufbewahrungsfristen, Auftragsverarbeitung und EU-Hosting vor Livegang prüfen.

## Referenzen und Rechte

- Kunden, Partner und frühere Arbeitgeber strikt unterscheiden.
- Logos, Namen und Projektbeschreibungen nur mit geklärter Veröffentlichungsfreigabe verwenden.
- Die Brudermühle-PDF ist interne Projektunterlage. Keine Originalgrundrisse, exakten AP-Positionen, Funkkanäle oder Sendeleistungen veröffentlichen.
- Für öffentliche Case Studies nur freigegebene und anonymisierte Visualisierungen verwenden.
- Keine Behauptung über Projektergebnisse, Abdeckung oder Kundenzufriedenheit ohne Beleg.

## Qualitätskriterien

Eine Aufgabe gilt erst als erledigt, wenn:
- die Umsetzung mit dem Designsystem konsistent ist,
- Desktop und mobile Ansichten geprüft wurden,
- Tastaturbedienung und grundlegende Accessibility berücksichtigt sind,
- keine unbeabsichtigten Layoutverschiebungen auftreten,
- relevante Tests und Typechecks erfolgreich sind,
- die Änderung in Git sauber und verständlich dokumentiert ist.
