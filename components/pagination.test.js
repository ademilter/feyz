import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Pagination from './pagination'

describe('Pagination', () => {
  test('should have render.', () => {
    const { asFragment } = render(<Pagination totalData={30} />)

    expect(asFragment()).toMatchSnapshot()
    expect(screen.queryByTestId('pagination').childElementCount).toBe(3)
  })

  test('should have render with tag.', () => {
    const { asFragment } = render(<Pagination totalData={30} tag="test" />)

    expect(asFragment()).toMatchSnapshot()
    expect(screen.queryByTestId('pagination').childElementCount).toBe(3)
    expect(screen.getByText(/3/i)).toHaveAttribute('href', '/tag/test/3')
  })
})
