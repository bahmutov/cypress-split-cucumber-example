const { defineConfig } = require('cypress')
// const cypressSplit = require('./src')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    supportFile: false,
    setupNodeEvents(on, config) {
      // cypressSplit(on, config)
      on('file:preprocessor', cucumber())
      // IMPORTANT: return the config object
      return config
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
})
