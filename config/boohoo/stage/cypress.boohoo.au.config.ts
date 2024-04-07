import { defineConfig } from "cypress";
import plugins from "../../../cypress/plugins";

export default defineConfig({
  projectId: "i6d3n8",

  env: {
    url: "https://storefront:Oreo2022@au-dwstg.boohoo.com/",
    sku: "#FZZ80440",
    fullSku: "FZZ80440-157-18",
    brand: "boohoo.com",
    locale: "AU",
    language: "EN",
    giftCertificate: "OHQRIGQKIDVHSKGY",
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "config/boohoo/results/au",
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
      '**/backend*/**', // Skip backend tests
    ],
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    experimentalOriginDependencies: true,
    experimentalWebKitSupport: true,
    retries:
    {
      runMode: 2,
      openMode: 1
    },
  },
});
