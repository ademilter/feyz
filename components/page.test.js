import { render, screen } from '@testing-library/react'
import Page from './page'
import getData from '../utils/get-data'

describe('Page', () => {
  test('should render correctly.', async () => {
    const { data, totalData } = await getData()

    const { asFragment } = render(
      <Page pathname={'/'} data={data} totalData={totalData} />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
