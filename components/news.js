import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

import styles from './news.module.css'
import NewsCard from './news-card'
import Pagination from './pagination'

function News({ data, totalData, className }) {
  return (
    <>
      <div className={cn(styles.news, className)}>
        {data.map((article) => (
          <NewsCard key={article.id} id={article.id} {...article.fields} />
        ))}
      </div>

      <Pagination className={styles.pagination} totalData={totalData}>
        <Link href="/">
          <a>1</a>
        </Link>
      </Pagination>
    </>
  )
}

export default News
