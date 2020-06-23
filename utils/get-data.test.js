import getData from './get-data'

const filter = (array) =>
  array.filter((row) => {
    return row.fields.createdDate && row.fields.public
  })

describe('getData', () => {
  test('should return first page of mockedData', async () => {
    const { allData, totalData, data } = await getData()
    const mockData = filter(global.data.records)

    expect(allData).toMatchObject(mockData)
    expect(totalData).toBe(mockData.length)
    expect(data.length).toBe(10)
    expect(data).toMatchObject(mockData.splice(0, process.env.PER_PAGE))
  })

  test('should return third page of mockedData', async () => {
    const { allData, totalData, data } = await getData(3)
    const mockData = filter(global.data.records)

    expect(totalData).toBe(mockData.length)
    expect(allData).toMatchObject(mockData)
    expect(data.length).toBe(10)
    expect(data).toMatchObject(
      mockData.splice(2 * process.env.PER_PAGE, process.env.PER_PAGE)
    )
  })

  test('should return filtered array of first page of mockedData', async () => {
    const tag = { slug: 'frontend', title: 'Frontend' }
    const { allData, totalData, data } = await getData(1, tag.slug)
    const mockData = filter(global.data.records).filter((row) =>
      row.fields.tags.find((t) => t === tag.title)
    )

    expect(allData).toMatchObject(mockData)
    expect(totalData).toBe(mockData.length)
    expect(data.length).toBe(10)
    expect(data).toMatchObject(mockData.splice(0, process.env.PER_PAGE))
  })
})
