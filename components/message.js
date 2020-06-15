import React from 'react'
import cn from 'classnames'

import styles from './message.module.css'
import A from './a'

function Message({ className }) {
  return (
    <div className={cn(styles.message, className)}>
      <A href="https://airtable.com/shrWh78cmXzVHcgwV">
        Kafa açacağını düşündüğün faydalı içerikleri sen de ekleyebilirsin →{' '}
      </A>
    </div>
  )
}

export default Message
