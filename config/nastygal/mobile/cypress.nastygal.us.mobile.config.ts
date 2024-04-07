import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',
  env: {
    url: 'https://storefront:Oreo2022@us1-dwstg.nastygal.com/',
    sku: '#BGG17089', // Needs hashtag for assertation on PDP
    fullSku: 'BGG17089-808-16',
    brand: 'nastygal.com',
    locale: 'US',
    language: 'EN',
    giftCertificate: 'TAWPJRLTHARLALZC',
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
    reportDir: 'config/nastygal/results/mobile/us',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    overwrite: false,
    json: true,

  },
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
  e2e: {
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
