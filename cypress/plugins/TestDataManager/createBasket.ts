import axios from 'axios';

export default async function (credentials: NewCustomerCredentials, brand: GroupBrands, locale: 'uk', apiKey: string, token: string): Promise<string> {

  // Buidl URL.
  const prefix = process.env.PRODUCTION ? 'mobile-gateway' : 'dev-mobile-gateway';
  let endpoint = `https://${prefix}.${brand}/${locale}/baskets?locale=en-GB`;

  if (brand == 'boohoomena.com') endpoint = 'https://dev-mobile-mena-gateway.boohoo.com/sa/baskets?locale=en-SA';
  
  let currency = 'GBP';
  if (brand == 'boohoomena.com') currency = 'SAR';

  // Send request.
  const response = await axios.post(endpoint, {
    currency: currency
  }, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'x-dw-jwt-token': token,
    }
  });

  // Validate.
  if (response.status === 200) {
    const json = await response.data;
    return json.basket_id as string;
  }

  // Error handling.
  throw new Error(`createBasket: did not get success status with error code ${response.status} (${response.statusText}) ${JSON.stringify(response.data, null, 4)} (token: ${token})`);
}