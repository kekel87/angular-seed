import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  videosFolder: 'e2e/videos',
  screenshotOnRunFailure: false,
  screenshotsFolder: 'e2e/screenshots',
  fixturesFolder: 'e2e/fixtures',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('e2e/plugins/index.ts')(on, config)
    },
    specPattern: 'e2e/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'e2e/support/index.ts',
    baseUrl: 'http://localhost:4200',
  },
})
