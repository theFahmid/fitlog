import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        port: '',
        pathname: '/free-photo/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
