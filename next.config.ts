import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (smallest), then WebP, then fall back.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images at the edge for 31 days.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
