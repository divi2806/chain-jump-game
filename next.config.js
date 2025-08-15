/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Remove static export and base path for Vercel deployment
  trailingSlash: false,
  // Keep API routes working
  experimental: {
    serverComponentsExternalPackages: []
  }
}

module.exports = nextConfig
