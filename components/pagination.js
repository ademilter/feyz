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
          <a className={cn({[styles.active]: Router.asPath === `/tag/${tag}`})}>1</a>
        </Link>
      ) : (
        <Link href="/">
          <a className={cn({[styles.active]: Router.asPath === '/'})}>1</a>
        </Link>
      )}
      {PAGES.map((page) =>
        tag ? (
          <Link
            key={page}
            href={`/tag/[${tag}]/[page]`}
            as={`/tag/${tag}/${page}`}
          >
            <a className={cn({[styles.active]: Router.asPath === `/tag/${tag}/${page}`})}>{page}</a>
          </Link>
        ) : (
          <Link key={page} href="/[page]" as={`/${page}`}>
            <a className={cn({[styles.active] : Router.asPath === `/${page}`})}>{page}</a>
          </Link>
        )
      )}
    </div>
  )
}

export default News
