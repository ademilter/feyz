import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './pagination.module.css'
import { pageFill } from '../utils/helper'

function News({ totalData, className, tag }) {
  const PAGES = pageFill(totalData)
  const Router = useRouter();

  return (
    <div className={cn(styles.pagination, className)}>
      {tag ? (
        <Link href={`/tag/[${tag}]`} as={`/tag/${tag}`}>
          <a className={Router.asPath === `/tag/${tag}` ? styles.active : ''}>1</a>
        </Link>
      ) : (
        <Link href="/">
          <a className={Router.asPath === '/' ? styles.active : ''}>1</a>
        </Link>
      )}
      {PAGES.map((page) =>
        tag ? (
          <Link
            key={page}
            href={`/tag/[${tag}]/[page]`}
            as={`/tag/${tag}/${page}`}
          >
            <a className={Router.asPath === `/tag/${tag}/${page}` ? styles.active : ''}>{page}</a>
          </Link>
        ) : (
          <Link key={page} href="/[page]" as={`/${page}`}>
            <a className={Router.asPath === `/${page}` ? styles.active : ''}>{page}</a>
          </Link>
        )
      )}
    </div>
  )
}

export default News
