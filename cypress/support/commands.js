import '@testing-library/cypress/add-commands'

import { isTweet, isQuote } from '../../test/utils'

Cypress.Commands.add('checkItemsExists', (array) => {
  for (const element of array) {
    cy.findByTestId('news')
      .findByTestId(`article-${element.id}`)
      .should('to.exist')
  }
})

Cypress.Commands.add('checkItems', (array) => {
  for (const element of array) {
    if (isTweet(element)) {
      const { tags, summary, title, author, url, image } = element.fields
      const isQuote = element.fields.tags.includes('Alıntı')
      const item = () =>
        cy.findByTestId('news').findByTestId(`article-${element.id}`)
      const footer = () => item().find('footer')
      const photo = image ? image[0].thumbnails?.large || image[0] : null

      if (isQuote(element)) {
        // Title
        item()
          .find('h2 > a')
          .should(($el) => {
            expect($el).to.have.text(summary)
          })
      } else {
        // Title
        item()
          .find('h2 > a')
          .should(($el) => {
            expect($el).to.have.text(title)
          })

        // Summary
        item()
          .find('p')
          .should(($el) => {
            expect($el).to.have.text(summary)
          })

        item()
          .find('figure > a')
          .should('have.attr', 'href', url)
          .find('picture > source')
          .should('have.attr', 'srcset', photo.url)
      }

      // Author
      footer().findByText(new RegExp(author, 'i')).should('to.exist')

      // Tags
      for (const tag of tags) {
        footer().findByText(new RegExp(tag, 'i')).should('to.exist')
      }
    }
  }
})
