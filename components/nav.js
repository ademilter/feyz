import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { PATHS } from '../constants'

import styles from './nav.module.css'

function Nav({ className }) {
  return (
    <div className={cn(styles.nav, className)}>
      {PATHS.map((path) => {
        return (
          <Link key={path.slug} href="/tag/[tag]" as={`/tag/${path.slug}`}>
            <a>{path.title}</a>
          </Link>
        )
      })}
    </div>
  )
}

export default Nav
