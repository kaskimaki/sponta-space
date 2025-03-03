import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // ✅ Enables Next.js strict mode
  experimental: {},        // ✅ No "output: standalone"
};

export default nextConfig;
