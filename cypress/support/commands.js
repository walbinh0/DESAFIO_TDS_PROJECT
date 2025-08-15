import { loginPage } from './pages/loginPage.js'
Cypress.Commands.add('visitHome', () => {
  cy.visit('/')
})
Cypress.Commands.add('registerGeneratedUser', (user) => {
  cy.get('a[href="/login"]').click()
  cy.get('input[data-qa="signup-name"]').type(user.name)
  cy.get('input[data-qa="signup-email"]').type(user.email)
  cy.get('button[data-qa="signup-button"]').click()
})
Cypress.Commands.add('loginAs', (email, password) => {
  cy.get('a[href="/login"]').click()
  cy.get('input[data-qa="login-email"]').type(email)
  cy.get('input[data-qa="login-password"]').type(password)
  cy.get('button[data-qa="login-button"]').click()
})
