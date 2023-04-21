import { getRecords } from '@/utils/airtable'
import Page from '@/components/page'
import { DATA_PER_PAGE } from '@/utils/const'
import { AirtableRecord } from '@/types/airtable'

export async function generateStaticParams() {
  const data: AirtableRecord[] = await getRecords({})
  const flattenTags = data.flatMap((item) => item.fields.tags)
  const uniqTags = [...new Set(flattenTags)]
  console.log(uniqTags)
  return uniqTags.map((tag) => ({ tag }))
}

export default async function Tag({ params }: { params: { page: number } }) {
  const data: AirtableRecord[] = await getRecords({})
  // const dataFilterByTag = data.filter((item) => item.fields?.tags.includes(tag))

  const filterData = data.slice(
    (params.page - 1) * DATA_PER_PAGE,
    params.page * DATA_PER_PAGE
  )

  return <Page rawData={data} data={filterData} />
}
