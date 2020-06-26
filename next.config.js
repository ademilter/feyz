const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  exportTrailingSlash: true,
  env: {
    PER_PAGE: 10,
    API_URL: isDev
      ? 'http://localhost:3000/api/dummy-news'
      : [
          'https://api.airtable.com/v0/appeqvrnUnbvHVDmH/content',
          `?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
          '&fields[]=tags',
          '&fields[]=public',
          '&fields[]=title',
          '&fields[]=image',
          '&fields[]=summary',
          '&fields[]=author',
          '&fields[]=url',
          '&fields[]=createdDate',
          '&sort[0][field]=createdDate',
          '&sort[0][direction]=desc'
        ].join('')
  },
  pwa: {
    dest: 'public',
    disable: isDev
  }
}

module.exports = withPlugins([], withPWA(nextConfig))
