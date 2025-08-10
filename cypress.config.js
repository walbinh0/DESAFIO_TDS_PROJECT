const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    specPattern: 'cypress/e2e/**/*.{feature,cy.js}',
    supportFile: 'cypress/support/e2e.js',
    video: false,
    screenshotOnRunFailure: true
  }
})
