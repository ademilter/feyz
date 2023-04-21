import Feyz from '@/components/feyz'
import { AirtableRecord } from '@/types/airtable'
import Pagination from '@/components/pagination'

export default function Page({
  data = [],
  totalData
}: {
  data: AirtableRecord[]
  totalData: number
}) {
  return (
    <div>
      <div className="divide-y border-y">
        {data.map((feyz: AirtableRecord) => (
          <Feyz key={feyz.id} feyz={feyz} />
        ))}
      </div>

      <Pagination totalData={totalData} />
    </div>
  )
}
