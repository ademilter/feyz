import React from 'react'
import { useRouter } from 'next/router'
import { PATHS } from 'constants/index'

import Page from '../../components/page'
import getData from '../../utils/get-data'

function TagPage({ data }) {
  const route = useRouter()

  return <Page pathname={route.pathname} data={data} />
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
  const { data } = await getData(1, params.tag)

  return {
    props: { data }
  }
}
export default TagPage
