import React from 'react'
import { useRouter } from 'next/router'
import { PATHS } from '../../../constants'
import getData from '../../../utils/get-data'

import Page from '../../../components/page'

function TagPage({ data, totalData, tag }) {
  const route = useRouter()
  return (
    <Page
      pathname={route.pathname}
      data={data}
      totalData={totalData}
      tag={tag}
    />
  )
}

export async function getStaticPaths() {
  const tags = PATHS.map((o) => o.slug)
  return {
    paths: tags.map((tag) => {
      return { params: { tag } }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { data, totalData } = await getData(1, params.tag)
  return {
    props: { data, totalData, tag: params.tag }
  }
}
export default TagPage
