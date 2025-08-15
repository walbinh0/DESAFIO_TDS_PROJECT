Feature: Cadastro de usuário
  Como um usuário do site
  Quero me cadastrar com dados válidos
  Para poder fazer compras

  Background:
    Given que eu acesso a página inicial

  Scenario: Cadastro com sucesso
    When eu clico em "Signup / Login"
    And eu preencho os dados de cadastro com usuario gerado
    And eu submeto o cadastro
    Then eu devo ver a mensagem "ACCOUNT CREATED!"
