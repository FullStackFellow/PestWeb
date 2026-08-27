import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // PLACEHOLDER PHOTOGRAPHY ONLY.
        // Every picsum image on this site must be replaced with real
        // Pest Eliminators photography before launch.
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
