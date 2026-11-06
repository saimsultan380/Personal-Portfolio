import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  // Slash, host, protocol, and case are normalized together in src/proxy.ts
  // so a single 308 covers every variant. Next still emits trailing-slash URLs.
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 's0.wp.com',
      },
    ],
  },
};

export default nextConfig;
