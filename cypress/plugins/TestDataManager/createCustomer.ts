import axios from 'axios';

axios.defaults.validateStatus = () => { return true; };

function generateRandomEmail () {
  return `euboohoo+testemail${Date.now()}${Math.floor(Math.random() * 100)}@gmail.com`;
}

export function getCustomerKeyByBrand (brand: GroupBrands, keyType: APIKeyType): string {

  // We bring this into the method as the env variables won't load on start and need to be accessed in real time.
  const customer: BrandMap = {
    'boohoo.com': process.env.BOOHOO_CUSTOMER_MANAGER_APIKEY,
    'boohooman.com': process.env.BOOHOOMAN_CUSTOMER_MANAGER_APIKEY,
    'nastygal.com': process.env.NASTYGAL_CUSTOMER_MANAGER_APIKEY,
    'karenmillen.com': process.env.KARENMILLEN_CUSTOMER_MANAGER_APIKEY,
    'coastfashion.com': process.env.COAST_CUSTOMER_MANAGER_APIKEY,
    'warehousefashion.com': process.env.WAREHOUSE_CUSTOMER_MANAGER_APIKEY,
    'oasis-stores.com': process.env.OASIS_CUSTOMER_MANAGER_APIKEY,
    'dorothyperkins.com': process.env.DOROTHYPERKINS_CUSTOMER_MANAGER_APIKEY,
    'burton.co.uk': process.env.BURTON_CUSTOMER_MANAGER_APIKEY,
    'wallis.co.uk': process.env.WALLIS_CUSTOMER_MANAGER_APIKEY,
    'misspap.com': process.env.MISSPAP_CUSTOMER_MANAGER_APIKEY,
    'boohoomena.com': process.env.BOOHOO_CUSTOMER_MANAGER_APIKEY
  };

  // This is basically a Map<Map<EnvKey>>, we may want to scale up to more types of keys.
  const map: {[key in APIKeyType]: BrandMap} = {
    'Customer': customer,
  };

  const keyMap: BrandMap = map[keyType];
  const key: string = keyMap[brand];

  return key;
}

export async function getBearerAuth (brand: GroupBrands, realm: TLocale): Promise<string> {
  const prefix = process.env.PRODUCTION ? 'mobile-gateway' : 'dev-mobile-gateway';
  let endpoint = `https://${prefix}.${brand}/${realm}/customers/auth`;

  if (brand == 'boohoomena.com') endpoint = 'https://dev-mobile-mena-gateway.boohoo.com/sa/customers/auth';

  const brandCustomerManagerKey = getCustomerKeyByBrand(brand, 'Customer');

  const response = await axios.post(endpoint, { type: 'guest' }, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': brandCustomerManagerKey
    },
  });

  if (response.status === 200) {
    const headers = response.headers;
    return headers['x-amzn-remapped-authorization'] as string; 
  }

  throw Error('getBearerAuth: Did not get a success response status, with error code ' + response.status);
}

export class TestCustomer {
  realm: TLocale;
  email: string;
  password: string;
  customerId: string;
  customerName: string;
  brand: GroupBrands;
  isPreExisting: boolean;
  brandAPIKey: string;
  environment: 'mobile-gateway' | 'dev-mobile-gateway';
  token: string;
  error: string;

  constructor (brand: GroupBrands, realm: TLocale, email: string, password: string, customerId: string, name: string, token: string, preExist = false) {
    this.realm = realm;
    this.email = email;
    this.password = password;
    this.customerId = customerId;
    this.customerName = name;
    this.brand = brand;
    this.isPreExisting = preExist;
    this.brandAPIKey = getCustomerKeyByBrand(this.brand, 'Customer');
    this.environment = process.env.PRODUCTION ? 'mobile-gateway' : 'dev-mobile-gateway';
    this.error = null;
    this.token = token;
  }
}

export default async function createCustomer (brand: GroupBrands, realm: TLocale = 'uk'): Promise<TestCustomer> {

  // Get API token.
  const brandCustomerManagerKey = getCustomerKeyByBrand(brand, 'Customer');
  const bearer = await getBearerAuth(brand, realm);

  // Generate the data for the customer.
  const email = generateRandomEmail();
  const firstName = 'Boohoo';
  const lastName = 'Group';
  const password = 'Password10';

  // Create fetch body
  const body = {
    customer: {
      login: email,
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: 0,
      birthday: '1983-08-06',
      c_isPostalSubscribed: false,
      c_is3rdPartySubscribed: false,
      c_isEmailSubscribed: false,
      c_isSMSSubscribed: false
    },
    password: password
  };

  // Make the call to the customer API.
  const prefix = process.env.PRODUCTION ? 'mobile-gateway' : 'dev-mobile-gateway';
  let endpoint = `https://${prefix}.${brand}/${realm}/customers`;

  if (brand == 'boohoomena.com') endpoint = 'https://dev-mobile-mena-gateway.boohoo.com/sa/customers';

  const response = await axios.post(endpoint, body, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: bearer,
      'x-api-key': brandCustomerManagerKey,
    }
  });

  // If the response is successful, return it as an instance of customer
  if (response.status === 200) {
    const json = await response.data as TCustomerJSONResponse;
    return new TestCustomer(brand, realm, json.email, password, json.customer_id, 'Test Account', bearer, false);
  }

  try {
    console.log(await response.data);
  } catch { /* Nothing */ }
 
  const invalidCustomer = new TestCustomer(brand, realm, email, password, 'NO_CUSTOMER_ID_ASSIGNED', 'Invalid Account', 'no token', false);
  invalidCustomer.error = 'Could not create this test customer, status code: ' + response.status;
  return invalidCustomer;
}