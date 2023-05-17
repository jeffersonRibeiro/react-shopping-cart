import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: process.env.ENV_ID || 'http://localhost:3000/',
    // viewportWidth: process.env.WIDTH || 1920
    // viewportWidth: process.env.HEIGHT || 1080
  },
});
