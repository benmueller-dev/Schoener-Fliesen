import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
