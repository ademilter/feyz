import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { PATHS } from '../constants'
import { useRouter } from 'next/router'

import styles from './nav.module.css'

function Nav({ className }) {
  const Router = useRouter();

  return (
    <div className={cn(styles.nav, className)}>
      {PATHS.map((path) => {
        return (
          <Link key={path.slug} href="/tag/[tag]" as={`/tag/${path.slug}`}>
            <a className={cn({[styles.active]: Router.asPath === `/tag/${path.slug}`})}>{path.title}</a>
          </Link>
        )
      })}
    </div>
  )
}

export default Nav
