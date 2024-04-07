import { isSiteGenesisBrand, isMobileDeviceUsed } from 'cypress/helpers/common';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import { brand, locale, language } from 'cypress/support/e2e';
import assertionText from 'cypress/helpers/assertionText';
import billingPage from './billing.page';
import addresses from 'cypress/helpers/addresses';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel .m-with_actions [type]',
    premierFindOutMore: '.b-icon_chevron',
    premierMoreInfoSection: '#ngvip-details',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button.b-button.m-info',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    guestEditAddress: '.b-option_switch-label_surface > .b-button',
    editCartShipping: '.b-summary_order-header > .b-link',
    editCart: '[data-tau="cart_product_edit"]',
    editQuantity: '[data-tau="cart_product_quantity"]',
    updateCart: '.b-product_update-button_update',
    checkoutCart: '[data-tau="start_checkout_bottom"]:eq(0)',
    couponCode: '#dwfrm_coupon_couponCode',
    promoButton: 'button[type="submit"].b-form-inline_button',
    promoErrorAlert: '#dwfrm_coupon_couponCode-error',
    addAddressManually: '#deliveryTabs .b-address_lookup button.b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '.b-address_selector-button',
    newAddedAddressBlock: '#deliveryPanel [data-ref="summarizedAddressBlock"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#LoqateAutocomplete',
    addressEnterManualyBtn: '[data-event-click="handleManualEnterClick"]',
    cartContainer: '[data-id="checkoutProducts"]',
    orderSummaryOnShippingPage: '.b-summary_order-item[data-tau="summary"]',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Field: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Field: '[id$=addressFields_address2][id*="shipping"]',
    cityField: '[id$=addressFields_city][id*="shipping"]',
    countyField: '[id$=addressFields_states_stateCode][id*="shipping"]',
    postCodeField: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    shippingMethodName: '[data-option-id="shippingMethod-UKNextDayDelivery"]',
    standardShippingMethod: '[data-option-id="shippingMethod-UKSuperSaver"]',
    shippingMethodsNameList: '.b-shipping_method .b-option_switch-label_surface',
    allAddressDetailsAreMandatory: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    shippingState: 'select#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearOfBirth',
    clickAndCollectTab: "[data-id='button-clickCollectPanel']",
    pudoShippingMethod: "[for='shippingMethod-pudo-myhermes']",
    pudoSearchField: '.b-pudo-search_field.b-input',
    pudoFirstShop: '.b-pudo_store',
    pudoSearchTitle: '.b-pudo_store .b-pudo_store-title',
    pudoSelectShop: '.b-pudo-expanded_inner button',
    pudoSelectedShopAddress: "[data-ref='clickAndCollectAddressContainer-pudo-myhermes']",
    pudoSearchListMobile: '[data-ref="seeList"]',
    pudoFirstShopAsda: '.location-places .location-distance',
    selectParcelShopBtnAsda: '.location-places .location-distance .input-btn',
    selectParcelShopBtn: '.b-pudo-expanded button.b-pudo_store-action',
    changeCollectionAddressBtn: '[data-ref="inpostPopupLink"]',
    w3Winput: '#w3wInput',
    w3WAddressSuggestion: '[class="what3words-autosuggest-item match"]',
    successMark: "[class='what3words-autosuggest-state valid']",
    standartShipping: '[data-option-id="shippingMethod-UKSuperSaver"]',
    asdaClickAndCollect: '[data-ref="clickAndCollectAddressContainer-pudo-asda"]',
    asdaPudoShippingMethod: '[for="shippingMethod-pudo-asda"]',
    asdaPudoSearchField: '.location-textbox',
    asdaPudoFirstShop: '.location-places',
    asdaPudoSearchTitle: '[data-fid="0"] > :nth-child(2) > :nth-child(2)',
    asdaPudoSelectShop: '[data-fid="0"] > :nth-child(2) > .extended-info > ul > :nth-child(4) > .input-btn',
    asdaSelectedShopAddress: '[data-ref="clickAndCollectAddressContainer-pudo-asda"] .b-locker-address1',

  },
  'nastygal.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '[data-widget="processButtonNGVIP"]',
    premierProductTitle: 'NGVIP',
    premierFindOutMore: '.b-ngvip_accordion-button',
    premierMoreInfoSection: '.b-ngvip_accordion-content_inner',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    guestEditAddress: '.b-option_switch-label_surface > .b-button',
    editCartShipping: '.b-summary_order-header > .b-link',
    editCart: 'button[title="Edit"]',
    editQuantity: '[data-tau="cart_product_quantity"]',
    updateCart: '.b-button.b-product_update-button_update.m-small',
    checkoutCart: '.b-summary_section  .b-button.b-cart_actions-button.m-width_full',
    addAddressManually: 'button[class="b-button m-info m-width_full"]:eq(0)',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '.b-address_selector-button',
    newAddedAddressBlock: '#deliveryPanel [data-ref="summarizedAddressBlock"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#LoqateAutocomplete',
    addressEnterManualyBtn: '[data-event-click="handleManualEnterClick"]',
    cartContainer: '[data-tau="checkout_products"]',
    orderSummaryOnShippingPage: '.b-summary_order-item.m-order',
    cartContainerMobile: '.b-checkout_products',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Field: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Field: '[id$=addressFields_address2][id*="shipping"]',
    cityField: '[id$=addressFields_city][id*="shipping"]',
    countyField: '[id$=addressFields_states_stateCode][id*="shipping"]',
    postCodeField: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
    shippingMethodNameForCALocale: '[data-option-id="shippingMethod-CACadStandardDelivery"]',
    shippingMethodName: '[data-option-id="shippingMethod-NUKNextDayDelivery"]',
    standardShippingMethod: '[data-option-id="shippingMethod-NUKSuperSaver"]',
    shippingMethodsNameList: '.b-option_switch-name',
    secondShippingMethodName: '[data-option-id="shippingMethod-NUKNextDayDelivery"]',
    shippingState: 'select#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    shippingStateUS: '#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearOfBirth',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    shippingTab: '[data-id="button-deliveryPanel"]',
    clickAndCollectTab: "[data-id='button-clickCollectPanel']",
    pudoShippingMethod: "[for='shippingMethod-pudo-NUKmyhermes']",
    pudoSearchField: '.b-pudo-search_field.b-input',
    pudoFirstShop: '.b-pudo_store',
    pudoSearchTitle: '.b-pudo_store .b-pudo_store-title',
    pudoSelectShop: '.b-pudo-expanded_inner button',
    pudoSelectedShopAddress: "[data-ref='clickAndCollectAddressContainer-pudo-NUKmyhermes']",
    pudoSearchListMobile: '[data-ref="seeList"]',
    selectParcelShopBtn: '.b-pudo-expanded button.b-pudo_store-action',
    pudoFirstShopAsda: '.location-places .location-distance',
    selectParcelShopBtnAsda: '.location-places .location-distance .input-btn',
    changeCollectionAddressBtn: '[data-ref="inpostPopupLink"]',
    w3Winput: '#w3wInput',
    w3WAddressSuggestion: '[class="what3words-autosuggest-item match"]',
    successMark: "[class='what3words-autosuggest-state valid']",
    standartShipping: '[for="shippingMethod-USUsdStandardDelivery"]',
    asdaClickAndCollect: '[data-ref="clickAndCollectAddressContainer-pudo-asda"]',
    asdaPudoShippingMethod: '[for="shippingMethod-pudo-asda"]',
    asdaPudoSearchField: '.location-textbox',
    asdaPudoFirstShop: '.location-places',
    asdaPudoSearchTitle: '[data-fid="0"] > :nth-child(2) > :nth-child(2)',
    asdaPudoSelectShop: '[data-fid="0"] > :nth-child(2) > .extended-info > ul > :nth-child(4) > .input-btn',
    asdaSelectedShopAddress: '[data-ref="clickAndCollectAddressContainer-pudo-asda"] .b-locker-address1',
  },
  'boohooman.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '.premier-add-to-cart',
    addPremierToCartFromShippingPageIE: '.add-to-cart-text',
    addPremierToCartFromShippingPageMobile: '.premier-box-btn.js-premier-box-link',
    addPremierToBagMobile: '#add-to-cart',
    premierProductTitle: 'BOOHOOMAN PREMIER - UNLIMITED NEXT DAY DELIVERY + EXCLUSIVE FREE RETURNS FOR 1 YEAR',
    premierProductTitleIE: 'BOOHOOMAN PREMIER - UNLIMITED NEXT DAY DELIVERY',
    premierFindOutMore: '.premier-find-out',
    premierMoreInfoSection: '.premier-box-extra',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(2) > .address-radios-label .js-address-radios-edit',
    guestEditAddress: '.js-edit-address',
    editCartShipping: '.section-header-note',
    editCart: '.cart-cell.hidden-on-mobile.item-details > .hidden-on-mobile.item-details-action > .item-edit.item-edit-details > a > .edit-details-text.item-actions-copy',
    editQuantity: 'input[name="dwfrm_cart_shipments_i0_items_i0_quantity"]',
    updateCart: '.product-add-to-cart .add-to-cart-text',
    checkoutCart: 'button[name="dwfrm_cart_checkoutCart"]',
    addAddressManually: 'fieldset > .c-button',
    addressLine1Field: "#address1",
    addressLine2Field: '#address2',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: 'form > .btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    newAddedAddressBlock: '#deliveryPanel [data-ref="summarizedAddressBlock"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#address-autocomplete',
    addressEnterManualyBtn: '[data-event-click="handleManualEnterClick"]',
    cartContainer: '.summary-inner',
    orderSummaryOnShippingPage: '.summary-inner',
    cartContainerMobile: '.cart-row',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    shippingFname: '#firstname',
    shippingPhoneNumber: '#telend',
    shippingLname: '#lastname',
    shippingCountry: 'fieldset > :nth-child(1) > .c-select',
    shippingState: '#state',
    confirmShippingAddress: "button[class^='verification-address-button']",
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    cityField: '#city',//'#dwfrm_singleshipping_shippingAddress_addressFields_city',
    countyField: '#state',//'[name="dwfrm_singleshipping_shippingAddress_addressFields_county"]',
    postCodeField: '#postcode',//'#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    dobDay: '.c-dob__container > :nth-child(1) > .c-select',
    dobMonth: ':nth-child(2) > .c-select',
    dobYear: ':nth-child(3) > .c-select',
    orderTotal: '.order-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_city-error',
    address1DetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_address1-error',
    postcodeDetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#postcode',//'#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodName: '#shipping-method-is-express',
    standardShippingMethod: '[for="shipping-method-MUKSuperSaver"]',
    shippingMethodsNameList: '.shipping-method-name',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
    clickAndCollectTab: '.js-click-collect-tab',
    pudoShippingMethod: "[for='shipping-method-pudo-myhermes']",
    pudoSearchField: '.b-pudo-search_field.b-input',
    pudoFirstShop: '.js-shop',
    pudoSearchTitle: '.js-shop .pudo-title',
    pudoSelectShop: '.shop-expanded-inner .js-pudo-select-shop',
    pudoSelectedShopAddress: "[for='shipping-method-pudo-myhermes'] .js-pudo-address",
    selectParcelShopBtn: '.b-pudo-expanded button.b-pudo_store-action',
    pudoFirstShopAsda: '.location-places .location-distance',
    selectParcelShopBtnAsda: '.location-places .location-distance .input-btn',
    w3Winput: '#dwfrm_singleshipping_shippingAddress_addressFields_w3w',
    w3WAddressSuggestion: ':nth-child(8) > .w3w-list > :nth-child(1)',
    successMark: '.field-wrapper-w3w-valid',
    helpAndInfoLink: '.checkout-help-link'
  },
  'karenmillen.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '.premier-box-btn',
    addPremierToCartFromShippingPageMobile: '.premier-box-btn.js-premier-box-link',
    addPremierToBagMobile: '#add-to-cart',
    premierProductTitle: 'Karen Millen Premier',
    premierFindOutMore: '.premier-find-out',
    premierMoreInfoSection: '.premier-box-extra',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: '.js-edit-address',
    guestEditAddress: '.js-edit-address',
    editCartShipping: '.section-header-note',
    editCart: '.hidden-on-mobile.item-edit.item-edit-details > a > .edit-details-text.item-actions-copy',
    editQuantity: 'input[name="dwfrm_cart_shipments_i0_items_i0_quantity"]',
    updateCart: '.product-add-to-cart .add-to-cart-text',
    checkoutCart: 'button[name="dwfrm_cart_checkoutCart"]',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.js-checkout-next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    newAddedAddressBlock: '.checkout-address-form .address-summary',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#address-autocomplete',
    addressEnterManualyBtn: '[data-event-click="handleManualEnterClick"]',
    cityDetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_city-error',
    address1DetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_address1-error',
    cartContainer: '.summary-inner',
    cartContainerMobile: '.cart-row',
    orderSummaryOnShippingPage: '.summary-inner',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    secondShippingMethodName: '[id="shipping-method-is-express"]',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    shippingState: 'select#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    shippingStateUS: '#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    confirmShippingAddress: "button[class^='verification-address-button']",
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    cityField: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    countyField: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    countyFieldIE: '#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    postCodeField: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodName: '#shipping-method-is-express',
    standardShippingMethod: '.js-shipping-method-list .form-label',
    shippingMethodsNameList: '[class="shipping-method-name"]:visible',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
    shippingTab: '.js-delivery-tab',
    clickAndCollectTab: '.js-click-collect-tab',
    pudoShippingMethod: "[for='shipping-method-pudo-myhermes']",
    pudoSearchField: '.input-text.js-pudo-search-field',
    pudoFirstShop: '.js-shop',
    pudoSearchTitle: '.js-shop .pudo-title',
    pudoSearchListMobile: '[data-target="js-pudo-side"]',
    pudoSelectShop: '.shop-expanded-inner .js-pudo-select-shop',
    pudoSelectedShopAddress: "[for='shipping-method-pudo-myhermes'] .js-pudo-address",
    selectParcelShopBtn: '.shop-expanded-inner > .shop-extra-info > .shop-ctas > .js-pudo-select-shop',
    pudoFirstShopAsda: '.location-places .location-distance',
    selectParcelShopBtnAsda: '.location-places .location-distance .input-btn',
    w3Winput: '#dwfrm_singleshipping_shippingAddress_addressFields_w3w',
    w3WAddressSuggestion: ':nth-child(8) > .w3w-list > :nth-child(1) > .w3w-description',
    successMark: '.field-wrapper-w3w-valid',
    thrift: '#js-thrift-plus-product',
    addThriftToCartBtn: '#js-thrift-plus-add-to-bag',
    checkoutMiniBagSummery: '.summary-inner',
    helpAndInfoLink: '.checkout-help-link',
    deliverySection: '.js-shipping-method-list.js-cmp-inited.js-cmp-ShippingMethodModals',
    asdaClickAndCollect: '[data-ref="clickAndCollectAddressContainer-pudo-asda"]',
    asdaPudoShippingMethod: '[for="shipping-method-pudo-asda"]',
    asdaPudoSearchField: '.location-textbox',
    asdaPudoFirstShop: '.location-places',
    asdaPudoSearchTitle: '[data-fid="0"] > :nth-child(2) > :nth-child(2)',
    asdaPudoSelectShop: '[data-fid="0"] > :nth-child(2) > .extended-info > ul > :nth-child(4) > .input-btn',
    asdaSelectedShopAddress: '.pudo-asda > .form-label > .shipping-method-info > .pudo-wrapper > .pudo-address-wrapper > .js-pudo-second-address',
  },

};

class ShippingPage implements AbstractPage {

  goto(): void {
    homePage.goto();
  }

  click = {
    submitPromoCode() {
      const promoCodeBtn = selectors[brand].promoCodeBtn;
      cy.get(promoCodeBtn).click();
    },
    assertQuantityIsoneOnCart() {
      const editCartShipping = selectors[brand].editCartShipping;
      const editCart = selectors[brand].editCart;
      const editQuantity = selectors[brand].editQuantity;
      const updateCart = selectors[brand].updateCart;
      const checkoutCart = selectors[brand].checkoutCart;
      cy.get(editCartShipping).click({ force: true })
        .wait(1000);
      if (brand == 'boohoo.com' || brand == 'nastygal.com') {
        cy.get(editCart).click({ force: true })
          .wait(1000);
        cy.get(editQuantity).select('1');
        cy.get(updateCart).click({ force: true });
      } else {
        cy.get(editQuantity).clear().type('1', { force: true }).blur();
        cy.wait(1000);
      }
      cy.get(checkoutCart).click({ force: true });
    },
    addNewAddress() {
      if (!isSiteGenesisBrand) {
        const addNewAddress = selectors[brand].addNewAddress;
        cy.wait(3000);
        cy.get('body').then($body => {
          if ($body.find(addNewAddress).length) {
            cy.get(addNewAddress).click({ force: true });
          }
        });
      } else {
        this.guestEditAddress();
      }
    },
    addPremierByButtonName(text: string) {
      cy.contains(text).click({ force: true });
    },
    premierFindOutMoreLink() {
      const premierFindOutMore = selectors[brand].premierFindOutMore;
      if (brand == 'boohoo.com') {
        cy.get(premierFindOutMore).eq(0).click();
      } else {
        cy.get(premierFindOutMore).click();
      }
    },
    cancelAddingNewAddress() {
      const cancelAddingNewAddress = selectors[brand].cancelAddingNewAddress;
      cy.get(cancelAddingNewAddress);
    },
    proceedToBilling() {
      const proceedToBilling = selectors[brand].proceedToBilling;
      cy.wait(3000);
      cy.get(proceedToBilling, { timeout: 1000 }).trigger('click', { force: true });
    },
    proceedToBillingMouseOver() {
      const proceedToBilling = selectors[brand].proceedToBilling;
      cy.wait(3000);
      cy.get(proceedToBilling, { timeout: 1000 }).trigger('mouseover', { force: true }).as('proceedToBillingButton');
      cy.wait(1000);
      cy.get('@proceedToBillingButton').dblclick({ force: true });
    },
    proceedToBillingVerification() { // Only for SiteGenesis brands
      const proceedToBillingVerificationBtn = selectors[brand].proceedToBillingVerificationBtn;
      cy.wait(3000);
      cy.get('body').then($body => {
        if ($body.find(proceedToBillingVerificationBtn).length > 0) {
          cy.get(proceedToBillingVerificationBtn).click({ force: true });
          cy.wait(1000);
        }
      });
    },
    proceedToBillingVerificationAndWaitBillingPageToLoad() { // Only for SiteGenesis brands
      const proceedToBillingVerificationBtn = selectors[brand].proceedToBillingVerificationBtn;
      cy.wait(1000);
      cy.intercept(/checkoutshopper\/assets\/html/).as('paymentMethodsSection');
      cy.get(proceedToBillingVerificationBtn).click({ force: true });
      cy.wait('@paymentMethodsSection', { timeout: 20000 }).its('response.statusCode').should('eq', 200);
    },
    editSavedAddress() {
      const editSavedAddress = selectors[brand].editSavedAddress;
      cy.get(editSavedAddress).click();
    },
    addAddressManually() {
      if (brand != 'karenmillen.com') {
        const addAddressManually = selectors[brand].addAddressManually;
        cy.wait(5000);
        cy.get('body', { timeout: 10000 }).then($body => {
          if ($body.find(addAddressManually).length) {
            cy.get(addAddressManually, { timeout: 10000 }).click({ multiple: true });
          }
        });
      }
    },
    editCart() {
      const editCartShipping = selectors[brand].editCartShipping;
      cy.get(editCartShipping).click({ force: true });
    },
    editAddress() {
      if (brand != 'boohooman.com') {
        const editAddress = selectors[brand].editAddress;
        cy.get(editAddress).click({ force: true });
      }
    },
    guestEditAddress() {
      const guestEditAddress = selectors[brand].guestEditAddress;
      cy.get('body').then($body => {
        if ($body.find(guestEditAddress).length) {
          cy.get(guestEditAddress).click({ force: true });
        }
      });
    },
    addNewAddressButton() {
      if (brand != 'boohooman.com') {
        const addNewAddressButton = selectors[brand].addNewAddressButton;
        cy.get(addNewAddressButton).click({ force: true });
      }
    },
    editExistingAddressButton() {
      const editExistingAddressButton = selectors[brand].editExistingAddressButton;
      cy.get(editExistingAddressButton).click();
    },
    cancelAddingNewAddressForRegisteredUser() {
      const cancelAddingNewAddressForRegisteredUser = selectors[brand].cancelAddingNewAddressForRegisteredUser;
      cy.get(cancelAddingNewAddressForRegisteredUser).should('be.visible').click({ force: true });
    },
    viewAllAddressesLink() {
      const viewAllAddressesLink = selectors[brand].viewAllAddressesLink;
      cy.get(viewAllAddressesLink).should('be.visible').click();
    },
    addPremierToCartFromShippingPage() {
      const addPremierToCartFromShippingPage = selectors[brand].addPremierToCartFromShippingPage;
      const addPremierToCartFromShippingPageMobile = selectors[brand].addPremierToCartFromShippingPageMobile;
      if (isMobileDeviceUsed && isSiteGenesisBrand) {
        cy.get(addPremierToCartFromShippingPageMobile).click({ force: true });
      } else {
        cy.get(addPremierToCartFromShippingPage).click({ force: true });
      }

    },
    OpenPUDOlocations() {
      const PUDOlocations = selectors[brand].PUDOlocations;
      cy.get(PUDOlocations).click();
    },
    enterManuallyAddressDetails() {
      const addressEnterManualyBtn = selectors[brand].addressEnterManualyBtn;
      cy.get(addressEnterManualyBtn).eq(0).click({ force: true });
    },
    clickAndCollectShipping() {
      const clickAndCollectTab = selectors[brand].clickAndCollectTab;
      const pudoShippingMethod = selectors[brand].pudoShippingMethod;
      const changeCollectionAddressBtn = selectors[brand].changeCollectionAddressBtn;

      cy.wait(2000);
      cy.get(clickAndCollectTab).click({ force: true });
      cy.wait(3000);
      cy.get('body').then($btn => { // If radio button already checked then click on change address otherwise select address
        if ($btn.find(changeCollectionAddressBtn).length > 0) {
          cy.get(changeCollectionAddressBtn).click();
        } else {
          cy.get(pudoShippingMethod).click({ force: true });
        }
      });
    },
    asdaClickAndCollectShipping() {
      const clickAndCollectTab = selectors[brand].clickAndCollectTab;
      const asdaPudoShippingMethod = selectors[brand].asdaPudoShippingMethod;
      cy.waitUntil(() => {
        return cy.get(clickAndCollectTab, { timeout: 4000 }).eq(0).click({ force: true });
      });
      cy.waitUntil(() => {
        return cy.get(asdaPudoShippingMethod, { timeout: 3000 }).eq(0).click({ force: true });
      });
    },
    addThriftToCart() {
      const addThriftToCartBtn = selectors[brand].addThriftToCartBtn;
      cy.get(addThriftToCartBtn).click({ force: true });
    },
    helpAndInfoLink() {
      const helpAndInfoLink = selectors[brand].helpAndInfoLink;
      cy.get(helpAndInfoLink).eq(0).invoke('removeAttr', 'target').click({ force: true });
    },
    makeShippingAddressDefault() {
      const standartShipping = selectors[brand].standartShipping;
      if ((brand == 'boohoo.com' && locale == 'UK') || (brand == 'nastygal.com' && locale == 'US' || locale == 'CA')) { // To select standard shipping method for boohoo and ngal as default address
        cy.get(standartShipping).click({ force: true });
      }
    }
  };

  actions = {

    clickPreferedShippingMethod(variables: EnvironmentVariables) {
      cy.get('span').contains(variables.shippingMethod).click();
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
    addressLookupSelectFirstAddress(addressLine: string, city: string) {
      const addressLookup = selectors[brand].addressLookup;
      cy.get(addressLookup).type(addressLine);
      cy.wait(2000);
      cy.get(addressLookup).type(' ' + city);
      cy.wait(1000);
      cy.get(addressLookup).type('{enter}');
    },
    firstNameFieldClear() {
      const shippingFname = selectors[brand].shippingFname;
      cy.get(shippingFname).clear({ force: true });
    },
    firstNameField(fname: string) {
      const shippingFname = selectors[brand].shippingFname;
      cy.get(shippingFname, { timeout: 20000 }).clear({ force: true }).type(fname, { force: true });
    },
    lastNameFieldClear() {
      const shippingLname = selectors[brand].shippingLname;
      cy.get(shippingLname).clear({ force: true });
    },
    lastNameField(lname: string) {
      const shippingLname = selectors[brand].shippingLname;
      cy.get(shippingLname).clear({ force: true }).type(lname, { force: true });
    },
    countrySelector() {
      cy.get('[id$=addressFields_country][id*="shipping"]');
    },
    phoneNumberFieldClear() {
      const shippingPhoneNumber = selectors[brand].shippingPhoneNumber;
      cy.get(shippingPhoneNumber).clear({ force: true }).focus().blur();
    },
    phoneNumberField(phone: string) {
      cy.wait(1000);
      const shippingPhoneNumber = selectors[brand].shippingPhoneNumber;
      cy.get(shippingPhoneNumber).clear({ force: true }).type(phone, { force: true }).blur({ force: true });
    },
    selectCountry(country: string) { // Country cannot be changed on Shipping page for this brand
      if (locale != 'IL') {
        const shippingCountry = selectors[brand].shippingCountry;
        cy.get(shippingCountry).select(country, { force: true }).invoke('show');
      }
    },
    selectState(state: string) {
      const shippingState = selectors[brand].shippingState;
      const shippingStateUS = selectors[brand].shippingState;
      if (!isSiteGenesisBrand && (locale == 'US' || locale == 'CA' || locale == 'AU')) {
        cy.get(shippingStateUS).select(state);
      } else if ((brand != 'karenmillen.com' && locale != 'EU') && (locale != 'UK') && (brand != 'boohooman.com')) {
        cy.get(shippingState).select(state).invoke('show');
      } else if (brand == 'karenmillen.com' && (locale == 'US' || locale == 'IE' || locale == 'AU')) {
        cy.get(shippingState).select(state).invoke('show');
      } else if (brand == 'boohooman.com' && locale == 'IE') {
        cy.get(shippingState).type(state);
      }
    },

    adressLine1(address1: string) {
      const addressLine1Field = selectors[brand].addressLine1Field;
      cy.get(addressLine1Field).clear({ force: true }).type(address1);
    },
    addressLine1Clear() {
      const addressLine1Field = selectors[brand].addressLine1Field;
      cy.get(addressLine1Field).clear({ force: true });
    },
    adressLine2(address2: string) {
      const addressLine2Field = selectors[brand].addressLine2Field;
      cy.get(addressLine2Field).clear({ force: true }).type(address2);
    },
    addressLine2Clear() {
      const addressLine2Field = selectors[brand].addressLine2Field;
      cy.get(addressLine2Field).clear({ force: true });
    },
    cityFieldClear() {
      const cityField = selectors[brand].cityField;
      cy.get(cityField).clear({ force: true });
    },
    cityField(city: string) {
      const cityField = selectors[brand].cityField;
      cy.get(cityField).clear({ force: true }).type(city, { force: true });
    },
    countyField(county: string) {
      const countyField = selectors[brand].countyField;
      const countyFieldIE = selectors[brand].countyFieldIE;
      if ((brand == 'karenmillen.com') && locale == 'IE') {
        cy.get(countyFieldIE).select(county).invoke('show');
      } else if ((brand == 'boohooman.com' && (locale == 'UK' || locale == 'FR' || locale == 'IE')) || (brand == 'karenmillen.com' && locale == 'UK')) {
        cy.get(countyField).clear({ force: true }).type(county, { force: true });
      } else {
        cy.get(countyField).select(county);
      }
    },
    postcodeField(postcode: string) {
      cy.wait(1000);
      const shippingPostcode = selectors[brand].shippingPostcode;
      cy.get(shippingPostcode).clear({ force: true }).type(postcode, { force: true });
      cy.wait(1000);
      cy.get(shippingPostcode).click({ force: true }).blur({ force: true });
    },
    addAddressNickname(addressNickname: string) {
      const addressNicknameField = selectors[brand].addressNicknameField;
      cy.get(addressNicknameField).type(addressNickname);
    },
    selectShippingMethod(shippingMethod: string) {
      const standardShippingMethod = selectors[brand].standardShippingMethod;
      cy.wait(3000);
      if ((brand == 'boohoo.com' || brand == 'nastygal.com' || brand == 'boohooman.com') && locale == 'UK') {
        cy.get(standardShippingMethod).trigger('click', { force: true });
        cy.wait(1000);
      } else {
        cy.get(standardShippingMethod).contains(shippingMethod).trigger('click', { force: true });
      }
    },
    selectShippingTab() {
      const shippingTab = selectors[brand].shippingTab;
      cy.get(shippingTab, { timeout: 1000 }).click({ force: true });
    },
    selectSecondShippingMethod() {
      const shippingMethodName = selectors[brand].shippingMethodName;
      const shippingMethodNameForCALocale = selectors[brand].shippingMethodNameForCALocale;
      cy.wait(3000);
      if (brand == 'nastygal.com' && locale == 'CA') {
        cy.get(shippingMethodNameForCALocale).trigger('click', { force: true });
      } else if (brand == 'boohoo.com' || brand == 'nastygal.com') {
        cy.get(shippingMethodName).trigger('click', { force: true });
      } else {
        cy.get(shippingMethodName).click({ force: true });

      }
    },
    secondShippingMethodName(): Cypress.Chainable<string> {
      const shippingMethodsNameList = selectors[brand].shippingMethodsNameList;
      return cy.get(shippingMethodsNameList).eq(1).invoke('text').then((text) => {
        if ((brand == 'boohooman.com' && (locale == 'UK' || locale == 'IE')) || (brand == 'karenmillen.com' && locale == 'IE')) {
          return text.split('-')[0].trimEnd() as string;
        } else if (brand == 'boohooman.com' && (locale == 'US' || locale == 'FR' || locale == 'NL' || locale == 'DE')) {
          return text.split(':')[0].trimEnd() as string;
        } else {
          return text as string;
        }
      });
    },
    confirmShippingAddress() {
      const confirmShippingAddress = selectors[brand].confirmShippingAddress;
      cy.wait(5000);
      cy.get('body').then($body => {
        if ($body.find(confirmShippingAddress).length > 0) {
          cy.get(confirmShippingAddress).trigger('click'), { force: true };
        }
      });
    },

    // METHODS ONLY FOR SITE GENESIS BRANDS //
    selectDate(day: string, month: string, year: string) {
      const dobDay = selectors[brand].dobDay;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDay).select(day);
      cy.get(dobMonth).select(month);
      cy.get(dobYear).select(year, { force: true });
    },
    notSelectedDate() {
      const dobDay = selectors[brand].dobDay;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDay).select(0);
      cy.get(dobMonth).select(0);
      cy.get(dobYear).select(0).blur();
    },
    emailField(email: string) {
      const guestEmailField = selectors[brand].guestEmailField;
      cy.get(guestEmailField).clear().type(email);
    },
    confirmEmailField(email: string) {
      const confirmEmail = selectors[brand].confirmEmail;
      cy.get(confirmEmail).clear({ force: true }).type(email);
    },
    emptyEmailField() {
      const guestEmailField = selectors[brand].guestEmailField;
      cy.get(guestEmailField).clear();
    },
    selectCollectionShop(postCode: any): any {
      const pudoSearchField = selectors[brand].pudoSearchField;
      const pudoFirstShop = selectors[brand].pudoFirstShop;
      const pudoSearchTitle = selectors[brand].pudoSearchTitle;
      const pudoSelectShop = selectors[brand].pudoSelectShop;
      const pudoSearchListMobile = selectors[brand].pudoSearchListMobile;

      cy.wait(2000);
      cy.get(pudoSearchField).clear().type(postCode + '{enter}');
      cy.wait(6000);
      if (isMobileDeviceUsed) {
        cy.get(pudoSearchListMobile).click({ force: true });
      }
      cy.get(pudoFirstShop, { timeout: 20000 }).should('be.visible');
      cy.get(pudoFirstShop).eq(0).click({ force: true });
      return cy.get(pudoSearchTitle).eq(0).invoke('text').then(text => {
        cy.get(pudoSelectShop).click({ force: true }).then(() => {
          return text;
        });
      });
    },
    selectAsdaCollectionShop(postCode: any): any {
      const asdaPudoSearchField = selectors[brand].asdaPudoSearchField;
      const asdaPudoFirstShop = selectors[brand].asdaPudoFirstShop;
      const asdaPudoSearchTitle = selectors[brand].asdaPudoSearchTitle;
      const asdaPudoSelectShop = selectors[brand].asdaPudoSelectShop;
      cy.waitUntil(() => {
        return cy.get(asdaPudoSearchField, { timeout: 4000 }).clear().type(postCode + '{enter}');
      });
      cy.get(asdaPudoFirstShop, { timeout: 20000 }).should('be.visible');
      cy.get(asdaPudoFirstShop).eq(0).click({ force: true });
      return cy.get(asdaPudoSearchTitle).eq(0).invoke('text').then(text => {
        cy.get(asdaPudoSelectShop).click({ force: true }).then(() => {
          return text;
        });
      });
    },
    selectW3WAddress(w3Words: string) {
      const w3Winput = selectors[brand].w3Winput;
      const w3WAddressSuggestion = selectors[brand].w3WAddressSuggestion;
      cy.wait(3000);
      cy.get(w3Winput).type(w3Words, { force: true });
      cy.wait(1000);
      cy.get(w3WAddressSuggestion).should('be.visible').and('contain.text', 'Manchester');
      cy.get(w3WAddressSuggestion).eq(0).click({ force: true });
    },
    addressFormValidation() {
      const primaryAddress = addresses.getAddressByLocale(locale, 'primaryAddress');
      const shippingFname = selectors[brand].shippingFname;
      const shippingLname = selectors[brand].shippingLname;
      const shippingCountry = selectors[brand].shippingCountry;
      const shippingPhoneNumber = selectors[brand].shippingPhoneNumber;

      cy.get(shippingFname).clear().type(primaryAddress.firstName, { force: true });
      cy.get(shippingLname).clear().type(primaryAddress.lastName, { force: true });
      cy.get(shippingCountry).select(primaryAddress.country).invoke('show');
      cy.get(shippingPhoneNumber).clear().type(primaryAddress.phone);
    },

    selectClickAndCollectTab() {
      const clickAndCollectTab = selectors[brand].clickAndCollectTab;
      cy.get(clickAndCollectTab, { timeout: 20000 }).invoke('show', { force: true }).click({ force: true })
      cy.wait(2000);
    },

    selectShippingMethodByName(name: string) {
      const shippingMethodsNameList = selectors[brand].shippingMethodsNameList
      cy.get(shippingMethodsNameList, { timeout: 20000 }).contains(name).click({ force: true });
      cy.wait(3000);
    },
    postCodeEvri(postCode: string) {
      const pudoSearchField = selectors[brand].pudoSearchField;
      cy.get(pudoSearchField, { timeout: 20000 }).type(postCode, { force: true });
      cy.wait(2000);
      if(brand=='karenmillen.com'){
      cy.get('.pudo-search-btn').click({force:true})
      }
      cy.wait(2000);
    },
    postCodeAsda(postCode: string) {
      const asdaPudoSearchField = selectors[brand].asdaPudoSearchField;
      cy.get(asdaPudoSearchField, { timeout: 20000 }).type(postCode + '{enter}', { force: true });
      cy.wait(2000);
    },
    selectFirstEvriPickUpAddressfromList() {
      const pudoFirstShop = selectors[brand].pudoFirstShop;
      const selectParcelShopBtn = selectors[brand].selectParcelShopBtn;
      if (isMobileDeviceUsed) {
        cy.ClickIfElemenExist("[data-target='js-pudo-side']") //Click on 'see list' button to view stores on mobile web view
      }
      cy.wait(3000)
      cy.get(pudoFirstShop, { timeout: 20000 }).first().click({ force: true });
      cy.wait(1000);
      cy.get(selectParcelShopBtn, { timeout: 20000 }).click({ force: true });
      cy.wait(3000);
    },
    selectFirstAsdaPickUpAddressFromList() {
      const pudoFirstShopAsda = selectors[brand].pudoFirstShopAsda;
      const selectParcelShopBtnAsda = selectors[brand].selectParcelShopBtnAsda;
      cy.get(pudoFirstShopAsda).first().click({ force: true });
      cy.wait(1000);
      cy.get(selectParcelShopBtnAsda).first().click({ force: true });
      cy.wait(3000);
    }
  };

  assertions = {
    assertShopisSelected(pudoAddressText: string) {
      const pudoSelectedShopAddress = selectors[brand].pudoSelectedShopAddress;
      cy.get(pudoSelectedShopAddress).should('contain', pudoAddressText);
    },
    assertasdaShopisSelected(asdaPudoAddressText: string) {
      const asdaSelectedShopAddress = selectors[brand].asdaSelectedShopAddress;
      cy.get(asdaSelectedShopAddress).should('contain', asdaPudoAddressText);
    },

    assertW3WisSelected() {
      const successMark = selectors[brand].successMark;
      cy.get(successMark).should('be.visible');
    },
    assertPromoCodeFieldIsDisplayed() {
      const coupon = selectors[brand].coupon;
      cy.get(coupon).should('be.visible');
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
    assertSavedShippingAddressIsDispayed() {
      const addressName = selectors[brand].addressName;
      cy.get(addressName).eq(1).should('be.visible').should('not.be.empty');
    },
    assertNewAddedShippingAddress(addressLine: string, city: string, postCode: string) {
      const brandsPopulatingSeparateAddressFields: Array<GroupBrands> = ['nastygal.com', 'boohooman.com'];
      if (brandsPopulatingSeparateAddressFields.includes(brand)) {
        const addressLine1Field = selectors[brand].addressLine1Field;
        const cityField = selectors[brand].cityField;
        const postCodeField = selectors[brand].postCodeField;
        cy.get(addressLine1Field).should('have.value', addressLine);
        cy.get(cityField).should('have.value', city);
        cy.get(postCodeField).should('have.value', postCode);
      } else {
        const newAddedAddressBlock = selectors[brand].newAddedAddressBlock;
        cy.get(newAddedAddressBlock).should('contain.text', addressLine)
          .and('contain.text', city)
          .and('contain.text', postCode);
      }
    },
    assertFirstNameIsMandatory(requiredFieldError: string) {
      const fnameValidationMsg = selectors[brand].fnameValidationMsg;
      cy.get(fnameValidationMsg).should('be.visible').should('contain.text', requiredFieldError);
    },
    assertLastNameIsMandatory(requiredFieldError: string) {
      const lnameValidationMsg = selectors[brand].lnameValidationMsg;
      cy.get(lnameValidationMsg).should('be.visible').should('contain.text', requiredFieldError);
    },
    assertPhoneNumberIsMandatory(requiredFieldError: string) {
      const phoneValidationMsg = selectors[brand].phoneValidationMsg;
      cy.get(phoneValidationMsg).should('be.visible').should('contain.text', requiredFieldError);
    },
    assertCityIsMandatory(city: string) {
      const cityField = selectors[brand].cityField;
      cy.get(cityField).should('contain.text', city);
    },
    assertPostCodeIsMandatory(postcode: string) {
      const postCodeValidationMsg = selectors[brand].postCodeValidationMsg;
      cy.get(postCodeValidationMsg).should('contain.text', postcode);
    },
    assertUserProceededToBillingPage() {
      cy.url().should('include', 'billing');
    },
    assertFirstNameFieldIsPopulated(text: string) {
      const shippingFname = selectors[brand].shippingFname;
      cy.get(shippingFname).should('contain.value', text);
    },
    assertLastNameFieldIsPopulated(text: string) {
      const shippingLname = selectors[brand].shippingLname;
      cy.get(shippingLname).should('contain.value', text);
    },
    assertCountryIsSelected(text: string) {
      const shippingCountry = selectors[brand].shippingCountry;
      cy.get(shippingCountry).should('contain.value', text);
    },
    assertPhoneNumberFieldIsPopulated(text: string) {
      const shippingPhoneNumber = selectors[brand].shippingPhoneNumber;
      cy.get(shippingPhoneNumber).should('contain.value', text);
    },
    assertGuestEmailFieldDisplayed() {
      const guestEmailField = selectors[brand].guestEmailField;
      cy.get(guestEmailField).should('be.visible');
    },
    assertManualAddressFieldsAreDisplayed() {
      const addressLine1Field = selectors[brand].addressLine1Field;
      const addressLine2Field = selectors[brand].addressLine2Field;
      const cityField = selectors[brand].cityField;
      cy.get(addressLine1Field).should('be.visible');
      cy.get(addressLine2Field).should('be.visible');
      cy.get(cityField).should('be.visible');
    },
    assertOrderTotalIsDisplayed() {
      const orderTotal = selectors[brand].orderTotal;
      cy.get(orderTotal).should('not.be.empty');
    },
    assertAddressDetailsAreMandatory(text: string) {
      const cityDetailsAreMandatory = selectors[brand].cityDetailsAreMandatory;
      const address1DetailsAreMandatory = selectors[brand].address1DetailsAreMandatory;
      cy.get(cityDetailsAreMandatory).should('contain.text', text);
      cy.get(address1DetailsAreMandatory).should('contain.text', text);
    },
    assertAddressLookupFieldIsVisible() {
      const addressLookup = selectors[brand].addressLookup;
      cy.get(addressLookup).should('be.visible');
    },
    assertCartShippingPageContainsProduct(product: string) {
      const cartContainer = selectors[brand].cartContainer;
      cy.get(cartContainer, { timeout: 20000 }).should('contain', product.trim());
    },
    assertShippingPageCartContainsVipProduct() {
      const cartContainer = selectors[brand].cartContainer;
      const cartContainerMobile = selectors[brand].cartContainerMobile;
      const premierProductTitle = selectors[brand].premierProductTitle;
      const premierProductTitleIE = selectors[brand].premierProductTitleIE;
      if (isMobileDeviceUsed) {
        cy.get(cartContainerMobile, { timeout: 20000 }).should('contain', premierProductTitle.trim());
      } else if (brand == 'boohooman.com' && locale == 'IE') {
        cy.get(cartContainer, { timeout: 20000 }).should('contain', premierProductTitleIE.trim());
      } else {
        cy.get(cartContainer, { timeout: 20000 }).should('contain', premierProductTitle.trim());
      }
    },
    assertShippingMethodIsSelected(shippingMethod: string) {
      const orderSummaryOnShippingPage = selectors[brand].orderSummaryOnShippingPage;
      cy.get(orderSummaryOnShippingPage).should('contain.text', shippingMethod.trim());
    },

    // METHODS ONLY FOR SITE GENESIS BRANDS //
    assertEmailIsCorrect(email: string) {
      const guestEmailField = selectors[brand].guestEmailField;
      cy.get(guestEmailField).should('have.value', email);
    },
    assertDateFormIsPresent() {
      const dateOfBirthForm = selectors[brand].dateOfBirthForm;
      cy.get(dateOfBirthForm).should('be.visible');
    },
    assertDateIsSelected(day: string, month: string, year: string) {
      const dobDay = selectors[brand].dobDay;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDay).should('have.have.value', day);
      cy.get(dobMonth).should('have.value', month);
      cy.get(dobYear).should('have.value', year);
    },
    assertEmptyEmailFieldError(errorMsg: string) {
      const emptyEmailFieldError = selectors[brand].emptyEmailFieldError;
      cy.get(emptyEmailFieldError).should('be.visible').and('contain.text', errorMsg);
    },
    assertEmptyDateFieldError(errorMsg: string) {
      const emptyDateFieldError = selectors[brand].emptyDateFieldError;
      cy.get(emptyDateFieldError).should('be.visible').and('contain.text', errorMsg);
    },
    assertThriftSectionIsVisible() {
      const thrift = selectors[brand].thrift;
      cy.scrollTo('bottom');
      cy.get(thrift).should('be.visible');
    },
    assertThriftBagIsAddedToTheCart() {
      const checkoutMiniBagSummery = selectors[brand].checkoutMiniBagSummery;
      cy.get(checkoutMiniBagSummery).should('contain', 'Thrift Bags');
    },
    assertPremierSectionExpands() {
      const premierMoreInfoSection = selectors[brand].premierMoreInfoSection;
      if (brand == 'boohoo.com') {
        cy.get(premierMoreInfoSection).eq(0).should('be.visible');
      } else {
        cy.get(premierMoreInfoSection).should('be.visible');
      }
    },
    assertPremierDetailsText() {
      const premierMoreInfoSection = selectors[brand].premierMoreInfoSection;
      const premierMoreInfoText = assertionText.premierMoreInfoTextShippingPage[language];
      const premierMoreInfoTextKM = assertionText.premierMoreInfoTextShippingPageKarenMillen[language];
      if (brand == 'boohoo.com') {
        cy.get(premierMoreInfoSection).eq(0).contains(premierMoreInfoText, { matchCase: false });
      } else if (brand == 'karenmillen.com') {
        cy.get(premierMoreInfoSection).contains(premierMoreInfoTextKM, { matchCase: false });
      } else {
        cy.get(premierMoreInfoSection).contains(premierMoreInfoText, { matchCase: false });
      }
    },
    assertCustomerServicePageIsOpened() {
      const customerServiceURL = assertionText.customerServiceURL[language];
      cy.url().should('contain', customerServiceURL);

    },
    assertDeliverySection(text: string) {
      const deliverySection = selectors[brand].deliverySection;
      cy.get(deliverySection).invoke('text').as('deliverySection');
      cy.get('@deliverySection').should('contain', text);
    },
    assertBMANUsLocaleIncludeListOfCountries(UScountires: Array<string>) {
      const shippingCountry = selectors[brand].shippingCountry;
      cy.get(shippingCountry).invoke('text').then((countryList) => {
        UScountires.forEach((country) => {
          expect(countryList).to.include(country);
        });
      });
    }
  };
}

export default new ShippingPage();

