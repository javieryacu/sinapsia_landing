import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export when explicitly defined (e.g. for manual static packaging for Hostinger)
  ...(process.env.OUTPUT_EXPORT === "true" && {
    output: "export",
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
