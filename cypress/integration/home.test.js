/// <reference types="cypress" />

import { API_DATA } from '../../constants'
import { filterData, pageCount, pageItems } from '../../test/utils'

const data = filterData(API_DATA.records)

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render correctly for first page.', () => {
    // Check news count
    cy.findByTestId('news')
      .children()
      .should('have.length', pageItems(data, 1).length)

    // Check news Exists
    cy.checkItemsExists(pageItems(data, 1))

    cy.checkItems(pageItems(data, 1).slice(0, 2))
  })

  it('should render correctly for another pagination page.', () => {
    const randomPage =
      Math.floor(Math.random() * Math.floor(pageCount(data) - 1)) + 1

    // Go to another page
    cy.findByTestId('pagination')
      .findByText(new RegExp(randomPage, 'i'))
      .click()

    cy.location('pathname', { timeout: 10000 }).should(
      'include',
      `/${randomPage}`
    )

    // Check news count
    cy.findByTestId('news')
      .children()
      .should('have.length', pageItems(data, randomPage).length)

    cy.checkItemsExists(pageItems(data, randomPage))
  })
})
