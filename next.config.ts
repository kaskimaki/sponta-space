import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  
  experimental: {},
  images: {
    domains: ['sponta.space'],
  },
};

export default nextConfig;
