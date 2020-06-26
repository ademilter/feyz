import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import News from './news'
import { filterData } from '../test/utils'

describe('News', () => {
  test('should render correctly.', () => {
    const mockData = filterData(global.data.records)
    const { asFragment } = render(<News data={mockData} />)

    expect(asFragment()).toMatchSnapshot()
    expect(screen.queryByTestId('news').childElementCount).toBe(mockData.length)
  })
})
