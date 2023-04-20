import { FeyzItem, getRecords } from '@/utils/airtable'
import Page from '@/components/page'
import { DATA_PER_PAGE } from '@/utils/const'
import { AirtableRecord } from '@/types/airtable'

export default async function Home() {
  const data: AirtableRecord[] = await getRecords({ maxRecords: DATA_PER_PAGE })

  return <Page data={data} />
}
