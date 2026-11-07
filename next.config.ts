import type { NextConfig } from "next";

/**
 * Grundlegende Sicherheitsheader.
 *
 * Bewusst NICHT gesetzt: X-Frame-Options und CSP frame-ancestors.
 * Die spätere Sanity-Presentation-Vorschau lädt die Website im iFrame des
 * Studios. Beim CMS-Aufbau wird deshalb eine gezielte CSP mit
 * `frame-ancestors 'self' <autorisierte Sanity-Studio-Origin>` eingerichtet
 * (siehe docs/DEVELOPMENT.md). HSTS folgt mit dem HTTPS-Hosting.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
