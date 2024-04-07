import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'i6d3n8',
  env: {
    url: 'https://storefront:Oreo2022@eu-dwstg.boohoo.com/',
    sku: '#FZZ80440',
    fullSku: 'FZZ80440-157-18',
    brand: 'boohoo.com',
    locale: 'EU',
    language: 'EN',
    giftCertificate:'VHWWZJHMSSTTRHAZ'
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
    reportDir: 'config/boohoo/results/mobile/eu',
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
