/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: 'export',
  experimental: {
    appDir: true
  },
  images: {
    domains: ['v5.airtableusercontent.com']
  }
}

module.exports = nextConfig
