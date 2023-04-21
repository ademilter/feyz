import { getRecords } from '@/utils/airtable'
import Page from '@/components/page'
import { DATA_PER_PAGE } from '@/utils/const'
import { AirtableRecord } from '@/types/airtable'
import { pageFill } from '@/utils/helper'

export async function generateStaticParams({
  params
}: {
  params: { tag: string; page: number }
}) {
  const data: AirtableRecord[] = await getRecords({})
  const dataFilterByTag = data.filter((item) =>
    item.fields?.tags.includes(params.tag)
  )
  const pages = pageFill(dataFilterByTag.length, DATA_PER_PAGE)
  return pages.map((page) => ({ page: page.toString(), tag: params.tag }))
}

export default async function Tag({
  params
}: {
  params: { tag: string; page: number }
}) {
  const data: AirtableRecord[] = await getRecords({})
  const dataFilterByTag = data.filter((item) =>
    item.fields?.tags.includes(params.tag)
  )

  const filterData = dataFilterByTag.slice(
    (params.page - 1) * DATA_PER_PAGE,
    params.page * DATA_PER_PAGE
  )

  return (
    <Page
      rawData={data}
      data={filterData}
      totalData={dataFilterByTag.length}
      tag={params.tag}
    />
  )
}
