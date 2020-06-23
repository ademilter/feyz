import { render, screen } from '@testing-library/react'
import Title from './title'

describe('Title', () => {
  test('should have children.', () => {
    const child = '<span>Test Message</span>'

    const { asFragment } = render(<Title>{child}</Title>)

    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Test Message/i)).not.toBeNull()
  })
})
