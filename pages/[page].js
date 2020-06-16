import React from 'react'
import { useRouter } from 'next/router'

import Page from 'components/page'
import { pageFill } from '../utils/helper'
import getData from '../utils/get-data'

function HomeOtherPage({ data, totalData }) {
  const route = useRouter()

  return <Page pathname={route.pathname} data={data} totalData={totalData} />
}

export async function getStaticPaths() {
  const { totalData } = await getData()
  const pages = pageFill(totalData)

  return {
    paths: pages.map((page) => {
      return {
        params: { page: page.toString() }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { data, totalData } = await getData(params.page)

  return {
    props: {
      data,
      totalData
    }
  }
}
export default HomeOtherPage
