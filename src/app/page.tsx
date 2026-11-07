/**
 * Technischer Platzhalter für Phase 1.
 * Enthält bewusst keine Marketingtexte, Leistungen, Preise oder Logos.
 * Die eigentliche Startseite folgt in einer späteren, separat freigegebenen Phase.
 */
export default function Home() {
  return (
    <main
      id="main"
      tabIndex={-1}
      data-surface="dark"
      className="flex min-h-dvh flex-col justify-center bg-surface px-4 py-16 text-fg sm:px-8"
    >
      <div className="mx-auto w-full max-w-3xl border-l-4 border-accent pl-6">
        <p className="font-mono text-sm tracking-widest text-accent uppercase">
          Phase 1 · Technisches Grundgerüst
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          WiFi-Planung
        </h1>
        <p className="mt-6 max-w-prose text-lg text-fg-muted">
          Diese Seite ist ein Platzhalter für die Entwicklung. Inhalte werden in
          einer späteren Phase ergänzt.
        </p>
      </div>
    </main>
  );
}
