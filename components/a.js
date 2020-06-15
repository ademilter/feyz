import React from 'react'
import cn from 'classnames'

import styles from './a.module.css'

function A({ href, className, children, ...props }) {
  return (
    <a
      className={cn(styles.a, className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}

export default A
