import { getRecords } from '@/utils/airtable'
import Page from '@/components/page'
import { DATA_PER_PAGE } from '@/utils/const'
import { AirtableRecord } from '@/types/airtable'

export async function generateStaticParams() {
  const data: AirtableRecord[] = await getRecords({})
  const flattenTags = data.flatMap((item) => item.fields.tags)
  const uniqTags = [...new Set(flattenTags)]
  return uniqTags.map((tag) => ({ tag }))
}

export default async function Tag({ params }: { params: { tag: string } }) {
  const data: AirtableRecord[] = await getRecords({})
  const dataFilterByTag = data.filter((item) => {
    return item.fields?.tags.includes(params.tag)
  })
  const filterData = dataFilterByTag.slice(0, DATA_PER_PAGE)

  return (
    <Page
      rawData={data}
      data={filterData}
      totalData={dataFilterByTag.length}
      tag={params.tag}
    />
  )
}
