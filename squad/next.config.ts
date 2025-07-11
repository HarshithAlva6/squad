import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: process.env.NODE_ENV === 'production' ? '/squad/squad' : '', 
  assetPrefix: process.env.NODE_ENV === 'production' ? '/squad/squad' : '', 
};

export default nextConfig;
