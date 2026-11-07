import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex min-h-dvh flex-col justify-center bg-surface px-4 py-16 text-fg sm:px-8"
    >
      <div className="mx-auto w-full max-w-3xl border-l-4 border-control pl-6">
        <p className="font-mono text-sm tracking-widest text-accent uppercase">
          Fehler 404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-6 max-w-prose text-fg-muted">
          Die angeforderte Adresse existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-control px-5 py-3 font-semibold text-control-fg no-underline hover:bg-ink"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
