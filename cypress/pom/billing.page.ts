import { isSiteGenesisBrand } from 'cypress/helpers/common';
import { locale, brand, language } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import assertionText from 'cypress/helpers/assertionText';
import cartPage from './cart.page';
import checkoutLoginPage from './checkoutLogin.page';
import shippingPage from './shipping.page';
import addresses from 'cypress/helpers/addresses';
import { faker } from '@faker-js/faker';
import card from 'cypress/helpers/cards';
import afterPayClearPayCredentails from 'cypress/helpers/afterPayClearPayCredentails';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaNLContinueBtn: '#onContinue',
    klarnaNLFrame: '#klarna-klarna-payments-fullscreen',
    klarnaPaymentButton: '[id*="payment-button-Klarna"]',
    klarnaPayNow: '[id*="payment-details-Klarna"] .b-button',
    klarnaContinueWithPhoneNumber: '#signInWithPhone__text',
    klarnaBankId: '[data-testid="kaf-button"]',
    payButtonLocator: '[data-testid="confirm-and-pay"]',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    promoButton: 'button[type="submit"].b-form-inline_button',
    promoErrorAlert: '#dwfrm_coupon_couponCode-error',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    giftcardApplied: '.b-gift_certificate-code',
    giftcartOrderSummary: 'div.b-summary_order-details',
    orderSummaryQty: '.b-minicart_product-qty_value',
    removeCertificate: '.b-gift_certificate-remove.b-link.m-highlight',
    addGiftCert: '#add-giftcert',
    giftCardErrorMessage: 'div.b-gift_certificate-error',
    giftCardEmptyError: '#dwfrm_billing_giftCertCode-error',
    shippingAddressSection: '[data-id="useShippingDescription"]',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    shippingMethodSelector: '[data-tau="summary_shipping"]',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    summaryTotalValue: '[data-tau="summary_total_value"]',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodCreditCardUS: '#payment-button-CREDIT_CARD',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodClearPay: '#payment-button-CLEARPAY',
    paymentMethodAmazonPay: '#payment-button-AMAZON_PAYMENTS',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
    addNewBillingAddress: '.b-form_section > .b-address_selector-actions > .m-info',
    enterManually: '[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    billingForm: '.b-billing_address-form',
    billingAddressFirstName: '#dwfrm_billing_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.b-address_selector-actions > button:nth-child(2)',
    billingAddressFromBook: '.b-form_section > :nth-child(2) > .b-option_switch-inner > .b-option_switch-label',
    dobDate: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    dobMonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    dobYear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    dobForm: 'div[class="b-form_section m-required m-wrapper"]',
    billingAddressCountry: '',
    billingCountryCode: '#dwfrm_billing_addressFields_states_stateCode',
    email: '#dwfrm_billing_contactInfoFields_email',
    paymentMethodAfterPay: '#payment-button-AFTERPAY',
    payNowbuttonAfterPay: '#payment-details-AFTERPAY .b-button',
    backToLoginButton: '[data-dd-action-name="Back To login Link"]',
    usernameInputAfterPay: '[data-testid="login-identity-input"]',
    continueButtonAfterPayUsername: '[data-testid="login-identity-button"]',
    passwordInputAfterPay: '[data-testid="login-password-input"]',
    continueButtonAfterPayPassword: '[data-testid="login-password-button"]',
    confirmButtonAfterPay: '[data-testid="summary-button"]',
    billingAddressFromBookAU: 'button[class="b-button m-link m-width_full"]',
    klarnaContinueCTA: 'button[style*="geometricprecision"]',
    klarnaIFrame: '#klarna-apf-iframe',
    klarnaIFrameContinueCTA: '#onContinue',
    klarnaIFrameOtpField: '#otp_field',
    klarnaIFramePayLaterRadioCTA: "[value='pay_later']",
    klarnaIFramePayNowRadioCTA: '#pay_now-pay_now',
    klarnaIFrameSelectPaymentCatCTA: 'button[data-testid="select-payment-category"]',
    klarnaIFrameTermandConditionCheckBox: '#root > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(6) > div > label > div:nth-child(2)',
    klarnaIFramePickupPlanPopup: '[data-testid="pick-plan"]',
    klarnaIFrameSkipAndContinueCTA: '#dialog [data-testid="PushFavoritePayment:skip-favorite-selection"]',
    klarnaIFrameFasterCheckoutPopup: '[data-testid="SmoothCheckoutPopUp\\:skip"]',
    klarnaPhone: '[name="phone"]',
    klarnaEmail: '[name="email"]',
    klarnaDoB: '#addressCollector-date_of_birth__container',
    klarnaFirstName: '#addressCollector-given_name',
    klarnaLastName: '#addressCollector-family_name',
    klarnaAddress: '#addressCollector-street_address',
    klarnaEnterManuallyButton: '#single_line_address_use_manual',
    klarnaPostcode: '#addressCollector-postal_code',
    klarnaSuggestionButton: '#single_line_address_use_suggestions',
    klarnaCreateAccount: '#continueBtn',
    klarnaCartNumber: '#klarnaIFramePickupPlanPopup',
    klarnaExpire: '#expire',
    klarnaCVC: '#securityCode',
    klarnaAddCardBtn: '#paybycard_kp.0-card-collection-continue-button',
    billingInfoEmailBox: 'input[id="dwfrm_billing_contactInfoFields_email"]',
    clearPaySummeryButton: '[data-testid="summary-button"]',
    clearPayIdInput: '[data-testid="login-identity-input"]',
    clearPayIdCTA: '[data-testid="login-identity-button"]',
    clearPayPasswordInput: '[data-testid="login-password-input"]',
    clearPayPasswordCTA: '[data-testid="login-password-button"]',
    iDEALSelectionButton: '#payment-button-IDEAL-SSL',
    iDEALBankSelection: '#ideal_bank',
    iDEALPaymentButton: '#payment-details-IDEAL-SSL .b-button',
    iDEALAuthoriseButton: '#op-Auth',
    sofortSelectionButton: '#payment-button-SOFORT-SSL',
    sofortPaymentButton: '#payment-details-SOFORT-SSL .b-button',
    sofortPaymentOutcomeSelection: '[name="status"]',
    sofortContinueButton: 'a > img',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: "[data-fieldtype='encryptedCardNumber']",
    creditCardFieldsCardNumberUS: '#dwfrm_billing_creditCardFields_cardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDateUS: '#dwfrm_billing_creditCardFields_expirationYear',
    creditCardFieldsExpirationDate: "[data-fieldtype='encryptedExpiryDate']",
    creditCardFieldsExpirationMonthUS: '#dwfrm_billing_creditCardFields_expirationMonth',
    creditCardSecurityCodeIframe: '[class*="adyen-checkout__card__exp-cvc"] > [class*="adyen-checkout__field"]:not([class*="storedCard"]) [class*="adyen-checkout__card__cvc__input"] .js-iframe',
    creditCardFieldsSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    creditCardFieldsSecurityCodeUS: '#dwfrm_billing_creditCardFields_securityCode',
    creditCardFieldsCardOwner: '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    creditCardFieldsCardOwnerUS: '#dwfrm_billing_creditCardFields_cardOwner',
    paynowBtnCC: ':nth-child(2).b-payment_accordion-submit > .b-checkout_step-controls .b-button',
    paynowBtnCCUS: '#payment-details-CREDIT_CARD > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  },
  'nastygal.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    summaryTotalValue: '.b-minicart_product-price_total > .b-price > .m-new',
    payButtonLocator: '[id="buy_button__text"]',
    klarnaPaymentButton: '[id*="payment-button-Klarna"]',
    klarnaPayNow: '[id*="payment-details-Klarna"] .b-button',
    payButtonLocatorIE: '[data-testid="confirm-and-pay"]',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodCreditCardUS: '#payment-button-CREDIT_CARD',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodClearPay: '#payment-button-CLEARPAY',
    paymentMethodAmazonPay: '#payment-button-AMAZON_PAYMENTS',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingAddress: 'h3.b-summary_group-subtitle button[aria-label="Change Shipping"][data-edit="address"]',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    addNewBillingAddress: '.b-form_section > .b-address_selector-actions > .m-info',
    enterManually: '[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > :nth-child(3) > .b-button',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftcardApplied: '.b-gift_certificate-info_label',
    giftcartOrderSummary: '.m-order',
    removeCertificate: '.b-gift_certificate-remove',
    giftCardErrorMessage: '.b-gift_certificate-error',
    giftCardEmptyError: '#dwfrm_billing_giftCertCode-error',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    billingForm: '.b-billing_address-form',
    billingAddressFirstName: '#dwfrm_billing_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.b-form_section > .b-address_selector-actions > .m-link',
    billingAddressFromBook: 'button.m-info[data-tau="add_new_address"]',
    billingAddressFromBookUS: '.b-address_selector-actions > .m-info',
    dobDate: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    dobMonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    dobYear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    dobForm: 'div[class="b-form_section m-required m-wrapper"]',
    billingCountryCode: '#dwfrm_billing_addressFields_states_stateCode',
    email: '#dwfrm_billing_contactInfoFields_email',
    paymentMethodAfterPay: '#payment-button-AFTERPAY',
    payNowbuttonAfterPay: '[data-id="payButton-AFTERPAY"] button[data-tau="proceed_to_orderReview"]',
    backToLoginButton: '[data-dd-action-name="Back To login Link"]',
    usernameInputAfterPay: '[data-testid="login-identity-input"]',
    continueButtonAfterPayUsername: '[data-testid="login-identity-button"]',
    passwordInputAfterPay: '[data-testid="login-password-input"]',
    continueButtonAfterPayPassword: '[data-testid="login-password-button"]',
    confirmButtonAfterPay: '[data-testid="summary-button"]',
    klarnaContinueCTA: 'button[style*="geometricprecision"]',
    klarnaIFrame: '#klarna-apf-iframe',
    klarnaIFrameContinueCTA: '#onContinue',
    klarnaIFrameOtpField: '#otp_field',
    klarnaIFramePayLaterRadioCTA: "[value='pay_later']",
    klarnaIFramePayNowRadioCTA: '#pay_now-pay_now',
    klarnaIFrameSelectPaymentCatCTA: 'button[data-testid="select-payment-category"]',
    klarnaIFrameTermandConditionCheckBox: '#root > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(6) > div > label > div:nth-child(2)',
    klarnaIFramePickupPlanPopup: '[data-testid="pick-plan"]',
    klarnaIFrameSkipAndContinueCTA: '#dialog [data-testid="PushFavoritePayment:skip-favorite-selection"]',
    klarnaIFrameFasterCheckoutPopup: '[data-testid="SmoothCheckoutPopUp\\:skip"]',
    klarnaPhone: '[name="phone"]',
    klarnaEmail: '[name="email"]',
    klarnaDoB: '#addressCollector-date_of_birth__container',
    klarnaFirstName: '#addressCollector-given_name',
    klarnaLastName: '#addressCollector-family_name',
    klarnaAddress: '#addressCollector-street_address',
    klarnaEnterManuallyButton: '#single_line_address_use_manual',
    klarnaPostcode: '#addressCollector-postal_code',
    klarnaSuggestionButton: '#single_line_address_use_suggestions',
    klarnaCreateAccount: '#continueBtn',
    klarnaCartNumber: '#klarnaIFramePickupPlanPopup',
    klarnaExpire: '#expire',
    klarnaCVC: '#securityCode',
    klarnaAddCardBtn: '#paybycard_kp.0-card-collection-continue-button',
    billingInfoEmailBox: 'input[id="dwfrm_billing_contactInfoFields_email"]',
    clearPaySummeryButton: '[data-testid="summary-button"]',
    clearPayIdInput: '[data-testid="login-identity-input"]',
    clearPayIdCTA: '[data-testid="login-identity-button"]',
    clearPayPasswordInput: '[data-testid="login-password-input"]',
    clearPayPasswordCTA: '[data-testid="login-password-button"]',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: "[data-fieldtype='encryptedCardNumber']",
    creditCardFieldsCardNumberUS: '#dwfrm_billing_creditCardFields_cardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe',
    creditCardFieldsExpirationDate: "[data-fieldtype='encryptedExpiryDate']",
    creditCardFieldsExpirationDateUS: '#dwfrm_billing_creditCardFields_expirationYear',
    creditCardFieldsExpirationMonthUS: '#dwfrm_billing_creditCardFields_expirationMonth',
    creditCardSecurityCodeIframe: '.b-form-set > .b-payment_form .adyen-checkout__field__cvc .js-iframe',
    creditCardFieldsSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    creditCardFieldsSecurityCodeUS: '#dwfrm_billing_creditCardFields_securityCode',
    creditCardFieldsCardOwner: '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    creditCardFieldsCardOwnerUS: '#dwfrm_billing_creditCardFields_cardOwner',
    paynowBtnCC: '.b-payment_accordion-submit > div > .b-button',
    paynowBtnCCUS: '#payment-details-CREDIT_CARD > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  },
  'boohooman.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaNLFrame: '#klarna-payments-fullscreen',
    klarnaNLContinueBtn: '#onContinue__text',
    klarnaPayNow: '#billingSubmitButton > span',
    klarnaPayNowIE: '#billingSubmitButton > span',
    klarnaPayNowNL: '#billingSubmitButton',
    payButtonLocator: '[data-testid="confirm-and-pay"]',
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '#dwfrm_billing_billingAddress_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_billingAddress_addressFields_address1',
    addGiftCertificate: '#dwfrm_billing_giftCertCode',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_states_state',
    billingPostCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftCardEmptyError: '[class="form-row balance"]',
    giftcardApplied: '.giftcard-redemption-title',
    giftcartOrderSummary: '.summary-inner > .checkout-order-totals',
    orderSummaryQty: '.b-minicart_product-qty_value',
    giftCardErrorMessage: 'div.form-row.balance span.error',
    removeCertificate: '.giftcard-redemption-remove.remove.js-remove-giftcertificate',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: '.useAsBillingAddress.form-row-checkbox',
    paymentMethodCreditCard: '[for*="CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodKlarnaNl: '[for="is-Klarna"]',
    paymentMethodClearPay: '[for="is-CLEARPAY"]',
    emailField: '#dwfrm_billing_billingAddress_email_emailAddress',
    confirmEmailField: '#dwfrm_billing_billingAddress_email_emailConfirm',
    emptyEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    addNewBillingAddress: '.js-edit-address',
    billingForm: '.js-address-form',
    billingAddressFirstName: '#dwfrm_billing_billingAddress_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_billingAddress_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '[name="dwfrm_billing_addressList"]',
    billingAddressFromBook: '#dwfrm_singleshipping_addressList > option:nth-child(3)',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    dobForm: '.form-birthday-rows-inner',
    promoCodeField: '#dwfrm_billing_couponCode',
    email: '#dwfrm_billing_contactInfoFields_email',
    paymentMethodAfterPay: '[for="is-AFTERPAY"]',
    klarnaPaymentsMainNL: '#klarna-payments-main',
    klarnaPayLaterRadioButtonNL: '[id="radio-pay_later__label"]>input',
    klarnaIFrameVarificationCodeBoxNL: '[name="otp_field"]',
    klarnaIFramePurchaseReviewNL: '#invoice_kp-purchase-review-dialog__bottom',
    klarnaContinueCTA: 'button[style*="geometricprecision"]',
    klarnaIFrame: '#klarna-apf-iframe',
    klarnaIFrameContinueCTA: '#onContinue',
    klarnaIFrameOtpField: '#otp_field',
    klarnaIFramePayLaterRadioCTA: "[value='pay_later']",
    klarnaIFramePayNowRadioCTA: '#pay_now-pay_now',
    klarnaIFrameSelectPaymentCatCTA: 'button[data-testid="select-payment-category"]',
    klarnaIFrameTermandConditionCheckBox: '#root > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(6) > div > label > div:nth-child(2)',
    klarnaIFramePickupPlanPopup: '[data-testid="pick-plan"]',
    klarnaIFrameSkipAndContinueCTA: '#dialog [data-testid="PushFavoritePayment:skip-favorite-selection"]',
    klarnaIFrameFasterCheckoutPopup: '',
    klarnaPhone: '[name="phone"]',
    klarnaEmail: '[name="email"]',
    klarnaDoB: '#addressCollector-date_of_birth__container',
    klarnaFirstName: '#addressCollector-given_name',
    klarnaLastName: '#addressCollector-family_name',
    klarnaAddress: '#addressCollector-street_address',
    klarnaEnterManuallyButton: '#single_line_address_use_manual',
    klarnaPostcode: '#addressCollector-postal_code',
    klarnaSuggestionButton: '#single_line_address_use_suggestions',
    klarnaCreateAccount: '#continueBtn',
    klarnaCartNumber: '#klarnaIFramePickupPlanPopup',
    klarnaExpire: '#expire',
    klarnaCVC: '#securityCode',
    klarnaAddCardBtn: '#paybycard_kp.0-card-collection-continue-button',
    billingInfoEmailBox: 'input[id="dwfrm_billing_contactInfoFields_email"]',
    clearPaySummeryButton: '[data-testid="summary-button"]',
    clearPayIdInput: '[data-testid="login-identity-input"]',
    clearPayIdCTA: '[data-testid="login-identity-button"]',
    clearPayPasswordInput: '[data-testid="login-password-input"]',
    clearPayPasswordCTA: '[data-testid="login-password-button"]',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__card__cardNumber__input .js-iframe',
    creditCardFieldsCardNumber: "[data-fieldtype='encryptedCardNumber']",
    creditCardExpirationDateIframe: '.adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: "[data-fieldtype='encryptedExpiryDate']",
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    creditCardFieldsCardOwner: "[name='holderName']",
    paynowBtnCC: '.adyen-checkout__button__text',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  },
  'karenmillen.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPaymentButton: '[for*="is-Klarna"]',
    klarnaPayNow: '#billingSubmitButton',
    payButtonLocator: '[data-testid="confirm-and-pay"]',
    payButtonLocatorAU: '[data-testid="confirm-and-pay"]>div>div>span',
    payButtonLocatorUS: '[data-testid="confirm-and-pay"]',
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '.city .input-text',
    billingAddressFieldsAddress1: '.address1 .input-text',
    addGiftCertificate: '#dwfrm_billing_giftCertCode',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_states_state',
    billingPostCode: '.postal .input-text',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    summaryTotalValue: '.summary-inner > .checkout-order-totals > .cart-order-totals-inner > .order-totals-table > tbody > .order-total > .order-value',
    addGiftCert: '#add-giftcert',
    giftCardEmptyError: '[class="form-row balance"]',
    giftcardApplied: '.giftcard-redemption-title',
    giftcartOrderSummary: '.checkout-order-totals.js-checkout-order-totals table.order-totals-table tbody tr td',
    removeCertificate: '.giftcard-redemption-remove',
    giftCardErrorMessage: '.form-row.balance span.error',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodCreditCardUS: '[for="is-CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodClearPay: '[for="is-CLEARPAY"]',
    paymentMethodAfterPay: '[for="is-AFTERPAY"]',
    payNowbuttonAfterPay: '#billingSubmitButton',
    backToLoginButton: '[data-dd-action-name="Back To login Link"]',
    usernameInputAfterPay: '[data-testid="login-identity-input"]',
    continueButtonAfterPayUsername: '[data-testid="login-identity-button"]',
    passwordInputAfterPay: '[data-testid="login-password-input"]',
    continueButtonAfterPayPassword: '[data-testid="login-password-button"]',
    confirmButtonAfterPay: '[data-testid="summary-button"]',
    emptyEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    addNewBillingAddress: '.js-edit-address',
    billingForm: '.js-address-form',
    billingAddressFirstName: '#dwfrm_billing_billingAddress_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_billingAddress_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.use-another-address',
    billingAddressFromBook: ':nth-child(2) > .address-radios-label',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    dobForm: '.form-birthday-rows-inner',
    promoCodeField: '#dwfrm_billing_couponCode',
    email: '#dwfrm_billing_contactInfoFields_email',
    klarnaContinueCTA: 'button[style*="geometricprecision"]',
    klarnaIFrame: '#klarna-apf-iframe',
    klarnaIFrameContinueCTA: '#onContinue',
    klarnaIFrameOtpField: '#otp_field',
    klarnaIFramePayLaterRadioCTA: "[value='pay_later']",
    klarnaIFramePayNowRadioCTA: '#pay_now-pay_now',
    klarnaIFrameSelectPaymentCatCTA: 'button[data-testid="select-payment-category"]',
    klarnaIFrameTermandConditionCheckBox: '#root > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(6) > div > label > div:nth-child(2)',
    klarnaIFramePickupPlanPopup: '[data-testid="pick-plan"]',
    klarnaIFrameSkipAndContinueCTA: '#dialog [data-testid="PushFavoritePayment:skip-favorite-selection"]',
    klarnaIFrameFasterCheckoutPopup: '[data-testid="SmoothCheckoutPopUp\\:skip"]',
    klarnaPhone: '[name="phone"]',
    klarnaEmail: '[name="email"]',
    klarnaDoB: '#addressCollector-date_of_birth__container',
    klarnaFirstName: '#addressCollector-given_name',
    klarnaLastName: '#addressCollector-family_name',
    klarnaAddress: '#addressCollector-street_address',
    klarnaEnterManuallyButton: '#single_line_address_use_manual',
    klarnaPostcode: '#addressCollector-postal_code',
    klarnaSuggestionButton: '#single_line_address_use_suggestions',
    klarnaCreateAccount: '#continueBtn',
    klarnaCartNumber: '#klarnaIFramePickupPlanPopup',
    klarnaExpire: '#expire',
    klarnaCVC: '#securityCode',
    klarnaAddCardBtn: '#paybycard_kp.0-card-collection-continue-button',
    billingInfoEmailBox: 'input[id="dwfrm_billing_contactInfoFields_email"]',
    clearPaySummeryButton: '[data-testid="summary-button"]',
    clearPayIdInput: '[data-testid="login-identity-input"]',
    clearPayIdCTA: '[data-testid="login-identity-button"]',
    clearPayPasswordInput: '[data-testid="login-password-input"]',
    clearPayPasswordCTA: '[data-testid="login-password-button"]',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    creditCardFieldsCardNumberUS: '#cc_cardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    creditCardFieldsExpirationDateUS: '#cc_expDate',
    creditCardSecurityCodeIframe: '#component_scheme .adyen-checkout__field__cvc .js-iframe',
    creditCardFieldsSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    creditCardFieldsSecurityCodeUS: '[class="form-row js-form-row cvn js-cvn cvn required"]>div>input',
    creditCardFieldsCardOwner: '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    creditCardFieldsCardOwnerUS: '#dwfrm_billing_paymentMethods_creditCard_owner',
    paynowBtnCC: '#billingSubmitButton',
    paynowBtnCCUS: '#billingSubmitButton',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  }
};

class BillingPage implements AbstractPage {
  goto(): void {
    cy.visit('/checkout?step=billing');
  }

  click = {
    changeShippingAddress() {
      const changeShippingAddress = selectors[brand].changeShippingAddress;
      cy.get(changeShippingAddress).click({ force: true });
    },
    addNewBilingAddress() {
      const addNewBillingAddress = selectors[brand].addNewBillingAddress;
      cy.get(addNewBillingAddress).click({ force: true });
    },
    changeShippingMethod() {
      const changeShippingMethod = selectors[brand].changeShippingMethod;
      cy.get(changeShippingMethod).click({ force: true });
    },
    uncheckShippingCheckbox() {
      const shippingCheckbox = selectors[brand].shippingCheckbox;
      if (isSiteGenesisBrand) {
        cy.get(shippingCheckbox).click({ force: true });
      } else {
        cy.get(shippingCheckbox).should('be.checked').uncheck({ force: true });
      }
    },
    chooseCC() {
      const paynowBtnCC = selectors[brand].paynowBtnCC;
      cy.get(paynowBtnCC).click({ force: true });
    }

  };

  actions = {
    waitPageToLoad() {
      cy.wait(12000);
      if (brand == 'boohooman.com') {
        cy.url().should('include', 'shipping');
      } else {
        cy.url().should('include', 'billing');
      }

    },
    selectDate(day: string, month: string, year: string) {
      const dobDate = selectors[brand].dobDate;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDate).select(day);
      cy.get(dobMonth).select(month);
      cy.get(dobYear).select(year);
      cy.get(dobYear).blur();
    },
    selectCreditCard(cardNo: string, cardOwner: string, date: string, code: string) {
      const paymentMethodCreditCard = selectors[brand].paymentMethodCreditCard;
      const creditCardCardNumberIframe = selectors[brand].creditCardCardNumberIframe;
      const creditCardFieldsCardNumber = selectors[brand].creditCardFieldsCardNumber;
      const creditCardExpirationDateIframe = selectors[brand].creditCardExpirationDateIframe;
      const creditCardFieldsExpirationDate = selectors[brand].creditCardFieldsExpirationDate;
      const creditCardSecurityCodeIframe = selectors[brand].creditCardSecurityCodeIframe;
      const creditCardFieldsSecurityCode = selectors[brand].creditCardFieldsSecurityCode;
      const creditCardFieldsCardOwner = selectors[brand].creditCardFieldsCardOwner;
      const paymentMethodCreditCardUS = selectors[brand].paymentMethodCreditCardUS;
      const creditCardFieldsCardNumberUS = selectors[brand].creditCardFieldsCardNumberUS;
      const creditCardFieldsCardOwnerUS = selectors[brand].creditCardFieldsCardOwnerUS;
      const creditCardFieldsExpirationDateUS = selectors[brand].creditCardFieldsExpirationDateUS;
      const creditCardFieldsExpirationMonthUS = selectors[brand].creditCardFieldsExpirationMonthUS;
      const creditCardFieldsSecurityCodeUS = selectors[brand].creditCardFieldsSecurityCodeUS;
      const paynowBtnCCUS = selectors[brand].paynowBtnCCUS;

      const paynowBtnCC = selectors[brand].paynowBtnCC;
      const clickAddNewCard = selectors[brand].clickAddNewCard;
      if (brand != 'boohooman.com' && locale != 'US' && locale != 'CA') {
        cy.get(paymentMethodCreditCard).click({ force: true });
      } else if ((brand == 'karenmillen.com' || brand == 'boohoo.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA')) {
        cy.get(paymentMethodCreditCardUS).click({ force: true });
      }
      cy.wait(4000);

      cy.get('body').then($body => { // (Updated) If there is saved Credit Card, click Add new Card button
        if ($body.find(clickAddNewCard).length > 0) {
          cy.get(clickAddNewCard).click();
        }
      });
      if (locale == 'CA' || locale == 'US') {
        cy.get(creditCardFieldsCardNumberUS).type(cardNo);
        cy.get(creditCardFieldsCardOwnerUS).type(cardOwner);
        if ((brand == 'karenmillen.com') && locale == 'US') {
          cy.get(creditCardFieldsExpirationDateUS).type(date, { force: true });
        } else {
          cy.get(creditCardFieldsExpirationMonthUS).select('03');
          cy.get(creditCardFieldsExpirationDateUS).select('2030');
        }
        cy.get(creditCardFieldsSecurityCodeUS).type(code, { force: true });
        cy.get(paynowBtnCCUS).click({ force: true });
      } else {
        cy.iframe(creditCardCardNumberIframe).find(creditCardFieldsCardNumber).type(cardNo, { force: true });
        cy.iframe(creditCardExpirationDateIframe).find(creditCardFieldsExpirationDate).type(date, { force: true });
        cy.iframe(creditCardSecurityCodeIframe).find(creditCardFieldsSecurityCode).type(code, { force: true });
        cy.get(creditCardFieldsCardOwner).type(cardOwner, { force: true });
        cy.get(paynowBtnCC).click({ force: true });
      }

    },
    emptyEmailField() {
      const emptyEmailField = selectors[brand].emptyEmailField;
      cy.get(emptyEmailField).clear();
    },
    addNewAddress() {
      const addNewAddressBtn = selectors[brand].addNewAddressBtn;
      const addNewAddressField = selectors[brand].addNewAddressField;
      if (brand == 'boohoo.com') {
        cy.get(addNewAddressBtn).eq(0).click({ force: true });
      } else if (brand == 'nastygal.com') {
        cy.get(addNewAddressField).click({ force: true });
      }
    },
    enterManuallyAddressDetails() {
      const enterManually = selectors[brand].enterManually;
      if (!isSiteGenesisBrand) {
        cy.get(enterManually).click({ force: true });
      }
    },
    billingFirstNameField(firstName: string) {
      const billingAddressFirstName = selectors[brand].billingAddressFirstName;
      cy.get(billingAddressFirstName).clear().type(firstName);
    },
    billingLastNameField(lastName: string) {
      const billingAddressLastName = selectors[brand].billingAddressLastName;
      cy.get(billingAddressLastName).clear().type(lastName);
    },
    billingEmailField(email: string) { // Only for boohooman
      const emailField = selectors[brand].emailField;
      cy.get(emailField).clear().type(email);
    },
    billingConfirmEmailField(email: string) { // Only for boohooman
      const confirmEmailField = selectors[brand].confirmEmailField;
      cy.get(confirmEmailField).clear().type(email);
    },
    addBillingAddressGuestUser(line1: string, city: string, state: string, county: string, postcode: string) {
      const billingAddressFieldsStateCode = selectors[brand].billingAddressFieldsStateCode;
      this.enterManuallyAddressDetails();
      const billingAddressFieldsAddress1 = selectors[brand].billingAddressFieldsAddress1;
      const billingAddressFieldCity = selectors[brand].billingAddressFieldCity;
      const billingPostCode = selectors[brand].billingPostCode;
      const postCodeBoohooAU = '#dwfrm_billing_addressFields_postalCode';
      cy.get(billingAddressFieldsAddress1).clear().type(line1)
        .get(billingAddressFieldCity).clear({ force: true }).type(city);
      if (!isSiteGenesisBrand) {
        if (locale == 'AU' || locale == 'IE' || locale == 'US' || locale == 'CA') {
          cy.get(billingAddressFieldsStateCode).select(county);
        } else {
          cy.get(billingAddressFieldsStateCode).clear().type(state);
        }
      }
      if (brand == 'boohoo.com' && locale == 'AU') {
        cy.get(postCodeBoohooAU).clear().type(postcode);
      } else {
        cy.get(billingPostCode).clear().type(postcode);
      }

    },
    addBillingAddressRegisteredUser(localeAddress: AddressData) {
      const billingAddressFieldsAddress1 = selectors[brand].billingAddressFieldsAddress1;
      const billingAddressFieldCity = selectors[brand].billingAddressFieldCity;
      const billingPostCode = selectors[brand].billingPostCode;
      const boohooMenaState = '#dwfrm_billing_billingAddress_addressFields_states_state';
      const boohooMenaPhoneCode = '#dwfrm_phonedetails_phonecode';
      const boohooMenaPhoneNumber = '#dwfrm_phonedetails_phonenumber';
      const boohooAUPostCode = '#dwfrm_billing_addressFields_postalCode';

      this.enterManuallyAddressDetails();
      cy.get(billingAddressFieldsAddress1).clear().type(localeAddress.addressLine);
      cy.get(billingAddressFieldCity).clear().type(localeAddress.city);

      if (brand == 'boohoo.com' && locale == 'AU') {
        cy.get(boohooAUPostCode).clear().type(localeAddress.postcode);
      } else {
        cy.get(billingPostCode).clear().type(localeAddress.postcode);
      }

    },
    addPromoCode(promo: string) {
      const couponCode = selectors[brand].couponCode;
      const promoButton = selectors[brand].promoButton;
      cy.get(couponCode).type(promo);
      cy.get(promoButton).click();
    },

    addNoPromoCode() {
      const promoButton = selectors[brand].promoButton;
      cy.get(promoButton).click();
    },
    addGiftCard(giftCertificate: string) {

      const addGiftCertificate = selectors[brand].addGiftCertificate;
      const giftCertCode = selectors[brand].giftCertCode;
      const addGiftCert = selectors[brand].addGiftCert;

      cy.get(addGiftCertificate).click();
      cy.get(giftCertCode).should('be.visible').type(giftCertificate);
      cy.get(addGiftCert).click();

    },

    removeGiftCertificate() {
      const removeCertificate = selectors[brand].removeCertificate;
      const giftcardApplied = selectors[brand].giftcardApplied;
      cy.get(giftcardApplied).should('be.visible').then(() => {
        cy.get(removeCertificate).click({ force: true });
      });
    },

    selectAddressFromBook() {
      const viewAllBillingAddresses = selectors[brand].viewAllBillingAddresses;
      const billingAddressFromBook = selectors[brand].billingAddressFromBook;
      const billingAddressFromBookUS = selectors[brand].billingAddressFromBookUS;
      const billingAddressFromBookAU = selectors[brand].billingAddressFromBookAU;

      (brand == 'boohoo.com' && locale == 'AU')
        ? cy.get(billingAddressFromBookAU).click({ force: true })
        : brand == 'boohooman.com'
          ? cy.get(viewAllBillingAddresses).select(2)
          : (brand == 'nastygal.com' && locale == 'US')
            ? cy.get(billingAddressFromBookUS).click({ force: true })
            : cy.get(billingAddressFromBook).click({ force: true });
    },

    selectKlarnaBoohooNl() { // SelectKlarnaNew is created for BOOHOO/NL
      const paymentMethodKlarnaNl = selectors[brand].paymentMethodKlarnaNl;
      const klarnaPayNowNL = selectors[brand].klarnaPayNowNL;
      const klarnaNLFrame = selectors[brand].klarnaNLFrame;
      const klarnaNLContinueBtn = selectors[brand].klarnaNLContinueBtn;
      const klarnaPaymentsMainNL = selectors[brand].klarnaPaymentsMainNL;
      const klarnaPayLaterRadioButtonNL = selectors[brand].klarnaPayLaterRadioButtonNL;
      const klarnaIFrameVarificationCodeBoxNL = selectors[brand].klarnaIFrameVarificationCodeBoxNL;
      const klarnaIFramePurchaseReviewNL = selectors[brand].klarnaIFramePurchaseReviewNL;

      cy.get(paymentMethodKlarnaNl).click();
      cy.wait(5000);

      if (brand == 'boohooman.com' && locale == 'NL') {
        cy.enter(klarnaPaymentsMainNL).then(iframeBody => {
          cy.wait(3000);
          iframeBody().find(klarnaPayLaterRadioButtonNL).click({ force: true });
        });
      }

      // Click on PayNow.
      cy.get(klarnaPayNowNL).click();

      // Click the Continue button inside iframe and make payment
      cy.enter(klarnaNLFrame).then(iframeBody => {
        cy.wait(3000);
        iframeBody().find(klarnaNLContinueBtn).should('be.visible').click({ force: true });
        cy.wait(5000);
        iframeBody().find(klarnaIFrameVarificationCodeBoxNL).type('111111', { force: true });
        cy.wait(5000);
        iframeBody().then(() => {
          iframeBody().find(klarnaIFramePurchaseReviewNL).click();
        });
      });
    },

    selectKlarna() {
      const randomIndex = Math.floor(Math.random() * card.getLength());
      const klarnaPaymentButton = selectors[brand].klarnaPaymentButton;
      const klarnaPayNow = selectors[brand].klarnaPayNow;
      const klarnaContinueCTA = selectors[brand].klarnaContinueCTA;
      const klarnaContinueWithPhoneNumber = selectors[brand].klarnaContinueWithPhoneNumber;
      const klarnaIFrame = selectors[brand].klarnaIFrame;
      const klarnaIFrameContinueCTA = selectors[brand].klarnaIFrameContinueCTA;
      const klarnaIFrameOtpField = selectors[brand].klarnaIFrameOtpField;
      const klarnaIFramePayLaterRadioCTA = selectors[brand].klarnaIFramePayLaterRadioCTA;
      const klarnaIFrameSelectPaymentCatCTA = selectors[brand].klarnaIFrameSelectPaymentCatCTA;
      const klarnaIFramePickupPlanPopup = selectors[brand].klarnaIFramePickupPlanPopup;
      const klarnaIFrameSkipAndContinueCTA = selectors[brand].klarnaIFrameSkipAndContinueCTA;
      const klarnaIFrameFasterCheckoutPopup = selectors[brand].klarnaIFrameFasterCheckoutPopup;
      const primaryAddress = addresses.getAddressByLocale(locale, 'primaryAddress');
      const randomCard = card.getCard(randomIndex);
      const email = faker.internet.email();
      const firstName = faker.person.firstName();
      const lastname = faker.person.lastName();
      const klarnaPhone = selectors[brand].klarnaPhone;
      const klarnaEmail = selectors[brand].klarnaEmail;
      const klarnaDoB = selectors[brand].klarnaDoB;
      const klarnaFirstName = selectors[brand].klarnaFirstName;
      const klarnaLastName = selectors[brand].klarnaLastName;
      const klarnaAddress = selectors[brand].klarnaAddress;
      const klarnaEnterManuallyButton = selectors[brand].klarnaEnterManuallyButton;
      const klarnaPostcode = selectors[brand].klarnaPostcode;
      const klarnaSuggestionButton = selectors[brand].klarnaSuggestionButton;
      const klarnaCreateAccount = selectors[brand].klarnaCreateAccount;
      const klarnaCartNumber = selectors[brand].klarnaCartNumber;
      const klarnaExpire = selectors[brand].klarnaExpire;
      const klarnaCVC = selectors[brand].klarnaCVC;
      const klarnaAddCardBtn = selectors[brand].klarnaAddCardBtn;
      const klarnaBankId = selectors[brand].klarnaBankId;


      cy.get(klarnaPaymentButton).click({ force: true });
      cy.wait(5000);

      // Stub the open method with just a console log to force it not to open a window.
      cy.window().then((window: Cypress.AUTWindow) => {
        cy.stub(window, 'open').callsFake(() => {
          console.log('stop this button click');
        });
      });

      // Click on PayNow.
      cy.get(klarnaPayNow).click({ force: true });
      cy.wait(5000);

      // Click the Continue button.
      cy.get(klarnaContinueCTA).click({ force: true });


      // Get the new Klarna iframe.
      cy.frameLoaded(klarnaIFrame);

      // Digsusting implicit wait.
      cy.wait(12000);

      // Complete the Klarna iframe journey.
      cy.enter(klarnaIFrame, { timeout: 20000 }).then(body => {
        body().then($body => { // if Klarna Continue with Phone doesnt appear
          if ($body.find(klarnaContinueWithPhoneNumber).length > 0) {
            body().find(klarnaContinueWithPhoneNumber).click({ force: true })
            cy.wait(5000);
          }
        });

        body().then($body => {
          if ($body.find(klarnaPhone).length > 0) { // If Klarna Email appears
            body().find(klarnaPhone).clear().type(primaryAddress.phone, { force: true });
            cy.wait(1000);
            body().find(klarnaIFrameContinueCTA).click({ force: true });
            cy.wait(7000);
          }
        });

        body().then($body => {
          if ($body.find(klarnaIFrameOtpField).length > 0) { // If Klarna 6 digit code appears
            body().find(klarnaIFrameOtpField).type('123456', { force: true });
            cy.wait(10000);
          }
        });

        body().then($body => {
          if ($body.find(klarnaBankId).length > 0) { // If Klarna Bank ID appears
            body().find(klarnaBankId).click({ force: true });
            cy.wait(5000);
          }
        });

        body().then($body => {
          if ($body.find(klarnaEmail).length > 0) { // If Klarna Email appears
            body().find(klarnaEmail).clear().type(email, { force: true });
            cy.wait(1000);
            body().find(klarnaIFrameContinueCTA).click({ force: true });
            cy.wait(7000);
          }
        });


        body().then($body => {
          if ($body.find(klarnaFirstName).length > 0) {  // If Klarna Create Account pop-up appears
            body().find(klarnaDoB).clear().type('17081993');
            cy.wait(1000);
            body().find(klarnaFirstName).clear().type(firstName);
            cy.wait(1000);
            body().find(klarnaLastName).clear().type(lastname);
            cy.wait(1000);
            body().find(klarnaEnterManuallyButton).click({ force: true });
            cy.wait(1000);
            body().find(klarnaAddress).clear().type(primaryAddress.addressLine);
            cy.wait(1000);
            body().find(klarnaPostcode).clear().type(primaryAddress.postcode);
            cy.wait(1000);
            body().find(klarnaSuggestionButton).click({ force: true });
            cy.wait(1000);
            body().find(klarnaCreateAccount).click({ force: true });
            cy.wait(1000);
          }
        });

        body().then($body => {
          if ($body.find(klarnaIFrameContinueCTA).length > 0) { // If Welcome to Klarna pop-up appears
            body().find(klarnaIFrameContinueCTA).click({ force: true });
            cy.wait(1000);
          }
        });

        body().then($body => {
          if ($body.find(klarnaIFramePayLaterRadioCTA).length > 0) { //  // If Payment options popup exists select Pay now
            body().find(klarnaIFramePayLaterRadioCTA).click({ force: true });
            body().find(klarnaIFrameSelectPaymentCatCTA).click({ force: true });
            cy.wait(1000);
          }
        });

        body().then($body => {
          if ($body.find(klarnaIFramePickupPlanPopup).length > 0) { // If Klarna Payment Type appears
            body().find(klarnaIFramePickupPlanPopup).click({ force: true });
            cy.wait(1000);
          }
        });

        body().then($body => {
          if ($body.find(klarnaCartNumber).length > 0) { // If Cart Details Pop-up appears
            body().find(klarnaCartNumber).type(randomCard.cardNo);
            cy.wait(1000);
            body().find(klarnaExpire).type(randomCard.date);
            cy.wait(1000);
            body().find(klarnaCVC).type(randomCard.code);
            cy.wait(1000);
            body().find(klarnaAddCardBtn).click({ force: true });
            cy.wait(4000);
          }
        });

        cy.iframe(klarnaIFrame).then($iframe => {
          if ($iframe.find("[data-testid='select-payment-category']").length > 0) { // If Klarna 6 digit code appears
            $iframe.find("[data-testid='select-payment-category']").click();
            cy.wait(5000);
          }
        });

        cy.iframe(klarnaIFrame).then(($iframe) => {
          if ($iframe.find(klarnaIFrameSelectPaymentCatCTA).length > 0) {
            $iframe.find(klarnaIFrameSelectPaymentCatCTA).click();
          }
          cy.wait(5000);
        })

        cy.iframe(klarnaIFrame).then(($iframe) => {
          if ($iframe.find(klarnaIFramePickupPlanPopup).length > 0) {
            $iframe.find(klarnaIFramePickupPlanPopup).click();
          }
          cy.wait(5000);
        })

        const payButtonLocator = selectors[brand].payButtonLocator;
        const payButtonLocatorIE = selectors[brand].payButtonLocatorIE;

        if (brand == 'nastygal.com' && locale == 'IE') {
          cy.iframe(klarnaIFrame).then(($iframe) => {
            $iframe.find(payButtonLocatorIE).click();
            cy.wait(5000);
          })
        } else {
          cy.iframe(klarnaIFrame).then(($iframe) => {
            $iframe.find(payButtonLocator).click();
            cy.wait(5000);
          })
        }

        body().then($body => {
          if ($body.find(klarnaIFrameSkipAndContinueCTA).length) { // If 'Skip and continue' button exists
            $body.find(klarnaIFrameSkipAndContinueCTA).click();
            cy.wait(2000);
          }
        });

        body().then($body => {
          if ($body.find(klarnaIFrameFasterCheckoutPopup).length) { // If 'Faster checkout' popup exists
            $body.find(klarnaIFrameFasterCheckoutPopup).trigger('click');
            cy.wait(5000);
          }
        });

        body().then($body => {  //for SE bank code
          if ($body.find('#USER_PIN').length > 0) {
            body().find('#USER_PIN').type('1111');
          }
        })

      });

    },

    // TODO : Didn't create locator obj because it's failling due to stub
    selectPayPal() {
      const paymentMethodPayPal = selectors[brand].paymentMethodPayPal;
      cy.get(paymentMethodPayPal).click();
      cy.wait(2000);

      // Stub the open method inside iframe to force it not to open a window.
      cy.get('.zoid-component-frame').its('0.contentDocument.defaultView').then(win => {
        cy.stub(win, 'open');
      });

      // Click PayPal button
      cy.iframe('.zoid-component-frame').find('.paypal-button').eq(0).should('be.visible').click({ force: true });

      // Wait for PayPal window to load
      cy.wait(8000);

      // Get first iframe, inside its body get inner iframe and then find button
      cy.get('.paypal-checkout-sandbox-iframe').then((iframe) => {
        const innerIframe = iframe.contents().find('.zoid-component-frame').contents();

        // If accept cookies button appears
        cy.wrap(innerIframe).then($body => {
          if ($body.find('#acceptAllButton').length) {
            cy.wrap(innerIframe).find('#acceptAllButton').click();
          }
        });

        // If Login form appears
        cy.wrap(innerIframe).then($body => {
          if ($body.find('#email').length) {
            cy.wrap(innerIframe).find('#email').clear().type('test.user@boohoo.com');
            cy.wrap(innerIframe).find('#btnNext').click();
            cy.wrap(innerIframe).find('#password').type('boohoo123');
            cy.wrap(innerIframe).find('#btnLogin').click();
          }
        });
      });

      cy.wait(12000);

      // New iframe opens after PayPal user logs in
      cy.get('.paypal-checkout-sandbox-iframe').then((iframe) => {
        const innerIframe = iframe.contents().find('.zoid-component-frame').contents();
        cy.wrap(innerIframe).find('#payment-submit-btn').click({ force: true });

      });
    },

    selectClearpay() {
      const siteGenesisClearPay = '[for="is-CLEARPAY"]';
      const siteGenesisClearPayButton = '#billingSubmitButton';
      const blpClearPay = '#payment-button-CLEARPAY';
      const blpClearPayButton = '#payment-details-CLEARPAY button[type="submit"]';
      const clearPaySummeryButton = selectors[brand].clearPaySummeryButton;
      const clearPayIdInput = selectors[brand].clearPayIdInput;
      const clearPayIdCTA = selectors[brand].clearPayIdCTA;
      const clearPayPasswordInput = selectors[brand].clearPayPasswordInput;
      const clearPayPasswordCTA = selectors[brand].clearPayPasswordCTA;
      const mailMap = afterPayClearPayCredentails.mailMap[brand][locale];

      if (isSiteGenesisBrand) {
        cy.get(siteGenesisClearPay, { timeout: 15000 }).click({ force: true });
        cy.get(siteGenesisClearPayButton).click({ force: true });
      } else {
        cy.get(blpClearPay).click({ force: true });
        cy.get(blpClearPayButton, { timeout: 20000 }).click();
      }

      cy.get('body', { timeout: 20000 }).then($body => {
        if ($body.find(clearPaySummeryButton).length > 0) {
          cy.get(clearPaySummeryButton).click();
        }
      });

      cy.wait(5000);
      cy.get(clearPayIdInput, { timeout: 30000 }).clear();
      cy.wait(5000);
      cy.get(clearPayIdInput, { timeout: 30000 }).type(mailMap.username);
      cy.get(clearPayIdCTA, { timeout: 30000 }).click();
      cy.get(clearPayPasswordInput, { timeout: 30000 }).type(mailMap.password);
      cy.get(clearPayPasswordCTA, { timeout: 30000 }).click();
      cy.get(clearPaySummeryButton, { timeout: 30000 }).click();
    },

    selectAfterPay() {
      const paymentMethodAfterPay = selectors[brand].paymentMethodAfterPay;
      const payNowbuttonAfterPay = selectors[brand].payNowbuttonAfterPay;
      const backToLoginButton = selectors[brand].backToLoginButton;
      const usernameInputAfterPay = selectors[brand].usernameInputAfterPay;
      const continueButtonAfterPayUsername = selectors[brand].continueButtonAfterPayUsername;
      const passwordInputAfterPay = selectors[brand].passwordInputAfterPay;
      const continueButtonAfterPayPassword = selectors[brand].continueButtonAfterPayPassword;
      const confirmButtonAfterPay = selectors[brand].confirmButtonAfterPay;
      const mailMap = afterPayClearPayCredentails.mailMap[brand][locale];

      cy.get(paymentMethodAfterPay, { timeout: 15000 }).click({ force: true });
      cy.get(payNowbuttonAfterPay).click({ force: true });
      cy.wait(5000);
      cy.get('body').then(body => {
        if (body.find(backToLoginButton).length > 0) {
          cy.get(backToLoginButton).eq(0).click({ force: true });
        }
      });
      cy.get(usernameInputAfterPay, { timeout: 30000 }).clear();
      cy.wait(5000);
      cy.get(usernameInputAfterPay, { timeout: 30000 }).type(mailMap.username);
      cy.get(continueButtonAfterPayUsername, { timeout: 30000 }).click();
      cy.get(passwordInputAfterPay, { timeout: 30000 }).type(mailMap.password);
      cy.get(continueButtonAfterPayPassword, { timeout: 30000 }).click();
      cy.get(confirmButtonAfterPay, { timeout: 30000 }).click();

    },

    selectiDEALBoohooNL() {
      const iDEALSelectionButton = selectors[brand].iDEALSelectionButton;
      const iDEALBankSelection = selectors[brand].iDEALBankSelection;
      const iDEALPaymentButton = selectors[brand].iDEALPaymentButton;
      const iDEALAuthoriseButton = selectors[brand].iDEALAuthoriseButton;

      cy.get(iDEALSelectionButton).click({ force: true });
      cy.get(iDEALBankSelection).select('ING');
      cy.get(iDEALPaymentButton).click({ force: true });
      cy.wait(5000);
      cy.get(iDEALAuthoriseButton).click({ force: true });
    },

    selectSofortBoohooDe() {

      const sofortSelectionButton = selectors[brand].sofortSelectionButton;
      const sofortPaymentButton = selectors[brand].sofortPaymentButton;
      const sofortPaymentOutcomeSelection = selectors[brand].sofortPaymentOutcomeSelection;
      const sofortContinueButton = selectors[brand].sofortContinueButton;

      cy.get(sofortSelectionButton).click({ force: true });
      cy.get(sofortPaymentButton).click({ force: true });
      cy.wait(5000);
      cy.get(sofortPaymentOutcomeSelection).select('Authorised');
      cy.get(sofortContinueButton).click({ force: true });
    },

    selectPriceBetween35and150() {
      const summaryTotalValue = selectors[brand].summaryTotalValue;
      cy.get(summaryTotalValue).invoke('text').then(textContent => {
        cy.log(textContent);
        const summaryTotal = parseInt(textContent.replace("$", ""));
        if (!(35 <= summaryTotal && summaryTotal <= 150)) {
          cartPage.goto();
          cy.wait(10000);
          switch (true) {
            case (summaryTotal <= 5):
              cartPage.actions.editCartQuantity('7');
              break;
            case (5 < summaryTotal && summaryTotal < 35):
              cartPage.actions.editCartQuantity('4');
              break;
            case (summaryTotal > 150):
              cartPage.actions.editCartQuantity('1')
          }
          cy.wait(5000);
          cartPage.click.proceedToCheckoutCart();
          cy.wait(12000);
          if (brand == 'nastygal.com' && locale == 'US') {
            cy.fixture('users').then((credentials: LoginCredentials) => {
              cy.wrap(credentials.guest).as('guestEmail');
              checkoutLoginPage.click.continueAsGuestBtn();
            });
            cy.wait(7000);
            shippingPage.click.proceedToBilling();
          }
        }
      })
    },
  };

  assertions = {
    assertShippingAddressPresent() {
      const shippingAddressSection = selectors[brand].shippingAddressSection;
      cy.get(shippingAddressSection).should('be.visible').and('not.be.empty');
    },
    assertGiftCardAdded() {
      const giftcardApplied = selectors[brand].giftcardApplied;
      cy.get(giftcardApplied).should('be.visible');
    },
    assertGiftCardinOrderSummary() {
      const giftcartOrderSummary = selectors[brand].giftcartOrderSummary;
      const giftCard = assertionText.giftCard[language];
      cy.get(giftcartOrderSummary).then($orderGiftCard => {
        const orderGiftCard: any = $orderGiftCard;
        cy.get(orderGiftCard).invoke('text').should('contain', giftCard);
      });
    },
    assertGiftCardRemoved() {
      const giftcartOrderSummary = selectors[brand].giftcartOrderSummary;
      const giftCard: string = assertionText.giftCard[language];
      cy.get(giftcartOrderSummary).then($orderGiftCard => {
        const orderGiftCard: any = $orderGiftCard;
        cy.get(orderGiftCard).invoke('text').should('not.contain', giftCard);
      });
    },
    assertGiftCardError() {
      const errorMessage = selectors[brand].giftCardErrorMessage;
      if (brand == 'karenmillen.com' || brand == 'boohooman.com') {
        const giftCardInvalidErrorMessage: string = assertionText.giftCardInvalidErrorMessageKM[language];
        cy.get(errorMessage).invoke('show').should('contain.text', giftCardInvalidErrorMessage);
      } else {
        const giftCardInvalidErrorMessage: string = assertionText.giftCardInvalidErrorMessage[language];
        cy.get(errorMessage).invoke('show').should('contain.text', giftCardInvalidErrorMessage);
      }

    },
    assertGiftCardEmptyError() {
      const errorMessage = selectors[brand].giftCardEmptyError;
      const giftCardInvalidErrorMessage = assertionText.giftCardEmptydErrorMessage[language];
      cy.get(errorMessage).should('be.visible').should('contain', giftCardInvalidErrorMessage);
    },
    assertInvalidPromoError() {
      const promoErrorAlert = selectors[brand].promoErrorAlert;
      const promoInvalidErrorMessage = assertionText.promoInvalidErrorMessage[language];
      cy.get(promoErrorAlert).should('have.text', promoInvalidErrorMessage, { matchCase: false });
    },
    assertEmptyPromoError() {
      const promoErrorAlert = selectors[brand].promoErrorAlert;
      const promoEmptydErrorMessage = assertionText.promoEmptydErrorMessage[language];
      cy.get(promoErrorAlert).should('have.text', promoEmptydErrorMessage, { matchCase: false });
    },
    assertNewShippingAddress(addressLine: string, city: string, postCode: string, country: string) {
      const shippingAddressSection = selectors[brand].shippingAddressSection;
      cy.get(shippingAddressSection).should('contain.text', addressLine)
        .and('contain.text', city)
        .and('contain.text', postCode)
        .and('contain.text', country);
    },
    assertShippingMethodPresent(shippingMethod: string) {
      const shippingMethodSelector = selectors[brand].shippingMethodSelector;
      cy.get(shippingMethodSelector).should('be.visible').and('include.text', shippingMethod.trim());
    },

    assertEmailIsCorrect(email: string) {
      const billingInfoEmailBox = selectors[brand].billingInfoEmailBox;
      cy.get(billingInfoEmailBox).should('have.value', email);
    },

    // TODO : This function is un-used but keep it commented just for investigation and future use if we can.
    // AssertSubscriptionBlockPresent() {
    //   Cy.get('div[class="b-create_account_form-subscription"]').should('be.visible');
    // },
    assertDateFormIsPresent() {
      const dobForm = selectors[brand].dobForm;
      cy.get(dobForm).should('be.visible');
    },
    assertDateIsSelected(day: string, month: string, year: string) {
      const dobDate = selectors[brand].dobDate;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDate).should('have.value', day);
      cy.get(dobMonth).should('have.value', month);
      cy.get(dobYear).should('have.value', year);
    },
    assertEmptyEmailFieldError(errorMsg: string) {
      const emptyEmailFiledError = selectors[brand].emptyEmailFiledError;
      cy.get(emptyEmailFiledError).should('be.visible').and('contain.text', errorMsg);
    },
    assertEmptyDateFieldError(errorMsg: string) {
      const dateError = selectors[brand].dateError;
      cy.get(dateError).should('be.visible').and('contain.text', errorMsg);
    },
    assertSameAsShippingIsChecked() {
      const shippingCheckbox = selectors[brand].shippingCheckbox;
      if (isSiteGenesisBrand) {
        cy.get(shippingCheckbox).should('have.class', 'is-checked');
      } else {
        cy.get(shippingCheckbox).should('be.checked');
      }
    },
    assertBillingAddressFormIsPresent() {
      const billingForm = selectors[brand].billingForm;
      cy.get(billingForm).should('be.visible');
    },
    assertNewBillingAddress(address: string) {
      const newBillingAddressForm = selectors[brand].newBillingAddressForm;
      cy.get(newBillingAddressForm).should('be.visible').and('include.text', address);
    },
    assertPaymentMethodCreditCardIsDisplayed() {
      const paymentMethodCreditCard = selectors[brand].paymentMethodCreditCard;
      const paymentMethodCreditCardUS = selectors[brand].paymentMethodCreditCardUS;
      if ((brand == 'boohoo.com' || brand == 'karenmillen.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA')) {
        cy.get(paymentMethodCreditCardUS).should('be.visible');
      } else {
        cy.get(paymentMethodCreditCard).should('be.visible');
      }
    },

    assertPaymentMethodGooglePayIsDisplayed() {
      const paymentMethodGooglePay = selectors[brand].paymentMethodGooglePay;
      cy.get(paymentMethodGooglePay).should('be.visible');
    },
    assertPaymentMethodPayPalIsDisplayed() {
      const paymentMethodPayPal = selectors[brand].paymentMethodPayPal;
      cy.get(paymentMethodPayPal).should('be.visible');
    },

    assertPaymentMethodKlarnaIsDisplayed() {
      if (isSiteGenesisBrand) {
        cy.get(`label[for="is-Klarna${locale}"]`).should('be.visible');
      } else {
        cy.get(`#payment-button-Klarna${locale}`).should('be.visible');
      }
    },

    assertPaymentMethodClearPayIsDisplayed() {
      const paymentMethodClearPay = selectors[brand].paymentMethodClearPay;
      if (locale == 'UK') {
        cy.get(paymentMethodClearPay).should('be.visible');
      } else {
        this.skip();
      }
    },

    assertPaymentMethodAfterPayIsDisplayed() {
      const paymentMethodAfterPay = selectors[brand].paymentMethodAfterPay;
      cy.get(paymentMethodAfterPay).should('be.visible');
    },

    assertShippingPageIsOpened() {
      cy.url().should('include', 'shipping');
    },
    assertOrderConfirmationPageIsDisplayed() {
      const isCheckoutConfirmationBrandAndLocale: boolean = (isSiteGenesisBrand && brand != 'karenmillen.com') && (brand != 'boohooman.com') && (locale == 'UK' || locale == 'NL' || locale == 'IE' || locale == 'AU' || locale == 'DE');
      const isOrderConfirmationBrandAndLocale: boolean = ((brand == 'boohoo.com' || brand == 'nastygal.com') && (locale == 'UK' || locale == 'US' || locale == 'IE'));
      const isOrderConfirmBrandAndLocale: boolean = (brand == 'boohoo.com' && (locale == 'IE' || locale == 'EU' || locale == 'US' || locale == 'CA' || locale == 'AU' || locale == 'NZ' || locale == 'NL' || locale == 'NO' ||locale == 'FR' || locale == 'DK' ||locale == 'SE' ||locale == 'DE' || locale == 'ES' || locale == 'FI'));

      if (isCheckoutConfirmationBrandAndLocale) {
        cy.url({ timeout: 30000 }).should('include', 'checkout-confirmation');
      } else if (isOrderConfirmBrandAndLocale) {
        cy.url({ timeout: 30000 }).should('include', 'Order-Confirm')
      } else if (isOrderConfirmationBrandAndLocale) {
        cy.url({ timeout: 30000 }).should('include', 'order-confirmation')
      } else if (brand == 'boohooman.com') {
        cy.url({ timeout: 30000 }).should('include', 'success');
      } else {
        cy.url({ timeout: 30000 }).should('include', 'confirmation')
      }
    },
    assertEmailFieldCantBeChanged() {
      const email = selectors[brand].email;
      cy.get(email).should('have.attr', 'disabled');
    },

    // METHODS ONLY FOR SITE GENESIS BRANDS //
    assertPromoCodeFieldIsDisplayed() {
      const promoCodeField = selectors[brand].promoCodeField;
      cy.get(promoCodeField).should('be.visible');
    },
  };
}

export default new BillingPage();

