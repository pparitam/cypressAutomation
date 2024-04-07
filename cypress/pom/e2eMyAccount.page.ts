import { brand, locale, url, language } from 'cypress/support/e2e';
import assertionText from '../helpers/assertionText';
import { isMobileDeviceUsed } from 'cypress/helpers/common';


const selectors: SelectorBrandMap = {
  'boohoo.com': {
    accountGreetingMsg: '[data-tau="greeting_message"]',
    myPremier: '[data-tau="navigation_accountPremier"]',
    accountPageTitle: '.b-account-subtitle',
    orderHistory: '[data-tau="navigation_orderHistory"]',
    savedForLater: '[data-tau="navigation_wishlistShow"]',
    savedForLaterPageTitle: '.b-page_title',
    accountDetails: '[data-tau="navigation_editProfile"]',
    accountDetailPageTitle: '.b-account-title',
    changePassword: '[data-tau="navigation_passwordChange"]',
    changePasswordPageTitle: '.b-account-title',
    contactPreferences: '[data-tau="navigation_contactPreferences"]',
    addresses: '[data-tau="navigation_addressList"]',
    paymentDetails: '[data-tau="navigation_paymentDetails"]',
    socialAccounts: '.b-account_nav-item_link.m-happySmile',
    addAddressBtn: 'a[data-tau="address_book_addNewAddress"]',
    addressFirstNameField: '#dwfrm_address_firstName',
    addressLastNameField: '#dwfrm_address_lastName',
    addressPhoneNumberField: '#dwfrm_address_phone',
    addressCityField: '#dwfrm_address_city',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressStateCode: '#dwfrm_address_states_stateCode',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressSubmitBtn: 'button[data-tau="address_submit"]',
    addressField: '#dwfrm_address_address1',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    countryField: '[data-tau="address_country"]',
    addressCards: '[data-tau="address_book_list"]',
    addressDeleteButton: '[data-tau="address_book_delete"]',
    addressDeleteConfirmationBtn: 'button[data-tau="dialog_delete_address_confirm"]',
    addressDefaultBox: 'section[data-tau="address_book_item_default"]',
    addressEditBtn: 'a.b-button.m-link.b-cards_grid-edit',
    addressEditForm: '.l-account_main-section',
    addressNameLine: '.b-address-name',
    addressVarifyButton: '.verification-address-button',
    addCardBtn: 'a[data-tau="address_book_addNewAddress"]',
    addCardForm: '.l-account_main-section',
    addCardNumberIFrameBox: '.adyen-checkout__field--cardNumber .js-iframe',
    addCardNumber: "[data-fieldtype='encryptedCardNumber']",
    addCreditCardNumberUS: "input[id='dwfrm_creditCard_cardNumber']",
    addCardOwnerUS: "input[id='dwfrm_creditCard_cardOwner']",
    addCreditCardExpMonthUS: '#dwfrm_creditCard_expirationMonth',
    addCreditCardExpYearUS: '#dwfrm_creditCard_expirationYear',
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    addCardExpDateIFrameBox: '.adyen-checkout__field--expiryDate .js-iframe',
    addCardExpDate: "[data-fieldtype='encryptedExpiryDate']",
    addCardSecurityCodeIFrameBox: '.adyen-checkout__card__cvc__input .js-iframe',
    addCardSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    addCardOwner: 'input.adyen-checkout__input',
    addCardSaveBtn: '.m-mobile_column > .b-button',
    cardSection: '.b-cards_grid section',
    cardDeleteBtn: '.b-cards_grid-footer > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click\\.prevent="confirm"]',
    cardsList: '.b-cards_grid',
  },
  'nastygal.com': {
    accountGreetingMsg: '[data-tau="greeting_message"]',
    myPremier: '[data-tau="navigation_accountPremier"]',
    accountPageTitle: '.b-account-subtitle',
    orderHistory: '[data-tau="navigation_orderHistory"]',
    savedForLater: '[data-tau="navigation_wishlistShow"]',
    savedForLaterPageTitle: '.b-account-subtitle',
    accountDetails: '[data-tau="navigation_editProfile"]',
    accountDetailPageTitle: '.b-account-title',
    changePassword: '[data-tau="navigation_passwordChange"]',
    changePasswordPageTitle: '.b-account-title',
    contactPreferences: '[data-tau="navigation_contactPreferences"]',
    addresses: '[data-tau="navigation_addressList"]',
    paymentDetails: '[data-tau="navigation_paymentDetails"]',
    socialAccounts: '.b-account_nav-item_link.m-happySmile',
    startAReturnButton: '[href="/page/returns-and-refunds.html"]',
    startReturnPageHeading: '.l-static_page-inner > .l-static_page-title',
    addAddressBtn: 'a[data-tau="address_book_addNewAddress"]',
    addressFirstNameField: '#dwfrm_address_firstName',
    addressLastNameField: '#dwfrm_address_lastName',
    addressPhoneNumberField: '#dwfrm_address_phone',
    addressCityField: '#dwfrm_address_city',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressStateCode: '#dwfrm_address_states_stateCode',
    addressEnterManualyBtn: '.b-form_section>button',
    addressSubmitBtn: 'button[data-tau="address_submit"]',
    addressField: '#dwfrm_address_address1',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    countryField: '#dwfrm_address_country',
    addressCards: '[data-tau="address_book_list"]',
    addressDeleteButton: '[data-tau="address_book_delete"]',
    addressDeleteConfirmationBtn: 'button[data-tau="dialog_delete_address_confirm"]',
    addressDefaultBox: 'section[data-tau="address_book_item_default"]',
    addressEditBtn: 'a[data-tau="address_book_edit"]',
    addressEditForm: '.l-account_main-section',
    addressNameLine: '.b-address-name',
    addressVarifyButton: '.verification-address-button',
    addCardBtn: 'a[data-tau="address_book_addNewAddress"]',
    addCardForm: '.l-account_main-section',
    addCardNumberIFrameBox: '.adyen-checkout__field--cardNumber .js-iframe',
    addCardNumber: "[data-fieldtype='encryptedCardNumber']",
    addCreditCardNumberUS: "input[id='dwfrm_creditCard_cardNumber']",
    addCardExpDateIFrameBox: '.adyen-checkout__field--expiryDate .js-iframe',
    addCreditCardExpMonthUS: '#dwfrm_creditCard_expirationMonth',
    addCreditCardExpYearUS: '#dwfrm_creditCard_expirationYear',
    addCardExpDate: "[data-fieldtype='encryptedExpiryDate']",
    addCardSecurityCodeIFrameBox: '.adyen-checkout__card__cvc__input .js-iframe',
    addCardSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    addCardOwner: 'input.adyen-checkout__input',
    addCardOwnerUS: "input[id='dwfrm_creditCard_cardOwner']",
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    addCardSaveBtn: '.m-mobile_column > .b-button',
    cardSection: '.b-cards_grid section',
    cardDeleteBtn: '.b-cards_grid-footer > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click\\.prevent="confirm"]',
    cardsList: '.b-cards_grid',
  },
  'boohooman.com': {
    minicartIcon: "[class='js-minicart-quantity minicart-quantity-value is-mobile']",
    searchField: '#search-input',
    productGrid: '#plp-product-list',
    productsList: '#plp-product-list [role="listitem"]',
    colourSelectionBtn: '[data-testid="pdp-related-colour"]',
    addToCart: "#add-to-bag",
    cartCheckoutButtonTop: '#checkout-button-top',
    allSizes: '.flex.flex-wrap.mb-2 button.flex',
    notAvailableSizes: ".PDPSizes_isOutOfStock__02GEZ",
    availableSizes: '.flex.flex-wrap.mb-2 button.flex:not(.PDPSizes_isOutOfStock__02GEZ)'
  },
  'karenmillen.com': {
    accountGreetingMsg: '.account-welcome-title',
    myPremier: '[data-tau="navigation_accountPremier"]',
    accountPageTitle: '.account-page-title',
    orderInfoPageTitle: '.order-title',
    orderHistory: '[title="Order History"]',
    savedForLater: '[title="Modify your wish list"]',
    savedForLaterPageTitle: '.wishlist-title',
    accountDetails: '[title="Show or update your personal information"]',
    accountDetailPageTitle: '.b-account-title',
    changePassword: '[data-tau="navigation_passwordChange"]',
    changePasswordPageTitle: '.b-account-title',
    contactPreferences: '.js-anchor-link',
    contactPreferencesTitle: '#contact-preferences',
    addresses: '[title="Manage your billing and shipping addresses"]',
    paymentDetails: '[title="Manage credit cards"]',
    socialAccounts: '.b-account_nav-item_link.m-happySmile',
    returns: '[title="Returns Policy"]',
    startReturnPageHeading: '.content-asset.returns-page-heading-main-box-intro',
    returnsPageHeading: '.content-asset.cs-returns-policy > h1',
    returnsPageHeadingIE: '.content-page-wrapper > h1',
    privacyNotice: '[title="Privacy Notice"]',
    privacyNoticePageHeading: '.content-asset.cs-privacy-policy > h1',
    addAddressBtn: '.address-create',
    addressFirstNameField: '#dwfrm_profile_address_firstname',
    addressLastNameField: '#dwfrm_profile_address_lastname',
    addressPhoneNumberField: '#dwfrm_profile_address_phone',
    addressCityField: '#dwfrm_profile_address_city',
    addressPostalCodeField: '#dwfrm_profile_address_postalcodes_postal',
    addressStateCode: '#dwfrm_profile_address_states_state',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressSubmitBtn: '.apply-button.js-apply-button',
    addressField: '#dwfrm_profile_address_address1',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    countryField: '#dwfrm_profile_address_country',
    addressCards: '.account-page-list-inner',
    addressLocation: '.mini-address-location-group',
    addressDeleteButton: '[class="address-delete-link js-address-delete"]',
    addressDeleteConfirmationBtn: 'button[data-tau="dialog_delete_address_confirm"]',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '.edit-address > .account-page-title',
    addressNameLine: '.mini-address-name',
    addressVarifyButton: '.verification-address-button',
    addCardBtn: '.add-card',
    addCardForm: '.account-wrapper > .account-page-title',
    addCardNumberIFrameBox: '.adyen-checkout__field--cardNumber .js-iframe',
    addCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    addCreditCardNumberUS: '#cc_cardNumber',
    addCardExpDateIFrameBox: '.adyen-checkout__field--expiryDate .js-iframe',
    addCardExpDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    addCreditCardExpDateUS: '#cc_expDate',
    addCardSecurityCodeIFrameBox: '.adyen-checkout__card__cvc__input .js-iframe',
    addCardSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    addCardOwner: '[id^="adyen-checkout-holderName"]',
    addCardOwnerUS: '#dwfrm_paymentinstruments_creditcards_newcreditcard_owner',
    addCardExpDateUS: '#cc_expDate',
    addCardSaveBtn: '#add-card-submit',
    addCardSaveBtnUS: '#applyBtn',
    addCreditCardSaveBtnUS: '#applyBtn',
    cardSection: '.payment-list-item',
    cardDeleteBtn: '.button-delete',
    cardDeleteConfirmationBtn: 'button[data-event-click\\.prevent="confirm"]',
    cardsList: '.account-payments',
  }

};

class e2eMyAccountPage {

  assertAccountPageLoad() {
    const accountGreetingMsg = selectors[brand].accountGreetingMsg;
    cy.url().should('include', assertionText.myaccountPageURLText[language])

    if(brand == 'karenmillen.com') {
      cy.get(accountGreetingMsg).invoke('text').then((greetingMsg) => {
        cy.get(accountGreetingMsg).should('be.visible').and('include.text', greetingMsg.trim())
      })
    } else if (brand == 'boohoo.com' && (locale == 'FR')){
      cy.get(accountGreetingMsg).should('be.visible').and('include.text', assertionText.accountPageGreetingTextBH[language].trim())
    } else if (brand  == 'boohoo.com' && locale == 'DK'){
      cy.get(accountGreetingMsg).invoke('text').then( () => {
        cy.get(accountGreetingMsg).should('be.visible').and('contain.text','Hi Test' )
      })
    } else {
      cy.get(accountGreetingMsg).should('be.visible').and('contain.text', assertionText.accountPageGreetingText[language].trim())
    }
  }

  visitPremierPage() {
    const myPremier = selectors[brand].myPremier;
    const accountPageTitle = selectors[brand].accountPageTitle;
    const myPremierBrandsAndLocales: boolean = (brand == 'boohoo.com' && (locale == 'UK' || locale == 'IE' || locale == 'FR'))

    if (myPremierBrandsAndLocales) {
      cy.get(myPremier).click()
        .url().should('include', assertionText.myPremierPageURLText[language])
        .get(accountPageTitle).should('include.text', assertionText.myPremierPageTitleText[language].trim())
    }
  }

  visitOrderHistory() {
    const orderHistory = selectors[brand].orderHistory;
    const accountPageTitle = selectors[brand].accountPageTitle;
    const orderInfoPageTitle = selectors[brand].orderInfoPageTitle;
    cy.get(orderHistory).click()
      .url().should('include', assertionText.orderHistoryPageURLText[language])
    brand == 'karenmillen.com'
      ? cy.get(orderInfoPageTitle).should('include.text', assertionText.orderHistoryPageGreetingText[language])
      : cy.get(accountPageTitle).should('include.text', assertionText.orderHistoryPageGreetingText[language])
  }

  visitAccountDetails() {
    const accountDetails = selectors[brand].accountDetails;
    const accountDetailPageTitle = selectors[brand].accountDetailPageTitle;
    const accountPageTitle = selectors[brand].accountPageTitle;
    cy.get(accountDetails).click()
      .url().should('include', assertionText.accountDetailsPageURLText[language])
    brand == 'karenmillen.com'
      ? cy.get(accountPageTitle).invoke('text').then((accountPageTitleText) => {
        cy.get(accountPageTitle).should('be.visible').and('include.text', accountPageTitleText)
      })
      : brand == 'boohoo.com' && locale == 'FR'
        ? cy.get(accountDetailPageTitle).should('include.text', assertionText.accountDetailsPageGreetingTextBH[language].trim())
        : cy.get(accountDetailPageTitle).should('include.text', assertionText.accountDetailsPageGreetingText[language].trim())
  }

  visitChangePassword() {
    const changePassword = selectors[brand].changePassword;
    const changePasswordPageTitle = selectors[brand].changePasswordPageTitle;
    const changePasswordBrandsAndLocales: boolean = ((brand == 'nastygal.com' && locale == 'FR') || (brand == 'boohoo.com' && (locale == 'IE' || locale == 'EU' || locale == 'AU' || locale == 'CA' || locale == 'NZ' || locale == 'NL' || locale == 'US' || locale == 'NO' || locale == 'DE' || locale == 'FI')))

    if (brand !== 'karenmillen.com') {
      cy.get(changePassword).click()
      if (changePasswordBrandsAndLocales) {
        cy.url().should('include', assertionText.changePasswordURLTextBHIE[language])
      } else if ( locale == 'DK'){
        cy.url().should('include', assertionText.changePasswordURLText['DK'])
      } else {
        cy.url().should('include', assertionText.changePasswordURLText[language])
      }
      cy.get(changePasswordPageTitle).should('include.text', assertionText.changePasswordPageTitle[language])
    }
  }

  visitContactPreferences() {
    const contactPreferences = selectors[brand].contactPreferences;
    const accountPageTitle = selectors[brand].accountPageTitle;
    const contactPreferencesTitle = selectors[brand].contactPreferencesTitle;
    const contactPreferencesBoohooLocales: boolean = (locale == 'IE' || locale == 'EU' || locale == 'US' || locale == 'CA' || locale == 'AU' || locale == 'NZ' || locale == 'NO' || locale == 'NL' || locale == 'DK' || locale == 'FI')

    cy.get(contactPreferences).click()

    if (brand == 'karenmillen.com') {
      cy.url().should('include', assertionText.contactPreferencesURLTextKM[language])
    } else if (brand == 'boohoo.com') {
      if (contactPreferencesBoohooLocales) {
        cy.url().should('include', assertionText.contactPreferencesURLText[language])
      } else {
        cy.url().should('include', assertionText.contactPreferencesURLTextBHO[language])
      }
    } else if (brand == 'nastygal.com') {
      cy.url().should('include', assertionText.contactPreferencesURLTextNG[language])
    }
    if (brand == 'karenmillen.com') {
      cy.get(contactPreferencesTitle).should('include.text', assertionText.contactPreferencesPageTitle[language].trim())
    } else if (brand == 'nastygal.com') {
      cy.get(accountPageTitle).should('include.text', assertionText.contactPreferencesPageTitleNG[language].trim())
    } else {
      cy.get(accountPageTitle).should('include.text', assertionText.contactPreferencesPageTitle[language].trim())
    }
  }

  visitAdresses() {
    const addresses = selectors[brand].addresses;
    const accountPageTitle = selectors[brand].accountPageTitle;
    cy.get(addresses).click()
      .url().should('include', assertionText.addressPageURLText[language])
      .get(accountPageTitle).should('include.text', assertionText.addressPageTitle[language].trim())
  }

  visitPaymentDetails() {
    const paymentDetails = selectors[brand].paymentDetails;
    const accountPageTitle = selectors[brand].accountPageTitle;
    cy.get(paymentDetails).click()
      .url().should('include', assertionText.paymentDetailsURLText[language])
    brand == 'karenmillen.com'
      ? cy.get(accountPageTitle).should('include.text', assertionText.paymentDetailsPageTitleKM[language])
      : cy.get(accountPageTitle).should('include.text', assertionText.paymentDetailsPageTitle[language].trim())
  }

  visitSocialAccounts() {
    const socialAccounts = selectors[brand].socialAccounts;
    const accountPageTitle = selectors[brand].accountPageTitle;
    const socialAccountsBrandsAndLocales: boolean = (brand == 'nastygal.com' || (brand == 'boohoo.com' && (locale == 'IE' || locale == 'EU' || locale == 'US' || locale == 'CA' || locale == 'FR' || locale == 'AU' || locale == 'NZ' || locale == 'NO' || locale == 'NL' || locale == 'DK' || locale == 'FI')))

    if (brand !== 'karenmillen.com') {
      cy.get(socialAccounts).click()
      if(socialAccountsBrandsAndLocales) {
        cy.url().should('include', assertionText.socialAccountsURLTextNG[language])
      } else {
        cy.url().should('include', assertionText.socialAccountsURLText[language])
      }
      cy.get(accountPageTitle).should('include.text', assertionText.socialAccountsPageTitle[language])
    }
  }

  visitWishList() {
    const savedForLater = selectors[brand].savedForLater;
    const savedForLaterPageTitle = selectors[brand].savedForLaterPageTitle;
    cy.get(savedForLater).click()
      .url().should('include', assertionText.wishlistURLText[language])
    brand == 'karenmillen.com'
      ? cy.get(savedForLaterPageTitle).should('include.text', assertionText.wishlistPageTitleKM[language])
      : cy.get(savedForLaterPageTitle).should('include.text', assertionText.wishlistPageTitle[language].trim())

    if (brand == 'boohoo.com' || brand == 'nastygal.com') {
      cy.visit(url + '/myaccount?registration=false')
      this.assertAccountPageLoad();
    }
  }

  visitStartAReturn() {
    const returns = selectors[brand].returns;
    const startReturnPageHeading = selectors[brand].startReturnPageHeading;
    const startAReturnButton = selectors[brand].startAReturnButton;
    if (brand == 'karenmillen.com') {
      cy.get(returns).eq(0).click()
        .url().should('include', assertionText.returnsURLText[language])
      if (locale == 'US') {
        cy.get(startReturnPageHeading).should('include.text', assertionText.startAReturnsPageTitleKMUS[language].trim())
      }
      else if (locale == 'IE' || locale == 'EU') {
        cy.get(startReturnPageHeading).should('include.text', assertionText.startAReturnsPageTitleKMIEAndEU[language].trim())
      } else if (locale == 'AU') {
        cy.get(startReturnPageHeading).should('include.text', assertionText.startAReturnsPageTitleKMAU[language])
      } else {
        cy.get(startReturnPageHeading).should('include.text', assertionText.startAReturnsPageTitle[language])
      }
    }
    cy.visit(url + '/myaccount')
    this.assertAccountPageLoad();
  }

  visitReturnsPolicy() {
    const returns = selectors[brand].returns;
    const returnsPageHeading = selectors[brand].returnsPageHeading;
    const returnsPageHeadingIE = selectors[brand].returnsPageHeadingIE;
    if (brand == 'karenmillen.com') {
      cy.get(returns).eq(1).click()
        .url().should('include', assertionText.returnsPolicyURLText[language])
      if (locale == 'IE' || locale == 'EU') {
        cy.get(returnsPageHeadingIE).should('include.text', assertionText.returnsPolicyPageTitleKMIEAndEU[language])
      } else {
        cy.get(returnsPageHeading).should('include.text', assertionText.returnsPolicyPageTitle[language])
      }
      cy.visit(url + '/myaccount')
      this.assertAccountPageLoad();
    }
  }

  visitPrivacyNotice() {
    const privacyNotice = selectors[brand].privacyNotice;
    const privacyNoticePageHeading = selectors[brand].privacyNoticePageHeading;
    if (brand == 'karenmillen.com') {
      cy.get(privacyNotice).eq(0).click()
        .url().should('include', assertionText.privacyNoticeURLText[language])
      if (locale == 'US') {
        cy.get(privacyNoticePageHeading).should('include.text', assertionText.privacyNoticePageTitleKMUS[language])
      } else {
        cy.get(privacyNoticePageHeading).should('include.text', assertionText.privacyNoticePageTitle[language])
      }
      cy.visit(url + '/myaccount')
      this.assertAccountPageLoad();
    }
  }

  addAddress(address: AddressData) {
    const addAddressBtn = selectors[brand].addAddressBtn;
    const addressFirstNameField = selectors[brand].addressFirstNameField;
    const addressLastNameField = selectors[brand].addressLastNameField;
    const addressPhoneNumberField = selectors[brand].addressPhoneNumberField;
    const addressField = selectors[brand].addressField;
    const addressCityField = selectors[brand].addressCityField;
    const addressEnterManualyBtn = selectors[brand].addressEnterManualyBtn;
    const addressPostalCodeField = selectors[brand].addressPostalCodeField;
    const addressSubmitBtn = selectors[brand].addressSubmitBtn;
    const addressNicknameField = selectors[brand].addressNicknameField;
    const addressStateCode = selectors[brand].addressStateCode;
    const addressVarifyButton = selectors[brand].addressVarifyButton;
    const countryField = selectors[brand].countryField;

    cy.get(addAddressBtn).should('be.visible').click({ force: true })
      .get(addressFirstNameField).should('be.visible').type(address.firstName, { force: true })
      .get(addressLastNameField).should('be.visible').type(address.lastName, { force: true })
      .get(addressPhoneNumberField).type(address.phone, { force: true })

    if (locale == 'EU') {
      cy.get(countryField).select(address.country)
        .wait(3000)
    }
    if (brand !== 'karenmillen.com') {
      cy.get(addressEnterManualyBtn, { timeout:20000 }).click({ force: true })
    }
    // Needs to add wait for Boohoo EU otherwise tests is get failed.
    cy.get(addressField).should('be.visible').type(address.addressLine, { force: true }).wait(1000)
      .get(addressCityField).type(address.city, { force: true }).wait(1000)
      .get(addressPostalCodeField).type(address.postcode, { force: true }).wait(1000)
    if (brand == 'karenmillen.com') {
      cy.get(addressNicknameField).type('New1');
      if(locale=='EU'){
        cy.get("#dwfrm_profile_address_phone").type(address.phone)
      }
    }
    if (brand == 'karenmillen.com' && (locale == 'IE' || locale == 'US')) {
      cy.get(addressStateCode).select(address.county, { force: true })
      // .get(addressSubmitBtn).click({ force: true })
      // .wait(4000)
      // .get(addressVarifyButton).click({ force: true })
    } else if ((brand == 'nastygal.com' || brand == 'karenmillen.com') && (locale == 'AU' || locale == 'CA' || locale == 'US')) {
      cy.get(addressStateCode).select(address.county, { force: true })
    }
    if (brand == 'boohoo.com' && (locale == 'US' || locale == 'CA' || locale == 'AU')) {
      cy.get(addressStateCode).select(address.county, { force: true })
    }
    cy.get(addressSubmitBtn).click({ force: true });
    cy.wait(5000)
      if (brand == 'karenmillen.com' && locale == 'UK') {
        cy.get('body').then(body => {
          if (body.find(".verification-address-button-container").length > 0) {
            cy.get(".verification-address-button-container button").click({ force: true })
          }
        })
      }
  }

  editAddress() {
    const addressEditBtn = selectors[brand].addressEditBtn;
    const addressEditForm = selectors[brand].addressEditForm;
    const addressField = selectors[brand].addressField;
    const addressSubmitBtn = selectors[brand].addressSubmitBtn;
    const addressCards = selectors[brand].addressCards;

    cy.get(addressCards).contains('Boohoo').then(ele => {
      cy.wrap(ele).parentsUntil(addressCards).parent().find(addressEditBtn).click({ force: true })
    });
    cy.get(addressEditForm).should('be.visible')
      .get(addressField).clear({ force: true }).type('1 Chapel Hill')
      .get(addressSubmitBtn).click({ force: true }).wait(3000)

      if (brand == 'karenmillen.com' && locale == 'UK') {
        cy.get('body').then(body => {
          if (body.find(".verification-address-button-container").length > 0) {
            cy.get(".verification-address-button-container button").click({ force: true })
          }
        })
      }
  }

  assertAdddressEditedSuccessfully() {
    const addressVarifyButton = selectors[brand].addressVarifyButton;
    const addressCards = selectors[brand].addressCards;
    const addressLocation = selectors[brand].addressLocation;

    if (brand == 'karenmillen.com') {
      cy.get(addressCards).contains('Boohoo').then(ele => {
        cy.wrap(ele).get(addressLocation).should('contain.text', '1 Chapel Hill'.trim(), { timeout: 1000 })
          .wait(5000);
      });
    } else {
      cy.get(addressCards).contains('Boohoo').then(ele => {
        cy.wrap(ele).parentsUntil(addressCards).should('contain.text', '1 Chapel Hill'.trim(), { timeout: 1000 })
          .wait(5000);
      });
    }
  }
  verifyAddressIsEmpty() {
    const addressDeleteButton = selectors[brand].addressDeleteButton;
    const addressDeleteConfirmationBtn = selectors[brand].addressDeleteConfirmationBtn;
    cy.get('body').then($body => {
      if($body.find(addressDeleteButton).length > 0) {
        cy.get(addressDeleteButton).eq(0).click({ force:true })
        cy.wait(1000)
        if($body.find(addressDeleteConfirmationBtn).length > 0) {
          cy.get(addressDeleteConfirmationBtn).click({ force:true })
        }
        cy.wait(3000)
        this.verifyAddressIsEmpty()
      }
    })
  }
  deleteAddress() {
    const addressCards = selectors[brand].addressCards;
    const addressDeleteButton = selectors[brand].addressDeleteButton;
    const addressDeleteConfirmationBtn = selectors[brand].addressDeleteConfirmationBtn;
    cy.get(addressCards).contains('Boohoo').then(ele => {
      cy.wrap(ele).parentsUntil(addressCards).parent().find(addressDeleteButton).click({ force: true });
    });
    if (brand !== 'karenmillen.com') {
      cy.get(addressDeleteConfirmationBtn).click({ force: true });
    }
    if(brand == 'karenmillen.com') {
      cy.get('.account-addresses-noitem-message').should('contain.text',assertionText.emptyAddressFieldKM[language]);
    } else {
      cy.get(addressCards).should('not.contain.text', 'Boohoo')
    }
  }

  addCard(cardNumber: string, cardOwner: string, expiryDate: string, securityCode: string) {
    const addCardBtn = selectors[brand].addCardBtn;
    const addCardForm = selectors[brand].addCardForm;
    const addCardNumberIFrameBox = selectors[brand].addCardNumberIFrameBox;
    const addCardNumber = selectors[brand].addCardNumber;
    const addCardExpDateIFrameBox = selectors[brand].addCardExpDateIFrameBox;
    const addCardExpDate = selectors[brand].addCardExpDate;
    const addCardSecurityCodeIFrameBox = selectors[brand].addCardSecurityCodeIFrameBox;
    const addCardSecurityCode = selectors[brand].addCardSecurityCode;
    const addCardOwner = selectors[brand].addCardOwner;
    const addCardSaveBtn = selectors[brand].addCardSaveBtn;

    cy.get(addCardBtn).click()
      .get(addCardForm).should('be.visible')
      .iframe(addCardNumberIFrameBox).find(addCardNumber).type(cardNumber)
      .iframe(addCardExpDateIFrameBox).find(addCardExpDate).should('be.enabled').type(expiryDate, { force: true })
      .iframe(addCardSecurityCodeIFrameBox).find(addCardSecurityCode).type(securityCode)
      .get(addCardOwner).click({ force: true }).should('be.visible').type(cardOwner)
      .get(addCardSaveBtn).click({ force: true })
  }
  addCardUS(cardNumber: string, cardOwner: string, expiryDate: string, securityCode: string) {
    const addCardBtn = selectors[brand].addCardBtn;
    const addCardForm = selectors[brand].addCardForm;
    const addCreditCardNumberUS = selectors[brand].addCreditCardNumberUS;
    const addCardOwnerUS = selectors[brand].addCardOwnerUS;
    const addCardExpDateUS = selectors[brand].addCardExpDateUS;
    const addCreditCardExpMonthUS = selectors[brand].addCreditCardExpMonthUS;
    const addCreditCardExpYearUS = selectors[brand].addCreditCardExpYearUS;
    const addCardSaveBtnUS = selectors[brand].addCardSaveBtnUS;
    const addCreditCardSaveBtn = selectors[brand].addCreditCardSaveBtn;

    cy.get(addCardBtn).click()
    cy.get(addCardForm).should('be.visible')
      .wait(4000)
      .get(addCreditCardNumberUS).type(cardNumber, { force: true })
      .wait(1000)
      .get(addCardOwnerUS).type(cardOwner)
    if (brand == 'boohoo.com' || brand == 'nastygal.com') {
      cy.get(addCreditCardExpMonthUS).select(3).invoke('val').should('eq', '3')
        .get(addCreditCardExpYearUS).select(7).invoke('val').should('eq', '2030')
        .get(addCreditCardSaveBtn).click({ force: true })
    }
    else {
      cy.get(addCardExpDateUS).type(expiryDate, { force: true })
      cy.get(addCardSaveBtnUS).click({ force: true })
    }
  }

  assertCardAdded(cardEnd: string) {
    cy.contains(cardEnd).should('be.visible');
  }

  deleteCard(cardEnd: string) {
    const cardSection = selectors[brand].cardSection;
    const cardDeleteBtn = selectors[brand].cardDeleteBtn;
    const cardDeleteConfirmationBtn = selectors[brand].cardDeleteConfirmationBtn;

    cy.get(cardSection).contains(cardEnd).should('be.visible')
      .get(cardSection).contains(cardEnd).parents(cardSection).find(cardDeleteBtn).click({ force: true });
    if (brand !== 'karenmillen.com') {
      cy.get(cardDeleteConfirmationBtn).click({ force: true });
    }
  }

  assertCardNotPresent(cardEnd: string) {
    const cardsList = selectors[brand].cardsList;
    cy.get(cardsList).should('not.contain', cardEnd);
  }

}

export default new e2eMyAccountPage();
