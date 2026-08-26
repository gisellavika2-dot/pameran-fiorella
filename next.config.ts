import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained static site that can be served directly from
  // Plesk's httpdocs directory without a long-running Node.js process.
  output: "export",
  trailingSlash: true,
  images: {
    // The built-in image optimizer requires a Next.js server. Static hosting
    // serves the original assets while preserving next/image sizing/layout.
    unoptimized: true,
  },
};

export default nextConfig;
