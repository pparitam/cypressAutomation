import axios from 'axios';

type JWTResponse = { 
    status: number;
    statusText: string;
    token: string;
}

async function getJWTToken (brand: GroupBrands, locale: TLocale, username: string, password: string, apiKey: string): Promise<JWTResponse> {

  const prefix = process.env.PRODUCTION ? 'mobile-gateway' : 'dev-mobile-gateway';
  let endpoint = `https://${prefix}.${brand}/${locale}/customers/auth`;

  if (brand == 'boohoomena.com') endpoint = 'https://dev-mobile-mena-gateway.boohoo.com/sa/customers/auth';

  // Send request.
  const response = await axios.post(endpoint, { type: 'credentials' },
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        Authorization: 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
      }
    });
  
  // Validate
  const headers = response.headers;
  return { 
    status: response.status,
    statusText: response.statusText,
    token: response.status === 200 ? headers['x-amzn-remapped-authorization'] : null
  };
}

export default async function (credentials: NewCustomerCredentials, brand: GroupBrands, locale: 'uk', apiKey: string): Promise<string> {
  const tokenRequest = await getJWTToken(brand, locale, credentials.email, credentials.password, apiKey);
  if (tokenRequest.status === 200) {
    return tokenRequest.token;
  } else {
    throw new Error(`Could not get JWT token from request, response code was ${tokenRequest.status} (${tokenRequest.statusText})`);
  }
}