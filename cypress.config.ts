import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 20000,
  fixturesFolder: 'cypress/fixtures',
  retries: 1,
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins')(on, config)
    },
    baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

  },
})
