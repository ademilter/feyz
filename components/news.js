import React from 'react'
import cn from 'classnames'

import styles from './news.module.css'

import NewsCard from './news-card'
import Sposnors from './sponsors'

function News({ data, className }) {
  return (
    <div className={cn(styles.news, className)}>
      {data.map((article, index) => {
        return (
          <React.Fragment key={article.id}>
            {index === 1 && <Sposnors />}
            <NewsCard id={article.id} {...article.fields} />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default News
