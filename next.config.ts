import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Optimasi image untuk mengurangi memori
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Experimental features untuk mengurangi bundle size
  experimental: {
    // Optimize package imports untuk framer-motion
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
