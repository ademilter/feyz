import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NewsCard from './news-card'

const filter = (array) =>
  array.filter((row) => {
    return row.fields.createdDate && row.fields.public
  })

describe('NewsCard', () => {
  test('should render correctly.', () => {
    const mockData = filter(global.data.records)
    const article = mockData.filter((e) => !e.fields.tags.includes('Alıntı'))[0]
    const { asFragment, container } = render(
      <NewsCard id={article.id} {...article.fields} />
    )

    const {
      fields: { title, url, summary, image, author, tags }
    } = article
    const photo = image ? image[0].thumbnails?.large || image[0] : null
    const titleSelector = container.querySelector('h2 > a')
    const authorSelector = screen.getByText(new RegExp(author, 'i'))

    expect(asFragment()).toMatchSnapshot()
    expect(titleSelector).toHaveTextContent(title)
    expect(titleSelector).toHaveAttribute('href', url)
    expect(container.querySelector('p')).toHaveTextContent(summary)
    expect(container.querySelector('figure > a')).toHaveAttribute('href', url)
    expect(container.querySelector('picture > source')).toHaveAttribute(
      'srcset',
      photo.url
    )
    expect(authorSelector).not.toBeNull()
    expect(authorSelector).toHaveAttribute(
      'href',
      `https://twitter.com/${author}`
    )

    for (const tag of tags) {
      expect(screen.getByText(new RegExp(tag, 'i'))).not.toBeNull()
    }
  })

  test('should render correctly with "Alıntı" tag.', () => {
    const mockData = filter(global.data.records)
    const article = mockData.filter((e) => e.fields.tags.includes('Alıntı'))[0]
    const { asFragment, container } = render(
      <NewsCard id={article.id} {...article.fields} />
    )

    const {
      fields: { url, summary, author, tags }
    } = article
    const titleSelector = container.querySelector('h2 > a')
    const authorSelector = screen.getByText(new RegExp(author, 'i'))

    expect(asFragment()).toMatchSnapshot()
    expect(titleSelector).toHaveTextContent(summary)
    expect(titleSelector).toHaveAttribute('href', url)
    expect(authorSelector).not.toBeNull()
    expect(authorSelector).toHaveAttribute(
      'href',
      `https://twitter.com/${author}`
    )

    for (const tag of tags) {
      expect(screen.getByText(new RegExp(tag, 'i'))).not.toBeNull()
    }
  })
})
