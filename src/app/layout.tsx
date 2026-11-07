import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WiFi-Planung",
    template: "%s | WiFi-Planung",
  },
  description: "WiFi-Planung – technisches Grundgerüst in Entwicklung.",
  // Während der Entwicklung nicht indexieren.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b33",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only bg-control px-4 py-3 font-semibold text-control-fg focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
