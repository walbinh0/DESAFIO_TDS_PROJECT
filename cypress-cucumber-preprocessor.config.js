module.exports = {
  nonGlobalStepDefinitions: true,
  stepDefinitions: 'cypress/support/step_definitions/**/*.js',
  html: {
    enabled: true,
    output: 'cypress/reports/cucumber-html/cucumber-report.html'
  },
  json: {
    enabled: true,
    output: 'cypress/reports/cucumber-json/cucumber-report.json'
  }
}
