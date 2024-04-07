import createCustomer from './TestDataManager/createCustomer';
import prepareCustomer from './TestDataManager/prepareCustomer';
import { join } from 'path';

export default async function (on: Cypress.PluginEvents): Promise<void> {

  // This will import any .env file env variables.
  try {
    const configWithDotenv = (await import('dotenv')).config({ 
      path: join(__dirname, '..', '..', '.env'),
    });
    if (configWithDotenv.error) {
      throw configWithDotenv.error;
    }
    console.log('Environment Variables', configWithDotenv.parsed);
  } catch {
    console.warn('No env file found.');
  }

  on('task', {

    // Creates a user and returns you the credentials with its JWT token for later requests.
    async createUser (brand: GroupBrands): Promise<NewCustomerCredentials> {
      const customer = await createCustomer(brand, 'uk');
      return {
        email: customer.email,
        password: customer.password,
        token: customer.token
      };
    },

    // Uses credentials and JWT token to set up a users basket.
    async prepareUser (parameters: { credentials: NewCustomerCredentials; brand: GroupBrands; sku: string }) {
      const updatedCustomer = await prepareCustomer(parameters.credentials, parameters.brand, parameters.sku, 'uk');
      return updatedCustomer;
    },

    // Outputs everything from cy.log() to the console as well
    log (message) {
      console.log(message);
      return null;
    },
  });
}