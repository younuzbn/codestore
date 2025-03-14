/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/codestore',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
}

export default nextConfig;
