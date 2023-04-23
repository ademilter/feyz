import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import Link from 'next/link'
import { DateTime } from 'luxon'
import { AirtableRecord } from '@/types/airtable'
import slugify from 'slugify'

export default function Feyz({ feyz }: { feyz: AirtableRecord }) {
  const { tags, createdDate, image, summary, title, url, source } = feyz.fields

  const isQuote = Array.isArray(tags) ? tags.includes('quote') : false
  const sourceUrl = source && new URL(source)
  const slug = slugify(title, { lower: true, strict: true })

  return (
    <article className="flex gap-8 py-10">
      <div className="grow">
        {isQuote ? (
          <h2 className="font-display text-5xl leading-tight">
            <a target="_blank" href={url}>
              <Balancer>{title}</Balancer>
            </a>
          </h2>
        ) : (
          <>
            <h2 className="font-display text-3xl font-bold leading-snug">
              <a target="_blank" href={url}>
                <Balancer>{title}</Balancer>
              </a>
            </h2>
            <p className="mt-2 opacity-80">{summary}</p>
          </>
        )}

        <footer className="mt-4 flex items-center gap-1 opacity-40">
          <Link href="/feyz/[slug]" as={`/feyz/${slug}`} className="">
            {DateTime.fromISO(createdDate).toRelative()}
          </Link>

          {sourceUrl && (
            <>
              <span className="opacity-60">/</span>
              <a href={source} target="_blank">
                {sourceUrl.hostname}
              </a>
            </>
          )}
        </footer>
      </div>

      {image && (
        <div className="w-1/3 shrink-0 pt-1">
          <Image
            src={image[0].url}
            alt={title}
            width={image[0].width}
            height={image[0].height}
            className="rounded-lg"
          />
        </div>
      )}
    </article>
  )
}
