import { render, screen } from '@testing-library/react'
import A from './a'

describe('A', () => {
  test('should have children.', () => {
    const child = '<span>Test Message</span>'

    const { asFragment } = render(<A>{child}</A>)

    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Test Message/i)).not.toBeNull()
  })
})
