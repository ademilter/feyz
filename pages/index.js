import React from 'react'
import { useRouter } from 'next/router'
import getData from '../utils/get-data'

import Page from 'components/page'

function HomePage({ data, totalData }) {
  const route = useRouter()
  return <Page pathname={route.pathname} data={data} totalData={totalData} />
}

export async function getStaticProps() {
  const { data, totalData } = await getData()
  return {
    props: { data, totalData }
  }
}

export default HomePage
