import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "41co4q",
  env: {
    url: 'https://storefront:Oreo2022@uk-dwstg.boohoo.com/',
    sku: 'TZZ97642',
    fullSku: 'TZZ97642-105-16',
    brand: 'boohoo.com',
    locale: 'UK',
    language: 'EN',
    giftCertificate: 'LMIFVGAICHZMZMSS',

  },
  viewportHeight: 1080,
  viewportWidth: 1920,
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
    reportDir: 'config/boohoo/results/uk',
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
      // '**/detailed_regression*/**', // Skip backend tests
    ],
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    experimentalOriginDependencies: true,
    experimentalWebKitSupport: true,
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
