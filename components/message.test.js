import { render, screen } from '@testing-library/react'
import Message from './message'

describe('Message', () => {
  test('should render correctly.', () => {
    const { asFragment } = render(<Message />)

    expect(asFragment()).toMatchSnapshot()
  })
})
