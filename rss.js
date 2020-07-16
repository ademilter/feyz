require('dotenv').config()
const fs = require('fs')
const RSS = require('rss')
const path = require('path')
const slugify = require('slugify')
const fetch = require('isomorphic-unfetch')

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

let DATA = []
const URL = [
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

async function getPosts(activePage = 1) {
  async function allData(pageOffset) {
    const response = await fetch(encodeURI(URL))
    const { records, offset } = await response.json()

    let filteredData = records.filter((row) => {
      return row.fields.createdDate && row.fields.public
    })

    DATA = [...DATA, ...filteredData]

    if (offset) {
      await sleep(300)
      await allData(offset)
    }
  }

  await allData()

  DATA = DATA.map((item) => ({
    ...item,
    slug: slugify(item.fields.title, { lower: true, strict: true })
  }))
}

const main = async () => {
  const feed = new RSS({
    title: 'Feyz',
    site_url: 'https://feyz.li',
    feed_url: 'https://feyz.li/feed.xml',
    language: 'tr',
    image_url: 'https://feyz.li/icons/apple-touch-icon.png'
  })

  await getPosts()

  DATA.forEach((post) => {
    const url = `https://feyz.li/article/${post.slug}`

    const item = {
      title: post.fields.title,
      description: post.fields.summary,
      date: new Date(post.fields.createdDate),
      author: post.fields.author,
      url,
      guid: url
    }

    if (post.fields.image) {
      const { type, size, thumbnails } = post.fields.image[0]
      item.enclosure = { url: thumbnails.large.url, size, type }
    }

    feed.item(item)
  })

  const rss = feed.xml({ indent: true })

  fs.writeFileSync(path.join(__dirname, 'public/feed.xml'), rss)
}

main()
