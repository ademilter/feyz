/// <reference types="cypress" />

import { PATHS, API_DATA } from '../../constants'
import { filterData, pageItems } from '../../test/utils'

context('Tag Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render correctly.', () => {
    const randomElement = PATHS[Math.floor(Math.random() * PATHS.length)]
    const data = filterData(API_DATA.records).filter((e) =>
      e.fields.tags.includes(randomElement.title)
    )

    // Go to another page
    cy.findByTestId('nav')
      .findByText(new RegExp(randomElement.title, 'i'))
      .click()

    cy.location('pathname', { timeout: 10000 }).should(
      'include',
      `/${randomElement.slug}`
    )

    // Check news count
    cy.findByTestId('news')
      .children()
      .should('have.length', pageItems(data, 1).length)

    // Check news Exists
    cy.checkItemsExists(pageItems(data, 1))
  })
})
