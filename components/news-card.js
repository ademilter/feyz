import React, { Fragment } from 'react'
import cn from 'classnames'
import { DateTime } from 'luxon'
import { PATHS } from '../constants'

import styles from './news-card.module.css'

import Link from 'next/link'
import A from './a'

function Footer({ slug, createdDate, tags, author }) {
  return (
    <footer className={styles.footer}>
      <Link href="/article/[slug]" as={`/article/${slug}`}>
        <a className={styles.datetime}>
          {DateTime.fromISO(createdDate).toRelative()}
        </a>
      </Link>
      {author && (
        <>
          {', '}
          <A href={`https://twitter.com/${author}`} className={styles.author}>
            {author}
          </A>
        </>
      )}
      {tags.map((tag) => {
        const path = PATHS.find((path) => path.title === tag)
        if (!path) return null
        return (
          <Fragment key={tag}>
            {', '}
            <Link href="/tag/[tag]" as={`/tag/${path.slug}`}>
              <a>{path.title}</a>
            </Link>
          </Fragment>
        )
      })}
    </footer>
  )
}

function NewsCard({
  slug,
  url,
  title,
  createdDate,
  author,
  summary,
  tags = [],
  image,
  className
}) {
  const isQuote = tags.find((tag) => tag === 'Alıntı')
  const photo = image ? image[0].thumbnails?.large || image[0] : null

  if (isQuote)
    return (
      <article className={cn(styles.card, className)}>
        <h2 className={styles.quote}>
          <A href={url}>{title}</A>
        </h2>
        <Footer
          createdDate={createdDate}
          tags={tags}
          slug={slug}
          author={author}
        />
      </article>
    )

  return (
    <article className={cn(styles.card, photo && styles.withPhoto, className)}>
      {/* PHOTO */}
      {photo && (
        <figure className={styles.image}>
          <A href={url} aria-hidden="true" tabIndex="-1">
            <picture>
              <source srcSet={photo.url} />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVQYV2P4DwABAQEAWk1v8QAAAABJRU5ErkJggg=="
                loading="lazy"
                alt={title}
              />
            </picture>
          </A>
        </figure>
      )}

      {/* CONTENT */}
      <div>
        {/* HEADER */}
        <header className={styles.header}>
          <h2 className={styles.title}>
            <A href={url}>{title}</A>
          </h2>
          <p className={styles.summary}>{summary}</p>
        </header>

        <Footer
          createdDate={createdDate}
          tags={tags}
          slug={slug}
          author={author}
        />
      </div>
    </article>
  )
}

export default NewsCard
