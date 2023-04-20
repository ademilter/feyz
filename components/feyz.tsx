import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import Link from 'next/link'
import { DateTime } from 'luxon'
import { AirtableRecord } from '@/types/airtable'

export default function Feyz({ feyz }: { feyz: AirtableRecord }) {
  const { tags, createdDate, image, summary, title, url } = feyz.fields

  const isQuote = Array.isArray(tags) ? tags.includes('Alıntı') : false

  if (isQuote) {
    return (
      <article className="flex gap-6 py-10">
        <h2 className="font-display text-4xl leading-tight">
          <a target="_blank" href={url}>
            <Balancer>{title}</Balancer>
          </a>
        </h2>
      </article>
    )
  }

  return (
    <article className="flex gap-6 py-10">
      <div className="grow">
        <h2 className="font-display text-3xl font-bold leading-tight">
          <a target="_blank" href={url}>
            <Balancer>{title}</Balancer>
          </a>
        </h2>

        <p className="mt-2 opacity-80">{summary}</p>

        <footer className="mt-2 flex items-center gap-1 opacity-80">
          {/* TODO: slug */}
          <Link href="/feyz/[slug]" as={`/feyz/${title}`} className="">
            {DateTime.fromISO(createdDate).toRelative()}
          </Link>
          <span className="opacity-60">/</span>
          {/*<Link
            href="/author/[slug]"
            as={`/author/${author}`}
            className=""
          >
            {author}
          </Link>*/}
        </footer>
      </div>

      {image && (
        <div className="w-1/3 shrink-0">
          <Image
            src={image[0].url}
            alt={title}
            width={image[0].width}
            height={image[0].height}
          />
        </div>
      )}
    </article>
  )
}
