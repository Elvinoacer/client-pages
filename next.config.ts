import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows ALL domains
      },
    ],
    // Optional: If you need to allow specific domains instead, use:
    // domains: ['example.com', 'another-site.com'],
  },
};

export default nextConfig;
