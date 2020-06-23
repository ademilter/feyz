import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import News from './news'

const filter = (array) =>
  array.filter((row) => {
    return row.fields.createdDate && row.fields.public
  })

describe('News', () => {
  test('should have render.', () => {
    const mockData = filter(global.data.records)
    const { asFragment } = render(<News data={mockData} />)

    expect(asFragment()).toMatchSnapshot()
    expect(screen.queryByTestId('news').childElementCount).toBe(mockData.length)
  })
})
