import { render, screen } from '@testing-library/react'
import Message from './message'

describe('Message', () => {
  test('should have render.', () => {
    const { asFragment } = render(<Message />)

    expect(asFragment()).toMatchSnapshot()
  })
})
