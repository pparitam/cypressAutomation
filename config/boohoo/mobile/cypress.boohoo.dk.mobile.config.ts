import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',
  env: {
    url: 'https://storefront:Oreo2022@dk-dwstg.boohoo.com/',
    sku: '#TZZ97642',
    fullSku: 'TZZ97642-105-16',
    brand: 'boohoo.com',
    locale: 'DK',
    language: 'EN',
  },
  viewportHeight: 896,
  viewportWidth: 414,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,

  blockHosts: [
    'boohoo-engb.qa.verbolia.com' // Stops verbolia sign-in popup
  ],
  // Create Mochawesome report after 'cypress run' tests finish
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'config/boohoo/results/mobile/dk',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    json: true,

  },
  e2e: {
    setupNodeEvents(on, config) {
    // configure plugins here
    require('cypress-mochawesome-reporter/plugin')(on);
    on('task', {
      log(message) {
        console.log(message)
        return null
      },
    })
  },
    excludeSpecPattern: [
      '**/backend*/**' // Skip backend tests
    ],
    numTestsKeptInMemory: 0,
    retries: {
      experimentalStrategy: 'detect-flake-and-pass-on-threshold',
      experimentalOptions: {
        maxRetries: 2,
        passesRequired: 2,
      },
      // You must also explicitly set openMode and runMode to
      // Either true or false when using experimental retries
      openMode: true,
      runMode: true,
    },
  },
});
