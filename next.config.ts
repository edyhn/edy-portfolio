import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  // Diperlukan agar Turbopack bisa resolve Sanity Studio ESM modules
  transpilePackages: ["next-sanity", "sanity", "@sanity/ui", "@sanity/vision"],
};

export default nextConfig;
