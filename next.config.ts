import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ✅ Ensures proper deployment on Vercel
};

export default nextConfig;
