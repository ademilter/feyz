import React from 'react'

import styles from './page.module.css'

import Title from './title'
import Nav from './nav'
import News from './news'
import Layout from './layout'
import Pagination from './pagination'

function Page({ pathname, data, totalData = 1, tag }) {
  return (
    <Layout>
      <Title />
      <Nav className={styles.nav} location={pathname} />
      <News className={styles.news} data={data} />

      {totalData > process.env.PER_PAGE && (
        <Pagination
          className={styles.pagination}
          totalData={totalData}
          tag={tag}
        />
      )}
    </Layout>
  )
}

export default Page
