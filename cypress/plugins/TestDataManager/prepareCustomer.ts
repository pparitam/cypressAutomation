import axios from 'axios';
import { getCustomerKeyByBrand } from './createCustomer';
import createBasket from './createBasket';
import jwtToken from './jwtToken';

export async function whitelistEmail (email: string): Promise<void> {
  const endpoint = 'https://uat-transactional-mail.boohoo.com/whitelist';

  const response = await axios.post(
    endpoint,
    { emails: [email] },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.EMAIL_WHITELIST_AUTH_KEY,
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        Accept: '*/*',
      },
    }
  );

  if (response.status !== 200) {
    throw Error(
      'whitelistEmail: Did not get a success response status, with error code ' +
        response.status
    );
  }

  console.log('Email whitelisted successfully:', email);
}

export default async function (credentials: NewCustomerCredentials, brand: GroupBrands, sku: string, locale: 'uk'): Promise<{success: boolean}> {

  // Check SKU is valid.
  const skuRegex = /(?:([a-zA-Z]|[0-9])+-[0-9]+-[0-9]+)/;
  if (!skuRegex.test(sku)) throw new Error('SKU does not match regex, format must be /(?:([a-zA-Z]|[0-9])+-[0-9]+-[0-9]+)/ (XXXXXXX-XXX-XXX) or similar, got: ' + sku);

  // Get brand API key
  const brandCustomerManagerKey = getCustomerKeyByBrand(brand, 'Customer');
  const token = await jwtToken(credentials, brand, locale, brandCustomerManagerKey);

  // Get a basket generated.
  const basketId = await createBasket(credentials, brand, locale, brandCustomerManagerKey, token);

  // Make the call to the customer API.
  const prefix = process.env.PRODUCTION ? 'mobile-gateway' : 'dev-mobile-gateway';
  let endpoint = `https://${prefix}.${brand}/${locale}/baskets/${basketId}/items`;

  if (brand == 'boohoomena.com') endpoint = `https://dev-mobile-mena-gateway.boohoo.com/sa/baskets/${basketId}/items`;

  const response = await axios.post(endpoint, 
    [{
      product_id: sku,
      quantity: 1
    }],
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': brandCustomerManagerKey,
        'x-dw-jwt-token': token,
      }  
    }
  );

  if (response.status !== 200) {
    const json = await response.data;
    throw new Error(`setProductInBasket: Did not get a success response status, with error: ${(json.fault && json.fault.message) ? json.fault.message as string : String(response.status)}`);
  } else {
    await whitelistEmail(credentials.email);
  }

  return {
    success: true
  };
}