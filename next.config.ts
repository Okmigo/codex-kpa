import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // This is the key fix - tells Next.js where to find assets in static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/codex-kpa' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/codex-kpa' : '',
  images: {
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;