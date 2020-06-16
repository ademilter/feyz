import React from 'react'
import { useRouter } from 'next/router'
import { PATHS } from '../../../constants'
import getData from '../../../utils/get-data'
import { pageFill } from '../../../utils/helper'

import Page from '../../../components/page'

function TagOtherPage({ data, totalData, tag }) {
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
  const { allData } = await getData()
  const tags = PATHS.map((o) => o.slug)

  const paths = tags.reduce((tagsArr, tag) => {
    const path = PATHS.find((path) => path.slug === tag)

    const filteredData = allData.filter((row) => {
      return row.fields.tags.includes(path.title)
    })

    const pages = pageFill(filteredData.length + 1)

    const tagPage = pages.reduce((pagesArr, page) => {
      if (page === 1) return pagesArr
      pagesArr.push({ params: { tag, page: page.toString() } })
      return pagesArr
    }, [])

    tagsArr.push(tagPage)
    return tagsArr
  }, [])

  return {
    paths: paths.flat(),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { data, totalData } = await getData(params.page, params.tag)

  return {
    props: { data, totalData, tag: params.tag }
  }
}
export default TagOtherPage
