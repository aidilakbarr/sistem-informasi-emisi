import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**", // Allow any path under picsum.photos
      },
    ],
  },
};

export default nextConfig;
