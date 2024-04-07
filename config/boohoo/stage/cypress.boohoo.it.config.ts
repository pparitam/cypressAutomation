import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@it-dwstg.boohoo.com/',
    sku: '#FZZ80440',
    fullSku: 'FZZ80440-157-18',
    brand: 'boohoo.com',
    locale: 'IT',
    language: 'IT',
    giftCertificate:'YPDRCLTOWWVAYPSW'
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'config/boohoo/results/it',
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
