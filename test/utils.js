export const filterData = (array) =>
  [...array].filter((row) => {
    return row.fields.createdDate && row.fields.public
  })

export const pageCount = (array) => [...array].length / 10

export const pageItems = (array, page) => [...array].splice((page - 1) * 10, 10)

export const isQuote = (element) => element.fields.tags.includes('Alıntı')

export const isTweet = (element) => element.fields.tags.includes('Tweet')
