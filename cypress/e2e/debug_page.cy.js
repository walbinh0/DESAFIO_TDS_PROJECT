describe('Debug - Inspecionar página de signup', () => {
  it('deve inspecionar a estrutura da página de signup', () => {
    cy.visit('/')
    cy.get('a[href="/login"]').click()
    
    // Preencher dados básicos
    cy.get('input[data-qa="signup-name"]').type('Debug User')
    cy.get('input[data-qa="signup-email"]').type('debug@example.com')
    cy.get('button[data-qa="signup-button"]').click()
    
    // Aguardar carregamento
    cy.url().should('include', '/signup')
    
    // Inspecionar todos os campos disponíveis
    cy.get('body').then(($body) => {
      cy.log('=== CAMPOS ENCONTRADOS ===')
      
      // Verificar campos obrigatórios
      const fields = [
        'password', 'first_name', 'last_name', 'address', 
        'city', 'state', 'zipcode', 'mobile_number'
      ]
      
      fields.forEach(field => {
        const selector = `[data-qa="${field}"]`
        const count = $body.find(selector).length
        const element = $body.find(selector)
        
        if (count > 0) {
          const tagName = element.prop('tagName')
          const type = element.attr('type') || 'N/A'
          cy.log(`✅ ${field}: ${tagName} (${type}) - ${count} encontrado(s)`)
        } else {
          cy.log(`❌ ${field}: NÃO ENCONTRADO`)
        }
      })
      
      // Verificar botão de criar conta
      const createButton = $body.find('button[data-qa="create-account"]')
      if (createButton.length > 0) {
        cy.log('✅ Botão create-account encontrado')
      } else {
        cy.log('❌ Botão create-account NÃO ENCONTRADO')
      }
    })
    
    // Aguardar um pouco para ver os logs
    cy.wait(3000)
  })
})
