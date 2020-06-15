const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

const nextConfig = {
  exportTrailingSlash: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  }
}

module.exports = withPlugins([], withPWA(nextConfig))
