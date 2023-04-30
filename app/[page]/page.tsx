import { getRecords } from '@/utils/airtable'
import Page from '@/components/page'
import { DATA_PER_PAGE } from '@/utils/const'
import { pageFill } from '@/utils/helper'
import { AirtableRecord } from '@/types/airtable'

export const revalidate = 21600 // 60 * 60 * 6 = 6 hours

export async function generateStaticParams() {
  const data: AirtableRecord[] = await getRecords({})
  const pages = pageFill(data.length, DATA_PER_PAGE)
  return pages.map((page) => ({ page: page.toString() }))
}

export default async function Home({ params }: { params: { page: number } }) {
  const data: AirtableRecord[] = await getRecords({})

  const filterData = data.slice(
    (params.page - 1) * DATA_PER_PAGE,
    params.page * DATA_PER_PAGE
  )

  return <Page rawData={data} totalData={data.length} data={filterData} />
}
