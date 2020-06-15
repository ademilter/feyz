import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

import styles from './title.module.css'

function Title({ children = 'Feyz', className }) {
  return (
    <h1 className={cn(styles.title, className)}>
      <Link href="/">
        <a>{children}</a>
      </Link>
    </h1>
  )
}

export default Title
