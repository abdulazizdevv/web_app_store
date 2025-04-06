import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '/products/images/**',
      },
    ],
  },
  turbo: false, // yoki transpilePackages: []
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dummyjson.com/:path*',
      },
    ];
  },
};

export default nextConfig;
