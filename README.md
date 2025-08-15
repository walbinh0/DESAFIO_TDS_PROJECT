# 🧪 Projeto de Testes Automatizados com Cypress

## 📋 Descrição
Projeto de testes automatizados para o site [Automation Exercise](https://automationexercise.com) utilizando Cypress e Cucumber.

## 🚀 Funcionalidades
- ✅ **Teste de Cadastro**: Cadastro completo de usuário
- ✅ **Teste de Compra**: Fluxo completo de compra de produto
- 🧪 **Framework**: Cypress com suporte a Cucumber
- 👤 **Geração de Dados**: Usuários únicos com Faker.js 

## 🛠️ Tecnologias Utilizadas
- **Cypress** - Framework de testes E2E
- **Cucumber** - BDD (Behavior Driven Development)
- **Faker.js** - Geração de dados fictícios
- **JavaScript** - Linguagem de programação

## 📁 Estrutura do Projeto
```
cypress/
├── e2e/                    # Testes automatizados
│   ├── 01_cadastro.cy.js  # Teste de cadastro
│   └── 02_compra.cy.js    # Teste de compra
├── support/                # Arquivos de suporte
│   ├── commands.js         # Comandos customizados
│   ├── pages/              # Page Objects
│   ├── elements/           # Elementos das páginas
│   ├── step_definitions/   # Definições dos steps
│   └── helper/             # Funções auxiliares
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Abrir Cypress
npx cypress open

# Executar testes via linha de comando
npx cypress run
```

## 🧪 Executando os Testes

### 1. Teste de Cadastro
- Acessa a página inicial
- Clica em "Signup / Login"
- Preenche formulário de cadastro
- Verifica criação da conta

### 2. Teste de Compra
- Cria usuário válido
- Faz login
- Adiciona produto ao carrinho
- Finaliza checkout

## 📊 Relatórios
Os testes geram relatórios em:
- HTML: `cypress/reports/cucumber-html/`
- JSON: `cypress/reports/cucumber-json/`

## 🤝 Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📝 Licença
Este projeto está sob a licença MIT.

## 👨‍💻 Autor
Desenvolvido como parte de um desafio técnico.

---
⭐ **Se este projeto te ajudou, deixe uma estrela!**
