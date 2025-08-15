import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { generateUser } from '../helper/userGenerator.js'

Given('que eu acesso a página inicial', () => {
  cy.visitHome()
})

When('eu clico em {string}', (linkText) => {
  if(linkText === 'Signup / Login') {
    cy.get('a[href="/login"]').click()
  } else {
    cy.contains(linkText).click()
  }
})

When('eu preencho os dados de cadastro com usuario gerado', () => {
  const user = generateUser()
  cy.wrap(user).as('generatedUser')
  cy.registerGeneratedUser(user)
})

When('eu submeto o cadastro', () => {
  // flow depends on site - placeholder for example
  cy.get('button[data-qa="create-account"]').click({ force: true })
})

Then('eu devo ver a mensagem {string}', (msg) => {
  cy.contains(msg).should('be.visible')
})

Given('eu estou logado como usuário existente', () => {
  // For demo: create user and login quickly
  const user = generateUser()
  cy.wrap(user).as('generatedUser')
  cy.registerGeneratedUser(user)
  cy.get('@generatedUser').then(u => {
    cy.loginAs(u.email, u.password)
  })
})

When('eu adiciono o primeiro produto ao carrinho', () => {
  cy.get('.product-overlay').first().trigger('mouseover')
  cy.contains('Add to cart').first().click()
})

When('eu vou para o checkout', () => {
  cy.contains('Proceed To Checkout').click()
})

Then('o total do pedido deve ser exibido', () => {
  cy.contains('Order Summary').should('be.visible')
})
