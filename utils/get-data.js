import { PER_PAGE, URL } from '../constants'
import { sleep } from './helper'

async function allData() {
  const response = await fetch(encodeURI(URL))
  const { records, offset } = await response.json()

  if (!offset) {
    return records.filter((row) => row.fields.createdDate && row.fields.public)
  } else {
    await sleep(300)
    await allData(offset)
  }
}

// TODO: singleton yaparsak bir defa çekeriz
export default async function getData(activePage = 1) {
  const data = await allData()
  return {
    totalData: data.length,
    data: data.splice((activePage - 1) * PER_PAGE, PER_PAGE)
  }
}
