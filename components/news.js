import React from 'react'
import cn from 'classnames'

import styles from './news.module.css'

import NewsCard from './news-card'

function News({ data, totalData, className }) {
  return (
    <div className={cn(styles.news, className)} data-testid="news">
      {data.map((article) => (
        <NewsCard key={article.id} id={article.id} {...article.fields} />
      ))}
    </div>
  )
}

export default News
