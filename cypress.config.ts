import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    excludeSpecPattern: [
      '**/backend*/**', // Skip backend tests
      '**/additionalTests*/**', // Skip additional tests
    ],

    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents (on, config) {

    // Implement node event listeners here
    },
  }
});
