import { render, screen } from '@testing-library/react'
import Layout from './layout'

describe('Layout', () => {
  test('should have children.', () => {
    const child = '<span>Test Message</span>'

    const { asFragment } = render(<Layout>{child}</Layout>)

    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Test Message/i)).not.toBeNull()
  })
})
