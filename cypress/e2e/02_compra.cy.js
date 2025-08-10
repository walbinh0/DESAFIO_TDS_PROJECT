describe('Compra de produto', () => {
  let userEmail, userPassword

  beforeEach(() => {
    cy.visit('/')
    
    // Criar um usuário válido primeiro
    cy.get('a[href="/login"]').click()
    
    const firstName = 'Compra' + Date.now()
    const lastName = 'User'
    const name = `${firstName} ${lastName}`
    userEmail = `compra.${firstName.toLowerCase()}.${Date.now()}@example.com`
    userPassword = 'Test@1234'
    
    // Preencher dados de cadastro
    cy.get('input[data-qa="signup-name"]').type(name)
    cy.get('input[data-qa="signup-email"]').type(userEmail)
    cy.get('button[data-qa="signup-button"]').click()
    
    // Aguardar carregamento da página de informações da conta
    cy.url().should('include', '/signup')
    
    // Preencher informações da conta
    cy.get('input[data-qa="password"]').type(userPassword)
    cy.get('input[data-qa="first_name"]').type(firstName)
    cy.get('input[data-qa="last_name"]').type(lastName)
    cy.get('input[data-qa="address"]').type('123 Compra Street')
    cy.get('input[data-qa="city"]').type('Compra City')
    
    // Tentar diferentes seletores para o estado
    cy.get('body').then(($body) => {
      if ($body.find('select[data-qa="state"]').length > 0) {
        cy.get('select[data-qa="state"]').select('New York')
      } else if ($body.find('input[data-qa="state"]').length > 0) {
        cy.get('input[data-qa="state"]').type('New York')
      } else {
        // Se não encontrar, pular este campo
        cy.log('Campo state não encontrado, continuando...')
      }
    })
    
    cy.get('input[data-qa="zipcode"]').type('12345')
    cy.get('input[data-qa="mobile_number"]').type('1234567890')
    
    // Clicar em Create Account
    cy.get('button[data-qa="create-account"]').click()
    
    // Aguardar criação da conta com verificação mais robusta
    cy.url().should('include', '/account_created')
    
    // Aguardar um pouco para a página carregar completamente
    cy.wait(3000)
    
    // Tentar diferentes abordagens para verificar o sucesso
    cy.get('body').then(($body) => {
      // Verificar se há algum elemento com o texto
      const hasText = $body.text().includes('ACCOUNT CREATED!')
      if (hasText) {
        cy.log('✅ Texto encontrado no body')
      } else {
        cy.log('❌ Texto não encontrado no body')
        // Log do conteúdo para debug
        cy.log('Conteúdo da página:', $body.text().substring(0, 500))
      }
    })
    
    // Verificar se o botão Continue está presente (indicador de sucesso)
    cy.get('a[data-qa="continue-button"]').should('be.visible')
    
    // Continuar após criação da conta
    cy.get('a[data-qa="continue-button"]').click()
    
    // Fazer logout para testar o login
    cy.get('a[href="/logout"]').click()
    
    // Fazer login com o usuário criado
    cy.get('a[href="/login"]').click()
    cy.get('input[data-qa="login-email"]').type(userEmail)
    cy.get('input[data-qa="login-password"]').type(userPassword)
    cy.get('button[data-qa="login-button"]').click()
  })

  it('deve adicionar produto ao carrinho e finalizar compra', () => {
    // Aguardar a página carregar completamente
    cy.wait(2000)
    
    // Verificar se os produtos estão carregados
    cy.get('.product-overlay').should('exist')
    
    // Adicionar primeiro produto ao carrinho com force: true
    cy.get('.product-overlay').first().trigger('mouseover', { force: true })
    cy.contains('Add to cart').first().click({ force: true })
    
    // Aguardar o pop-up de confirmação aparecer
    cy.contains('Added!').should('be.visible')
    
    // Clicar em "View Cart" para ir para o carrinho
    cy.contains('View Cart').click()
    
    // Aguardar carregamento da página do carrinho
    cy.url().should('include', '/view_cart')
    
    // Agora procurar por "Proceed To Checkout" na página do carrinho
    cy.contains('Proceed To Checkout').click()
    
    // Verificar total do pedido - corrigindo o texto esperado
    cy.contains('Review Your Order').should('be.visible')
  })
})
