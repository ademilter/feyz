import React from 'react'
import Link from 'next/link'

import styles from './page.module.css'

import Title from './title'
import Nav from './nav'
import News from './news'
import Layout from './layout'
import Pagination from './pagination'

function Page({ pathname, data, totalData }) {
  return (
    <Layout>
      <Title />
      <Nav className={styles.nav} location={pathname} />

      <News className={styles.news} data={data} totalData={totalData} />

      {totalData && (
        <Pagination className={styles.pagination} totalData={totalData}>
          <Link href="/">
            <a>1</a>
          </Link>
        </Pagination>
      )}
    </Layout>
  )
}

export default Page
