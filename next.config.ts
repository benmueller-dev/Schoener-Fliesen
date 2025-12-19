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
