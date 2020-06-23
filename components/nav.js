import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { PATHS } from '../constants'

import styles from './nav.module.css'
import A from './a'

function Nav({ location, className }) {
  return (
    <div data-testid="nav" className={cn(styles.nav, className)}>
      {PATHS.map((path) => {
        return (
          <Link key={path.slug} href="/tag/[tag]" as={`/tag/${path.slug}`}>
            <a>{path.title}</a>
          </Link>
        )
      })}
      <A href="https://www.patreon.com/ademilter">Destek Ol</A>
    </div>
  )
}

export default Nav
