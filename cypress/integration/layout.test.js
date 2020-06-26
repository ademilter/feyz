/// <reference types="cypress" />

import { PATHS, API_DATA } from '../../constants'
import { filterData, pageCount } from '../../test/utils'

const data = filterData(API_DATA.records)

context('Layout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render correctly.', () => {
    // Check header
    cy.get('h1').find('a').should('have.text', 'Feyz')

    // Check tag count inside nav
    cy.findByTestId('nav')
      .children()
      .should('have.length', PATHS.length + 1)

    // Check pagination page count
    cy.findByTestId('pagination')
      .children()
      .should('have.length', pageCount(data))
  })
})
