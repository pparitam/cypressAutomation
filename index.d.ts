declare namespace Cypress {
    interface Chainable<Subject> {
        goOffline: () => Chainable<null>;
        createUser: (brand: GroupBrands) => Chainable<Subject>;
        prepareUser: (customer: NewCustomerCredentials, brand: GroupBrands, sku: string) => void;
        createArtefact: (testArtefact: TestArtefact, folderPath: string, brand: string, paymentMethod: string, orderType?: string) => Chainable<null>;
        BOMSLogin: () => Chainable<null>;
        storeCurrentUrl(): Chainable<any>;
        navigateToStoredUrl(): Chainable<any>;
        ClickIfElemenExist(webElement: string):Chainable<any>;

    }
}

// These are for selecting on the website, if you want to use back end locale codes then please use the type "Locale"
type AustralasiaCountryCode = 'AU' | 'NZ';
type NorthAmericaCountryCode = 'US' | 'CA';
type EuropeCountryCode = 'UK' | 'FR' | 'IE' | 'EU' | 'NL' | 'DE' | 'ES' | 'SE' | 'IT' | 'DK' | 'FI' | 'NO' | 'RU' | 'IL';
type MiddleEastCountryCode = 'AE' | 'BH' | 'JO' | 'KW' | 'OM' | 'QA' | 'SA';
type FarEastCountryCode = 'HK' | 'TW' | 'JP' | 'SG' | 'KR';
declare type CountryCode = AustralasiaCountryCode | NorthAmericaCountryCode | EuropeCountryCode | MiddleEastCountryCode | FarEastCountryCode;

type GroupBrands =
    | 'boohoo.com'
    | 'boohooman.com'
    | 'nastygal.com'
    | 'karenmillen.com'

declare type TestScenario =
    | 'CompleteOrder'
    | 'FullRefund'
    | 'PartialRefund'
    | 'Cancellation'
    | 'PartialCancellation'
    | 'FullGCRefund'
    | 'GCRefund'
    | 'GCPartialRefund';

declare type PaymentMethod =
	| 'Adyen'
    | 'PayPal'
    | 'Clearpay'
    | 'LayBuy'
    | 'WorldPay'
    | 'Klarna'
    | 'CreditCard_Visa'
    | 'CreditCard_Amex'
    | 'CreditCard_MasterCard';

declare type EnvironmentVariables = {
    url: string;
    sku: string;
    fullSku: string;
    brand: GroupBrands;
    brandName: string;
    locale: Locale;
    language: 'EN' | 'NL' | 'DE' | 'FR' | 'DK' | 'FI' | 'NO' | 'SE' | 'IL'| 'IT' | 'ES';
    shippingMethod: string;
    giftCertificate: string;
}

declare type TestArtefact = {
    orderNumber: string;
    orderTotal: string;
    orderEmail: string;
    deliveryMethod: string;
    paymentMethod: PaymentMethod;
    items: Array<{
        sku: string;
        quantity: number;
    }>;
    groupBrand: GroupBrands;
    testScenario: TestScenario;
    locale: Locale | CountryCode;
    url: string;
    timestamp: number;
};

declare type TCustomerJSONResponse = {
    email: string;
    customer_id: string;
    customer_no: string;
}

declare type NewCustomerCredentials = {
    email: string;
    password: string;
    token?: string;
};

declare type SelectorBrandMap = { [key in GroupBrands]: Record<string, string> };

/** Type for mapping brands to a string. */
declare type BrandMap = { [key in GroupBrands]: string };

/** Lowercase locale of the country you want, used in the API managers. */
declare type TLocale = 'uk' | 'us';

/** Types for the API manager to limit input types, can be expandeed with | */
declare type APIKeyType = 'Customer';

declare type LoginCredentials = {
    username: string;
    password: string;
    name: string;
    guest: string;
    boohoomanUsername: string;
    boohoomanPassword: string;
}

declare type LoginDetails = {
    Email: string;
    Password: string;
}

declare type AddressData = {
    firstName: string;
    lastName: string;
    phone: string;
    addressLine: string;
    postcode: string;
    addressName: string;
    city: string;
    county: string;
    country: string;
    countryCode: string;
    addressNickname: string;
    what3Words: string;
    month: string;
}

declare type ShippingData = {
    shippingMethodName: string;
}

declare type CardDetails = {
    name: string;
    cardNo: string;
    end: string;
    owner: string;
    date: string;
    month: string;
    year: string;
    code: string;
}

declare type SKU = {
    sku: string;
}

declare type Language = 'EN' | 'NL' | 'DE' | 'FR' | 'DK' | 'FI' | 'NO' | 'SE' | 'IL'| 'IT' | 'ES';
declare type Locale = 'UK' | 'EU' | 'US' |'CA' | 'AU' |'NZ' |'NL' | 'DE' | 'FR' | 'DK' | 'FI' | 'NO' | 'SE' | 'IL'| 'IT' | 'ES' | 'IE' | 'SA' | 'KW'|'BH' | 'OM'|'JO';

declare type TranslationMap = { [key in Language]: string };

declare type Sizes = 'UK' | 'US';

declare type SizesMap = { [key in Sizes]: string };

declare type Currencies = 'GBP' | 'EUR' | 'USD' | 'SAR' ;

declare type PriceMap = { [key in Currencies]: string };

declare type AddressMapAddressLine1 = {[key in Locale]: string}
declare type AddressMapAddressLine2 = {[key in Locale]: string}
declare type AddressMapPostcode = {[key in Locale]: string}
declare type AddressMapPhoneNumber = {[key in Locale]: string}

declare type UserType = 'GuestUser' | 'RegisteredUser'

declare type ReportTest = {
    'title': string;
    'fullTitle': string;
    'timedOut': unknown;
    'duration': number;
    'state': string;
    'speed': unknown;
    'pass': boolean;
    'fail': boolean;
    'pending': boolean;
    'context': unknown;
    'code': string;
    'err': {
      'message'?: string;
      'estack'?: string;
      'diff'?: unknown;
    };
    'uuid': string;
    'parentUUID': string;
    'isHook': boolean;
    'skipped': boolean;
}

declare type ReportSuite = {
    'uuid': string;
    'title': string;
    'fullFile': string;
    'file': string;
    'beforeHooks': [];
    'afterHooks': [];
    'tests': Array<ReportTest>;
    'suites': [];
    'passes': Array<string>;
    'failures': Array<string>;
    'pending': [];
    'skipped': [];
    'duration': number;
    'root': boolean;
    'rootEmpty': boolean;
    '_timeout': number;
};

declare type ReportSchema = {
    'stats': {
        'suites': number;
        'tests': number;
        'passes': number;
        'pending': number;
        'failures': number;
        'start': string;
        'end': string;
        'duration': number;
        'testsRegistered': number;
        'passPercent': number;
        'pendingPercent': number;
        'other': number;
        'hasOther': boolean;
        'skipped': number;
        'hasSkipped': boolean;
    };
    'results': Array<{
        'uuid': string;
        'title': string;
        'fullFile': string;
        'file': string;
        'beforeHooks': [];
        'afterHooks': [];
        'tests': [];
        'suites': Array<ReportSuite>;
        'passes': [];
        'failures': [];
        'pending': [];
        'skipped': [];
        'duration': number;
        'root': boolean;
        'rootEmpty': boolean;
        '_timeout': number;
    }>;
}