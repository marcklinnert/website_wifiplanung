# UI-Komponenten

Hier entstehen ab Phase 2 die wiederverwendbaren Basiskomponenten des Designsystems (z. B. Button, Eingabefeld, Auswahl, Hinweis).

Regeln:

- Eckige Geometrie: keine Rundungen. Radius-Utilities existieren im Theme nicht; `scripts/check-css-radius.mjs` bricht den Build-Check bei abweichenden Werten ab.
- Nur semantische Tokens verwenden (`bg-surface`, `text-fg`, `text-link`, `bg-control`, `text-control-fg`, `border-border`, `outline-focus` …), keine primitiven Markenfarben direkt.
- Sichtbare Fokuszustände, Tastaturbedienung und `prefers-reduced-motion` berücksichtigen.
- Keine Standard-Emojis; nur ein konsistentes SVG-Icon-Set (Auswahl folgt separat).
