import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { PATHS } from '../constants'

import styles from './nav.module.css'
import { useRouter } from 'next/router'

function Nav({ className }) {
  const router = useRouter()

  return (
    <div className={cn(styles.nav, className)}>
      {PATHS.map((path) => {
        const isActive = router.query.tag === path.slug

        return (
          <Link key={path.slug} href="/tag/[tag]" as={`/tag/${path.slug}`}>
            <a className={cn(isActive && styles.selected)}>{path.title}</a>
          </Link>
        )
      })}
    </div>
  )
}

export default Nav
