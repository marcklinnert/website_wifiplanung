# Projektkalkulator – fachliche Spezifikation

Stand: 7. November 2026  
Status: Anforderungen teilweise beschlossen; endgültige Beträge und Preisformeln offen.

## 1. Ziel

Der Kalkulator soll aus realistischen Projektangaben einen nachvollziehbaren kalkulierten Mindestpreis erzeugen. Der Besucher soll vor Kontaktaufnahme eine konkrete Zahl und eine klare Liste der enthaltenen Leistungen erhalten.

Keine reine Ausgabe „Angebot anfragen“ ohne Preisorientierung.

Der angezeigte Mindestpreis ist eine belastbare erste Kalkulation auf Basis der Angaben, aber kein verbindliches Angebot. Nach Prüfung der tatsächlichen Planungsunterlagen kann der endgültige Projektumfang bestätigt werden.

## 2. Projektarten

- Neubau
- Bestandsgebäude
- Erweiterung eines bestehenden WLANs
- Neuplanung / Modernisierung eines bestehenden WLANs

Je nach Auswahl dynamische Folgefragen.

## 3. Gebäudetypen

Mindestens:
- Büro / Unternehmen
- Hotel / Aparthotel
- Industrie / Produktion
- Logistik / Lager
- Krankenhaus / Gesundheit
- Schulen / Hochschulen / Campus
- Gastronomie
- Öffentliche Einrichtungen / Behörden
- Privat / Wohnimmobilie
- Sonstige / Planer- und Partnerprojekte

Fragebögen müssen je Gebäudetyp spezifisch sein. Beispiele:
- Hotel: Gästezimmer, Lobby, Restaurant, Konferenz, Wellness, Personalbereiche, Außenbereiche, Nebengebäude.
- Industrie: Hallenhöhe, Maschinen, Metallregale, Scanner, mobile Fahrzeuge, Echtzeitanwendungen.
- Krankenhaus: Stationen, Patientenzimmer, OP-/Untersuchungsbereiche, Personal, Geräte und Verfügbarkeitsanforderungen.
- Büro: Arbeitsplätze, Meetingräume, VoIP, Videokonferenzen, Gästezugänge.
- Gastronomie: Sitzplätze, Gastraum, Küche, Terrasse, Kassen-/Bestellgeräte.

## 4. Leistungspakete

Vorhandene Pakete sollen zunächst erhalten bleiben:
- Basic – WLAN Konzept: historisch ab 490 €
- Professional – Business WLAN Planung: historisch ab 1.290 €
- Premium – Enterprise WLAN Design: historisch ab 2.990 €

Die Pakete beeinflussen, welche technischen Anforderungen abgefragt und welche Leistungen eingeschlossen sind. Die genaue Leistungsabgrenzung und aktuelle Preisfreigabe sind offen.

Wenn Kunden mit ihrer Auswahl Anforderungen außerhalb eines Pakets wählen, einen Hinweis und passende Upgrade-Empfehlung anbieten. Kunde nicht blockieren; bisherige Eingaben bewahren.

## 5. Dynamische Mehrfachauswahl für WLAN-Anforderungen

Die Auswahl wird von Paket, Gebäudetyp und Projektart abhängig gemacht. Mögliche Anforderungen:
- Gäste-WLAN
- Mitarbeiter-WLAN
- VoIP / WLAN-Telefonie
- Videokonferenzen
- Streaming / IPTV
- Hohe Nutzerdichte / viele gleichzeitige Geräte
- Mobile Scanner / Lagerlogistik
- IoT / Smart Building
- Echtzeitkommunikation
- Kritische Anwendungen / höhere Verfügbarkeitsanforderungen
- Mehrere Gebäude / Campus
- Weitere Anforderungen als Freitext

Anzahl gleichzeitig verbundener Geräte kann abgefragt werden, wenn relevant.

## 6. Flächen- und Etagenangaben

### Flächenregler

- Gesamte Planungsfläche in m².
- Erste Hälfte des visuellen Reglerwegs: 0 bis 500 m².
- Zweite Hälfte: progressiv und nichtlinear 500 bis 10.000 m².
- Über 10.000 m²: freie Zahleneingabe ohne künstliche Obergrenze.
- Direkte Zahleneingabe muss immer möglich sein.
- Regler und Zahleneingabe müssen identische Ergebnisse liefern.
- Für die Preisberechnung gilt die tatsächliche Fläche, nicht der Slider-Prozentwert.
- Der Regler braucht klare Zwischenmarken und verständliche Beschriftungen.

Die konkrete Kurvenfunktion und Schrittweite werden nach UX-Test festgelegt. Kleinere Flächen müssen fein einstellbar bleiben.

### Weitere Gebäudedaten

- Anzahl der Etagen
- ggf. Anzahl von Gästezimmern, Arbeitsplätzen, Sitzplätzen oder vergleichbaren branchenspezifischen Einheiten
- Anzahl einzelner Gebäude / Gebäudeteile
- Gebäudestruktur und bekannte Besonderheiten

## 7. Flächenpreis und Preislogik

Beschlossen:
- Degressive Flächenstaffelung: der Grenzpreis je zusätzlichem m² sinkt mit wachsender Fläche.
- Kein einheitlicher m²-Satz für die gesamte Fläche.
- Gebäudekomplexität, Etagen, technische Anforderungen und optionale Leistungen separat abbilden.
- Mindestpreis je Projekt-/Leistungsbereich.
- Konkreten kalkulierten Mindestpreis am Ende anzeigen.

Vorgeschlagene Modellformel:
Preis = max(Mindestpreis, Grundaufwand + degressiver Flächenanteil + Etagenfaktor + Gebäudefaktoren + technische Faktoren + gewählte Zusatzleistungen).

Keine endgültigen Zahlen oder Faktoren ohne Freigabe hinterlegen.

### Historische Werte aus dem bisherigen Kalkulator (noch zu verifizieren)

- Grundpreis im Beispiel: 490 €
- Flächenzuschlag im alten Beispiel: 0,30 €/m²; bei 109.300 m² ergaben sich 32.790 €. Dieser lineare Ansatz wird nicht übernommen.
- Etagenzuschlag im Beispiel: 300 €; genaue Regel offen.
- Remote-Bestandsaufnahme: 149 €; fachliche Definition offen. Darf nicht als Vor-Ort-Messung oder physische Bestandsaufnahme angeboten werden.
- Zusatzleistungen historisch:
  - AP-Stückliste: 120 €
  - Kanalplanung: 180 €
  - Interferenzanalyse: 200 €
  - Kapazitätsplanung: 250 €
  - Montageplanung: 220 €
  - PDF-Projektreport: 150 €
  - CAD-Dokumentation: 280 €
  - Partner-Workshop: 350 €

Die Werte sind Altbestand aus einer Videoaufnahme, keine bestätigte aktuelle Preisliste. Insbesondere AP-Stückliste muss neu abgegrenzt werden, weil AP-Modell und Anzahl künftig schon zur Basisleistung gehören.

## 8. Basisleistung – fachlicher Umfang

Grundsätzlich in der Basisplanung enthalten:
- Prüfung der bereitgestellten digitalen Grundrisse und Projektinformationen
- Analyse der Nutzung und Gebäudeangaben
- Rechnergestützte Predictive WLAN Simulation
- Coverage Heatmaps / Funkfeldprognose
- AP-Auswahl und Empfehlung konkreter Hersteller und Modelle
- Ermittlung und Positionierung der geplanten Access Points
- Planungsannahmen und technische Ergebnisdokumentation

Keine Vor-Ort-Messung, kein physischer Site Survey und keine vor Ort verifizierte Messabdeckung.

### Herstellerpriorität

1. Ubiquiti UniFi
2. Cisco
3. Danach je nach Projektanforderung z. B. HPE Aruba Networking, RUCKUS, TP-Link Omada und weitere geeignete Hersteller

Die technische Eignung hat Vorrang. Konkrete Modellinformationen bei jeder Empfehlung anhand aktueller offizieller Herstellerdaten prüfen.

Eine detaillierte Materialliste inklusive Zubehör, Switches, PoE, Lizenzen und weiteren Komponenten kann optional bleiben.

## 9. Grundriss- und Dokumentenupload

Erlaubte Formate:
- PDF
- DWG
- DXF
- PNG
- JPG

Funktionalität:
- mehrere Dateien
- jetzt hochladen oder später nachreichen
- Abfrage, ob der Grundriss maßstabsgetreu ist: Ja / Nein / Weiß ich nicht
- Dateien einer Anfrage sicher zuordnen
- private Speicherung, keine öffentlichen URLs
- Validierung von MIME-Typ, Dateigröße und Dateiendung
- Schutz gegen schädliche Dateien
- Vorschau und Konvertierung bei DWG/DXF nach technischer Prüfung

## 10. Projektübersicht und Anfrage

Vor dem Absenden alle Angaben zusammenfassen:
- Projektart
- Gebäudetyp
- Leistungspaket
- Fläche, Etagen und weitere Gebäudedaten
- WLAN-Anforderungen
- Zusatzleistungen
- vorhandene Infrastruktur, wo relevant
- hochgeladene oder später nachzureichende Pläne
- kalkulierter Mindestpreis und enthaltene Leistungen

Kontaktdaten:
- Ansprechpartner (Pflicht)
- Unternehmen (abhängig von Kundentyp)
- E-Mail (Pflicht)
- Telefonnummer (optional oder je nach gewünschtem Kontaktweg)
- Projektstandort (Pflicht)
- bevorzugte Kontaktaufnahme: Telefon oder Teams
- Projektzeitraum und Zusatzinformationen optional

Kunde kann vor dem Absenden zu jedem Abschnitt zurückkehren, ohne Datenverlust.

Übermittlung:
- serverseitige Validierung und Speicherung
- strukturierte E-Mail an WiFi-Planung
- Bestätigung an den Kunden
- Datei-Verweise nur geschützt intern zugänglich
- zusätzliche Funktion zum Kopieren der Anfrage oder Öffnen eines E-Mail-Entwurfs
- nicht ausschließlich auf mailto: verlassen

## 11. Umsatzsteuer / Preisanzeige

Laut Auftraggeber wird derzeit keine Umsatzsteuer ausgewiesen. Der Steuerstatus muss konfigurierbar bleiben, damit die Website bei einer späteren Änderung angepasst werden kann.

Aktuell keine Netto- oder Brutto-Bezeichnung verwenden, die steuerlich irreführend wäre. Rechtstext und korrekte Steuerhinweise vor Livegang anhand der tatsächlichen steuerlichen Situation prüfen lassen.

## 12. Offene Preisentscheidungen

1. Finale degressive m²-Stufen und Grenzpreise.
2. Grundpreise und Mindestpreise je Paket / Projektart.
3. Etagenzuschläge.
4. Gebäudekomplexitätsfaktoren.
5. Technische Anforderungszuschläge.
6. Inklusivleistungen der Pakete.
7. genaue Definition der Remote-Bestandsaufnahme 149 €.
8. Neudefinition der AP-Stückliste.
9. welche Zusatzleistungen separat abrechenbar bleiben.
10. Preisfreigabe anhand echter Beispielszenarien.
