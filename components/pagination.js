import React, { Fragment } from 'react'
import cn from 'classnames'

import styles from './pagination.module.css'

import { PER_PAGE } from '../constants'
import Link from 'next/link'

function News({ totalData, children, className }) {
  const PAGES = Array(Math.ceil(totalData / PER_PAGE))
    .fill()
    .map((_, i) => i + 1)
  PAGES.shift()

  return (
    <div className={cn(styles.pagination, className)}>
      {children}
      {PAGES.map((page) => (
        <Link key={page} href="/[page]" as={`/${page}`}>
          <a>{page}</a>
        </Link>
      ))}
    </div>
  )
}

export default News
