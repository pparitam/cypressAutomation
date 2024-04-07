import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'eqvgg4',

  env: {
    url: 'https://storefront:Oreo2022@dev.karenmillen.com',
    sku: 'AKK97265-123',
    fullSku: 'AKK97265-123-14',
    brand: 'karenmillen.com',
    brandName:'karenmillen',
    locale: 'UK',
    language: 'EN'
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  
  e2e: {
    setupNodeEvents (on) {
      plugins(on);
    },
    numTestsKeptInMemory: 0,
  },

});

