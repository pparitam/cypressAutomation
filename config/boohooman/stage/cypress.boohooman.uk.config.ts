import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';
// import { configureXrayPlugin, addXrayResultUpload } from 'cypress-xray-plugin';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://staging.boohooman.com/',
    sku: 'AMM01545',
    fullSku: 'AMM01545-161-30',
    brand: 'boohooman.com',
    locale: 'UK',
    language: 'EN',
    giftCertificate: 'HFRDVPYOPILZLLCD',
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 40000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,

  // Create Mochawesome report after 'cypress run' tests finish
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'config/boohooman/results/uk',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    json: true,

  },

  e2e: {
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    excludeSpecPattern: [
      '**/detailed_regression*/**', // Skip backend tests
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

      // you must also explicitly set openMode and runMode to
      // either true or false when using experimental retries
  
      // You must also explicitly set openMode and runMode to
      // Either true or false when using experimental retries
      openMode: true,
      runMode: true,
    },
  },
});
