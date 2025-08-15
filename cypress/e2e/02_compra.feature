Feature: Compra de produto
  Background:
    Given que eu acesso a página inicial
    And eu estou logado como usuário existente

  Scenario: Adicionar produto ao carrinho e finalizar compra
    When eu adiciono o primeiro produto ao carrinho
    And eu vou para o checkout
    Then o total do pedido deve ser exibido
