export class LoginPage {
  submitLogin(email, password){
    cy.get('input[data-qa="login-email"]').type(email)
    cy.get('input[data-qa="login-password"]').type(password)
    cy.get('button[data-qa="login-button"]').click()
  }
}
export const loginPage = new LoginPage()
