import React from 'react'

import styles from './page.module.css'

import Title from './title'
import Nav from './nav'
import News from './news'
import Layout from './layout'

function Page({ pathname, data, totalData }) {
  return (
    <Layout>
      <Title />
      <Nav className={styles.nav} location={pathname} />
      <News className={styles.news} data={data} totalData={totalData} />
    </Layout>
  )
}

export default Page
