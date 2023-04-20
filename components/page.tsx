import Feyz from '@/components/feyz'
import { FeyzItem } from '@/utils/airtable'
import { AirtableRecord } from '@/types/airtable'

export default function Page({ data = [] }: { data: AirtableRecord[] }) {
  return (
    <div>
      <div className="divide-y border-y">
        {data.map((feyz: AirtableRecord) => (
          <Feyz key={feyz.id} feyz={feyz} />
        ))}
      </div>
    </div>
  )
}
