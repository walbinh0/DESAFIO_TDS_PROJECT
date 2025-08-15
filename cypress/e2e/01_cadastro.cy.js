import { homePage } from '../support/pages/homePage'
import { signupPage } from '../support/pages/signupPage'

describe('Cadastro de usuário', () => {
  beforeEach(() => {
    homePage.visit()
  })

  it('deve cadastrar um usuário com sucesso', () => {
    const firstName = 'Test' + Date.now()
    const lastName = 'User'
    const name = `${firstName} ${lastName}`
    const email = `test.${firstName.toLowerCase()}.${Date.now()}@example.com`
    const password = 'Test@1234'

    signupPage.fillSignupForm(name, email)
    signupPage.fillAccountInfo({
      firstName,
      lastName,
      password,
      address: '123 Test Street',
      city: 'Test City',
      state: 'New York',
      zipcode: '12345',
      mobile: '1234567890'
    })
    signupPage.verifyAccountCreated()
  })
})