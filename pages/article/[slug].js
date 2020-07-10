import React from 'react'
import getData from '../../utils/get-data'
import Head from 'next/head'

import Layout from '../../components/layout'
import Title from '../../components/title'
import Nav from '../../components/nav'
import styles from '../../components/page.module.css'
import NewsCard from '../../components/news-card'

function ArticlePage({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.fields.title}</title>
        <meta name="description" content={article.fields.summary} />
      </Head>

      <Title />
      <Nav className={styles.nav} />

      <NewsCard id={article.id} slug={article.slug} {...article.fields} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const { allData } = await getData()

  const paths = allData.map((article) => ({
    params: { slug: article.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { allData } = await getData()
  const article = allData.find((article) => {
    return article.slug === params.slug
  })
  return {
    props: { article }
  }
}

export default ArticlePage
