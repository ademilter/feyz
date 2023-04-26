import { AirtableRecord } from '@/types/airtable'
import { DATA_PER_PAGE } from '@/utils/const'

export async function getRecords({
  pageSize = DATA_PER_PAGE,
  offset
}: {
  pageSize?: number
  offset?: string
}): Promise<AirtableRecord[]> {
  const url = new URL(
    `/v0/appeqvrnUnbvHVDmH/content`,
    'https://api.airtable.com'
  )
  offset && url.searchParams.append('offset', offset)
  url.searchParams.append('pageSize', pageSize.toString())
  url.searchParams.append('view', 'Grid view')
  url.searchParams.append('sort[0][field]', 'createdDate')
  url.searchParams.append('sort[0][direction]', 'desc')
  url.searchParams.append('filterByFormula', 'draft=FALSE()')

  async function getData(): Promise<AirtableRecord[]> {
    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
      }
    })
    const data = await res.json()

    if (data.offset) {
      url.searchParams.set('offset', data.offset)

      const records = await getData()

      return Array.isArray(records)
        ? [...data.records, ...records]
        : [...data.records]
    } else {
      return data.records
    }
  }

  return getData()
}
