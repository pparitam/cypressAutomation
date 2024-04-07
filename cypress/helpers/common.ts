// Common actions.

export function randomEmail (): string {
  const randomEmail = 'euboohoo+<RANDOM>@gmail.com'.replace('<RANDOM>', String(Date.now()));
  return randomEmail;
}

export function applyMarketingCookies (): void {
  cy.setCookie('dw_cookies_accepted', 'A');
  cy.setCookie('dw_is_new_consent', 'true');
}

type BrandLocaleMap = Record < GroupBrands, Partial< Record < Locale, PaymentMethod > > >;

export function getCardProviderByBrand (brand: GroupBrands, locale: Locale): PaymentMethod {
  const paymentLookupTable: BrandLocaleMap = {
    'boohoo.com': {
      AU: 'WorldPay', // Australia
      CA: 'WorldPay', // Canada
      DE: 'Adyen', // Germany
      DK: 'Adyen', // Denmark
      ES: 'Adyen', // Spain
      EU: 'Adyen', // Europe
      FI: 'Adyen', // Finland
      FR: 'Adyen', // France
      IT: 'Adyen', // Italy
      NL: 'Adyen', // Netherlands
      NO: 'Adyen', // Norward
      IL: 'Adyen', // Israel
      NZ: 'WorldPay', // New Zealand
      SE: 'Adyen', // Sweden
      UK: 'Adyen', // United Kingdom
      IE: 'WorldPay', // Ireland
      US: 'WorldPay' // United States
    },
    'boohooman.com': {
      AU: 'WorldPay',
      CA: 'WorldPay',
      DE: 'Adyen',
      DK: 'Adyen',
      ES: 'Adyen',
      EU: 'Adyen',
      FI: 'Adyen',
      FR: 'Adyen',
      IT: 'Adyen',
      NL: 'Adyen',
      NO: 'Adyen',
      NZ: 'WorldPay',
      SE: 'Adyen',
      UK: 'Adyen',
      IE: 'WorldPay', 
      US: 'WorldPay'
    },
    'nastygal.com': {
      AU: 'WorldPay',
      CA: 'WorldPay',
      DE: 'Adyen',
      DK: 'Adyen',
      ES: 'Adyen',
      EU: 'Adyen',
      FI: 'Adyen',
      FR: 'Adyen',
      IT: 'Adyen',
      NL: 'Adyen',
      NO: 'Adyen',
      NZ: 'WorldPay',
      SE: 'Adyen',
      UK: 'Adyen',
      IE: 'WorldPay',
      US: 'WorldPay'
    },
    'karenmillen.com': {
      AU: 'WorldPay',
      CA: 'WorldPay',
      NZ: 'WorldPay',
      UK: 'Adyen',
      US: 'WorldPay'
    }
  };

  const localeTable = paymentLookupTable[brand] ?? {};
  const paymentType = localeTable[locale] ?? 'Could not find payment type' as PaymentMethod; 
  return paymentType;
}

type BrandPaymentMap = Record < GroupBrands, Array<PaymentMethod> >;

export function isBrandSupportingPaymentMethod (brand: GroupBrands, paymentMethod: PaymentMethod): boolean {
  const paymentLookupTable: BrandPaymentMap = {
    'boohoo.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'LayBuy',
      'Klarna'
    ],
    'boohooman.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ],
    'nastygal.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ],
    'karenmillen.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ]
  };

  return paymentLookupTable[brand].includes(paymentMethod) as boolean;
}

const variables = Cypress.env() as EnvironmentVariables;
export const siteGenesisBrands: Array<GroupBrands> = ['karenmillen.com', 'boohooman.com'];
export const isSiteGenesisBrand: boolean = siteGenesisBrands.includes(variables.brand);

const viewportWidth = Cypress.config('viewportWidth');
export const isMobileDeviceUsed: boolean = viewportWidth < 1100;

export const EUlocales: Array<EuropeCountryCode> = ['DE', 'DK', 'ES', 'EU', 'FI', 'FR', 'IE', 'IT', 'NL', 'NO', 'SE', 'UK'];
export function isEUlocales(locale: EuropeCountryCode): boolean {
  return EUlocales.includes(locale);
}