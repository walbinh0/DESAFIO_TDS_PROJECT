import { homeElements } from '../elements/homeElements'

export const signupPage = {
  fillSignupForm(name, email) {
    cy.get(homeElements.signupLoginLink).click()
    cy.get('input[data-qa="signup-name"]').type(name)
    cy.get('input[data-qa="signup-email"]').type(email)
    cy.get('button[data-qa="signup-button"]').click()
  },
  fillAccountInfo({ firstName, lastName, password, address, city, state, zipcode, mobile }) {
    cy.get('input[data-qa="password"]').type(password)
    cy.get('input[data-qa="first_name"]').type(firstName)
    cy.get('input[data-qa="last_name"]').type(lastName)
    cy.get('input[data-qa="address"]').type(address)
    cy.get('input[data-qa="city"]').type(city)
    cy.get('body').then(($body) => {
      if ($body.find('select[data-qa="state"]').length > 0) {
        cy.get('select[data-qa="state"]').select(state)
      } else if ($body.find('input[data-qa="state"]').length > 0) {
        cy.get('input[data-qa="state"]').type(state)
      }
    })
    cy.get('input[data-qa="zipcode"]').type(zipcode)
    cy.get('input[data-qa="mobile_number"]').type(mobile)
    cy.get('button[data-qa="create-account"]').click()
  },
  verifyAccountCreated() {
    cy.url().should('include', '/account_created')
    cy.contains('Account Created').should('exist')
    cy.get('a[data-qa="continue-button"]').should('be.visible')
  }
}