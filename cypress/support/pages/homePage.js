import { homeElements } from '../elements/homeElements.js'

export class HomePage {
  visit() {
    cy.visit('/')
  }
  goToSignup() {
    cy.get(homeElements.signupLoginLink).click()
  }
}
export const homePage = new HomePage()
