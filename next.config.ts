import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**", // Allow any path under picsum.photos
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com", // Menambahkan img.daisyui.com
        pathname: "/**", // Allow any path under img.daisyui.com
      },
    ],
  },
};

export default nextConfig;
