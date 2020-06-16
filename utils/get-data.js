import { PATHS, PER_PAGE, URL } from '../constants'
import { sleep } from './helper'

export default async function getData(activePage = 1, tag) {
  let _data = []

  // TODO: offset eklenecek yoksa 99'dan sonra patlar
  async function allData(pageOffset) {
    const response = await fetch(encodeURI(URL))
    const { records, offset } = await response.json()

    let filteredData = records.filter((row) => {
      return row.fields.createdDate && row.fields.public
    })

    _data = [..._data, ...filteredData]

    if (offset) {
      await sleep(300)
      await allData(offset)
    }
  }

  await allData()

  let filteredData = [..._data]

  if (tag) {
    const path = PATHS.find((path) => path.slug === tag)
    filteredData = filteredData.filter((row) => {
      return row.fields.tags.find((tag) => tag === path.title)
    })
  }

  return {
    totalData: filteredData.length,
    data: [...filteredData].splice((activePage - 1) * PER_PAGE, PER_PAGE)
  }
}
