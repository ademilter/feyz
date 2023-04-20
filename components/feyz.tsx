import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import { AirtableRecord } from '@/types/airtable'

export default function Feyz({ record }: { record: AirtableRecord }) {
  const isAlinti = record.tags.includes('Alıntı')

  if (isAlinti) {
    return (
      <article className="flex gap-6 py-10">
        <h2 className="font-display text-4xl font-semibold">
          <a target="_blank" href={record.url}>
            <Balancer>{record.title}</Balancer>
          </a>
        </h2>
      </article>
    )
  }

  return (
    <article className="flex gap-6 py-8">
      <div>
        <h2 className="font-display text-3xl font-bold">
          <a target="_blank" href={record.url}>
            <Balancer>{record.title}</Balancer>
          </a>
        </h2>
        <p className="mt-2">{record.summary}</p>
      </div>

      {record.image && (
        <div className="w-1/3 shrink-0">
          <Image
            src={record.image[0].url}
            alt={record.title}
            width={record.image[0].width}
            height={record.image[0].height}
          />
        </div>
      )}
    </article>
  )
}
