# Bibliothek / Domänenlogik

Hier entsteht später gemeinsam genutzte Logik (z. B. Validierung, Formatierung).

Wichtig:

- **Preis- und Provisionslogik** (Projektkalkulator, Partnerprogramm) wird ausschließlich serverseitig umgesetzt und mit `server-only` gegen Import in Client-Komponenten geschützt.
- Keine Preise, Faktoren, Schwellenwerte, Mindestpreise oder Provisionssätze im Quellcode hinterlegen, solange sie nicht ausdrücklich freigegeben und als Konfiguration vorgesehen sind. Quelle der Anforderungen: `docs/CALCULATOR_SPEC.md` und `docs/PARTNER_PROGRAM_SPEC.md`.
- Keine Secrets oder Kundendaten im Repository.
