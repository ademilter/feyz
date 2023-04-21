import { getRecords } from '@/utils/airtable'
import Page from '@/components/page'
import { DATA_PER_PAGE } from '@/utils/const'
import { AirtableRecord } from '@/types/airtable'

export default async function Home() {
  const data: AirtableRecord[] = await getRecords({})
  const filterData = data.slice(0, DATA_PER_PAGE)

  return <Page rawData={data} totalData={data.length} data={filterData} />
}
