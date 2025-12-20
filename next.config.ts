import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Force www canonical host
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'schoener-fliesen.com' }],
        destination: 'https://www.schoener-fliesen.com/:path*',
        permanent: true,
      },
      // --- Specific legacy paths (put before generic index.php mapping) ---
      { source: '/index.php/impressum', destination: '/impressum', permanent: true },
      { source: '/index.php/impressum/', destination: '/impressum', permanent: true },
      { source: '/index.php/partner', destination: '/hersteller', permanent: true },
      { source: '/index.php/partner/', destination: '/hersteller', permanent: true },
      { source: '/index.php/kontakt', destination: '/kontakt', permanent: true },
      { source: '/index.php/kontakt/', destination: '/kontakt', permanent: true },
      { source: '/index.php/leistungen', destination: '/leistungen', permanent: true },
      { source: '/index.php/leistungen/', destination: '/leistungen', permanent: true },
      { source: '/index.php/show-room', destination: '/showroom', permanent: true },
      { source: '/index.php/show-room/', destination: '/showroom', permanent: true },
      { source: '/index.php/galerien/referenzen', destination: '/referenzen', permanent: true },
      { source: '/index.php/galerien/referenzen/', destination: '/referenzen', permanent: true },
      { source: '/index.php/galerien/referenzen-vor-nach', destination: '/referenzen', permanent: true },
      { source: '/index.php/galerien/referenzen-vor-nach/', destination: '/referenzen', permanent: true },
      { source: '/index.php/galerien/swarovski', destination: '/referenzen', permanent: true },
      { source: '/index.php/galerien/swarovski/', destination: '/referenzen', permanent: true },
      { source: '/index.php/wir-fuer-sie', destination: '/ueber-uns', permanent: true },
      { source: '/index.php/wir-fuer-sie/', destination: '/ueber-uns', permanent: true },
      // Legacy PHP paths -> pretty routes
      { source: '/index.php/:path*', destination: '/:path*', permanent: true },
      { source: '/kontakt.php', destination: '/kontakt', permanent: true },
      { source: '/leistungen.php', destination: '/leistungen', permanent: true },
      { source: '/ueber-uns.php', destination: '/ueber-uns', permanent: true },
      { source: '/referenzen.php', destination: '/referenzen', permanent: true },
      { source: '/showroom.php', destination: '/showroom', permanent: true },
      { source: '/hersteller.php', destination: '/hersteller', permanent: true },
      { source: '/servicegebiet.php', destination: '/servicegebiet', permanent: true },
      { source: '/impressum.php', destination: '/impressum', permanent: true },
      { source: '/datenschutz.php', destination: '/datenschutz', permanent: true },
      // Query-parameter based legacy routing, e.g. /index.php?seite=kontakt
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'seite', value: 'kontakt' }],
        destination: '/kontakt',
        permanent: true,
      },
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'seite', value: 'leistungen' }],
        destination: '/leistungen',
        permanent: true,
      },
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'seite', value: 'ueber-uns' }],
        destination: '/ueber-uns',
        permanent: true,
      },
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'seite', value: 'referenzen' }],
        destination: '/referenzen',
        permanent: true,
      },
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'seite', value: 'showroom' }],
        destination: '/showroom',
        permanent: true,
      },
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'seite', value: 'hersteller' }],
        destination: '/hersteller',
        permanent: true,
      },
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'seite', value: 'servicegebiet' }],
        destination: '/servicegebiet',
        permanent: true,
      },
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'seite', value: 'impressum' }],
        destination: '/impressum',
        permanent: true,
      },
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'seite', value: 'datenschutz' }],
        destination: '/datenschutz',
        permanent: true,
      },
      // Fallback: /index.php -> Startseite
      { source: '/index.php', destination: '/', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hoirqrkdgbmvpwutwuwj.supabase.co",
      },
    ],
    // Optimierte Bildformate für geringeren Bandwidth-Verbrauch
    formats: ['image/avif', 'image/webp'],
    // Aggressive Caching für bessere Performance
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 Jahr
  },
  // Komprimierung aktivieren
  compress: true,
};

export default nextConfig;
