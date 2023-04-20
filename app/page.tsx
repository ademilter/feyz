import Container from '@/components/container'
import { getRecords } from '@/utils/airtable'
import { AirtableRecord } from '@/types/airtable'
import Feyz from '@/components/feyz'

export default async function Home() {
  const data: AirtableRecord[] = await getRecords({})

  return (
    <div className="divide-y border-y">
      {data.map((record) => (
        <Feyz key={record.id} record={record} />
      ))}
    </div>
  )
}
