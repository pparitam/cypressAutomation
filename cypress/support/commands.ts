/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable  @typescript-eslint/no-var-requires */
// Any methods created need to be added to the Cypress namespace, this is typescript feature.

import { brand, locale } from './e2e';
// Command to get and store the current URL
Cypress.Commands.add('storeCurrentUrl', () => {
  cy.url().then((url) => {
    cy.log(`Storing current URL: ${url}`);
    Cypress.env('currentUrl', url);
  });
});

// Command to use the stored URL in a different function
Cypress.Commands.add('navigateToStoredUrl', () => {
  const storedUrl = Cypress.env('currentUrl');
  
  if (!storedUrl) {
    throw new Error('No stored URL found. Make sure to run `storeCurrentUrl` first.');
  }

  cy.visit(storedUrl);
});
// Login and preserve tokens. (EXPERIMENTAL, NOT CURRENTLY IN USE).
Cypress.Commands.add('goOffline', () => {
  return cy.log('Disabling internet connectivity').then(() => {
    Cypress.automation('remote:debugger:protocol', {
      command: 'Network.enable'
    });
    Cypress.automation('remote:debugger:protocol', {
      command: 'Network.emulateNetworkConditions',
      params: {
        offline: true,
        latency: -1,
        downloadThroughput: -1,
        uploadThroughput: -1,
      }
    });
  });
});

//  Command to login on BOMS for generating order refund
Cypress.Commands.add('BOMSLogin', ()=>{

  cy.visit('https://uat-boms.boohoo.com/');

  cy.wait(3000);
  cy.reload(); // Wait and reload is just to refresh the csrf token to avoid 419 page expiration issue

  cy.get('input[name="username"]', { log: false }).should('be.enabled');
  cy.get('input[name="username"]', { log: false }).type('muneeb.akhtar', { log: false });
  cy.get('input[name="password"]', { log: false }).type('Muneebrana123,./', { log: false });
  cy.get('button[id*="submit"]', { log: false }).click({ log: false });
});

/**
 * Command that takes in a brand as a brand url, this will be a host url like boohoo.com, this will create an account for that url
 * and return you an object with
 */
Cypress.Commands.add('createUser', (brand: GroupBrands) => {
  const timestamp = Date.now();
  cy.task('createUser', brand).then((result: NewCustomerCredentials) => {
    cy.wrap(result).as(`UserCreatedAt${timestamp}`);
  });
  return cy.get(`@UserCreatedAt${timestamp}`);
});

/**
 * Command that takes in a user credentials, a brand, and a sku, and will set that product in the basket so you can navigate straight to the checkout.
 * Can only be used on dev environment
 */
Cypress.Commands.add('prepareUser', (credentials: NewCustomerCredentials, brand: GroupBrands, sku: string) => {
  cy.task('prepareUser', { credentials, brand, sku });
});

/**
 * Create an artefact file in Cypress, this file is used to fuel back end tests.
 * We need to store the test type so the test frameknown knows how to process it, it needs a folder name which will be the brand and it'll need a name.
 */
Cypress.Commands.add('createArtefact', (testArtefact: TestArtefact, folderPath: string, brand: string, paymentMethod: string, orderType?: string) => {

  // Artefact path example: cypress/artefacts_frontend/orderCreation/boohoo/creditcard_visa-2023-06-13_10-38-26.json
  const dateFormat = require('dateformat');
  const currentTime: string = dateFormat(new Date(), 'yyyy-mm-dd_HH-MM-ss'); // Format example: 2023-06-13_10-38-26

  cy.log(`Writing artefact file: ${folderPath}${brand}/${paymentMethod}-${currentTime}.json`);
  cy.log(`Artefact Content: ${JSON.stringify(testArtefact, null, 4)}'`);
  if (orderType=='OrderRefund') {
    cy.writeFile(`${folderPath}${brand}/${paymentMethod}-${orderType}.json`, JSON.stringify(testArtefact, null, 4));
  } else {
    cy.writeFile(`${folderPath}${brand}/${paymentMethod}-${currentTime}.json`, JSON.stringify(testArtefact, null, 4));
  }
});

/**
 * Click on element only if exist otherwise neglect it
 */
Cypress.Commands.add('ClickIfElemenExist',(webElement:string)=>{
  cy.get('body').then(body=>{
    if(body.find(webElement).length>0)
    cy.get(webElement).click({force:true})
  })

})

/**
 * Outputs everything from cy.log() to the Cypress open runner and console terminal as well
 */
// Cypress.Commands.overwrite('log', (log, message, ...args) => {
//   log(message, ...args);
//   cy.task('log', [message, ...args].join(', '), { log: false });
// });

/**
 * Appends ?noredirect=true or &noredirect=true flag to the url when doing cy.visit(url) - stops 302 redirects and resolves 401 unauthorized errors
 */
Cypress.Commands.overwrite('visit', function (originalFn, url) {
  let urlPath = url as unknown as string;
  if (urlPath.includes('?')) {
    urlPath += '&noredirect=true';
  } else {
    urlPath += '?noredirect=true';
  }

  // Currently EU locale for below brands is accessible with /ie endpoints so replacing /eu with /ie. only differentiating btw IE and EU locale on base of cookies
  if ((brand == 'karenmillen.com') && locale == 'EU') {
    urlPath = urlPath.replace('/eu', '/ie');
  }

  return originalFn({ url: urlPath });
});

import 'cypress-wait-until';