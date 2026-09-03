import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the supplied photographs directly from /public. This avoids relying
  // on a platform-specific image optimisation route and keeps the images
  // portable across Sites and Vercel.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
