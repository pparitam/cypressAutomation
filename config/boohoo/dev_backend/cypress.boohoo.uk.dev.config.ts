import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'eqvgg4',

  env: {
    url: 'https://storefront:Oreo2022@uk-dwdev.boohoo.com',
    sku: '#PZZ77636-105',
    fullSku: 'PZZ77636-105-51',
    brand: 'boohoo.com',
    brandName:'boohoo',
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

