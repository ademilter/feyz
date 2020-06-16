export const PER_PAGE = 10

export const URL = [
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

export const PATHS = [
  { slug: 'tasarim', title: 'Tasarım' },
  { slug: 'frontend', title: 'Frontend' },
  { slug: 'yazilim', title: 'Yazılım' },
  { slug: 'turkce-kaynak', title: 'Türkçe Kaynak' },
  { slug: 'video', title: 'Video' },
  { slug: 'podcast', title: 'Podcast' },
  { slug: 'yazi', title: 'Blog Yazısı' },
  { slug: 'arac', title: 'Araç' },
  { slug: 'etkinlik', title: 'Etkinlik' },
  { slug: 'alinti', title: 'Alıntı' }
]
