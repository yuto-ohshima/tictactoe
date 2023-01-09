/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
