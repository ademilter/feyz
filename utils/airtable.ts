import { AirtableRecord } from '@/types/airtable'
import { DATA_PER_PAGE } from '@/utils/const'

export async function getRecords({
  maxRecords,
  pageSize = DATA_PER_PAGE,
  offset
}: {
  maxRecords?: number
  pageSize?: number
  offset?: string
}): Promise<AirtableRecord[]> {
  const url = new URL(
    `/v0/appeqvrnUnbvHVDmH/content`,
    'https://api.airtable.com'
  )
  url.searchParams.append('pageSize', pageSize.toString())
  offset && url.searchParams.append('offset', offset)
  maxRecords && url.searchParams.append('maxRecords', maxRecords.toString())
  url.searchParams.append('view', 'Grid view')
  url.searchParams.append('sort[0][field]', 'createdDate')
  url.searchParams.append('sort[0][direction]', 'desc')
  url.searchParams.append('fields[]', 'url')
  url.searchParams.append('fields[]', 'image')
  url.searchParams.append('fields[]', 'title')
  url.searchParams.append('fields[]', 'summary')
  url.searchParams.append('fields[]', 'tags')
  url.searchParams.append('fields[]', 'createdDate')
  url.searchParams.append('filterByFormula', 'draft=FALSE()')

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
    }
  })
  const data = await res.json()

  if (data?.offset) {
    const records = await getRecords({
      offset: data.offset
    })
    return [...data.records, ...records]
  } else {
    return data.records
  }
}

// slugify(this.title, { lower: true, strict: true })
