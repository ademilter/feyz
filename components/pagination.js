import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

import styles from './pagination.module.css'
import { pageFill } from '../utils/helper'

function News({ totalData, className, tag }) {
  const PAGES = pageFill(totalData)

  return (
    <div className={cn(styles.pagination, className)}>
      {tag ? (
        <Link href={`/tag/[${tag}]`} as={`/tag/${tag}`}>
          <a>1</a>
        </Link>
      ) : (
        <Link href="/">
          <a>1</a>
        </Link>
      )}
      {PAGES.map((page) =>
        tag ? (
          <Link
            key={page}
            href={`/tag/[${tag}]/[page]`}
            as={`/tag/${tag}/${page}`}
          >
            <a>{page}</a>
          </Link>
        ) : (
          <Link key={page} href="/[page]" as={`/${page}`}>
            <a>{page}</a>
          </Link>
        )
      )}
    </div>
  )
}

export default News
