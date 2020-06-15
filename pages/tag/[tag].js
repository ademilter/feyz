import React from 'react'
import { useRouter } from 'next/router'
import { PATHS } from 'constants/index'

import Page from '../../components/page'
import getData from '../../utils/get-data'

function TagPage({ data, totalData }) {
  const route = useRouter()

  return <Page pathname={route.pathname} data={data} totalData={totalData} />
}

export async function getStaticPaths() {
  return {
    paths: PATHS.map((path) => {
      return { params: { tag: path.slug } }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { data } = await getData()

  const filterData = data.filter((row) => {
    const findPath = PATHS.find((path) => path.slug === params.tag)
    return row.fields.tags.find((tag) => tag === findPath.title)
  })

  return {
    props: { data: filterData, totalData: filterData.length }
  }
}
export default TagPage
