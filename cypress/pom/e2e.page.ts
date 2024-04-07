import { isMobileDeviceUsed, isSiteGenesisBrand } from 'cypress/helpers/common';
import { brand, url, locale, language } from 'cypress/support/e2e';
import shippingPage from './shipping.page';
import billingPage from './billing.page';
import addresses from 'cypress/helpers/addresses';
import card from 'cypress/helpers/cards';
import homePage from './home.page';
import registrationPage from 'cypress/pom/registration.page';
import assertionText from "cypress/helpers/assertionText";
import loginPage from './login.page';
import months from 'cypress/helpers/months';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    searchField: '#header-search-input',
    searchFieldMobile: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    searchIconMobile: '.b-search_toggle-icon',
    searchFieldCloseMobile: '.b-search_input-close',
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToCartMobile: '[data-id="addToCart"]',
    minicartIcon: '[data-tau="header_minicart"]',
    viewCart: '[data-tau="minicart_start_open_cart_bottom"]',
    productsList: '.b-product_tile',
    colourSelectionBtn: '.b-variation_swatch-color_value:visible',
    sizeSelectionBtn: '.b-variation_swatch-value_text:visible',
    productGrid: "div#product-grid",
    cartCheckoutButtonTop: '[data-tau="cart_top_section"] [data-tau="start_checkout_bottom"]',
    creditCard: 'button#payment-button-scheme > .b-payment_accordion-icon',
    guestCheckoutEmail: '[data-tau="guest_checkout_email"]',
    guestCheckoutButton: '[data-tau="guest_checkout_submit"]',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '[data-tau="profile_customer_yearOfBirth"]',
    dobForm: '.form-birthday-rows-inner',
    addShippingAddress: '.b-address_selector-button.b-button.m-info',
    AvailabilityText: '.b-availability-status',
    wishlistProductName: '[data-tau="product_details_name"]',
    wishlistLineProduct: '.b-product_tile-container',
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
    allShippingMethods: '.b-shipping_method .b-option_switch:visible',
    radioButton: ".b-option_switch-icon",
    shippingMethodName: "[data-tau='shipping_name']",
    orderSummaryShippingMethod: "[data-tau='summary_shipping']",
    editButton: '.b-summary_order-header a',
    removeItemButton: '.b-cart_product-remove',
    emptyCart: ".b-cart_empty-title",
    viewCartBtn: '[data-tau="minicart_start_open_cart_bottom"]',
    basketItemCount: 'span.b-minicart_icon-qty',
    removeItemFromCartBTN: `button[title='Remove']`,
    closeMiniCartBTN: '.b-minicart-header [title="Close"]',
    removeItemFromCartBTNFR: '[data-tau="minicart_product_remove"]',
    removeItemFromCartBTNDE: '[data-tau="cart_product_remove"]',
    removeItemFromCartBTNES: '.b-cart_product-remove',
    removeItemFromCartBTNIT: '.b-minicart_product-remove_btn'
  },
  'nastygal.com': {
    wishListIcon: '.l-header-inner > .l-header-right span.b-header_wishlist-icon',
    searchField: '#header-search-input',
    searchFieldMobile: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    searchIconMobile: '.b-search_toggle-icon',
    searchFieldCloseMobile: '.b-search_input-close',
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToCartMobile: '[data-id="addToCart"]',
    minicartIcon: '[data-tau="header_minicart"]',
    viewCart: '[data-tau="minicart_start_open_cart_bottom"]',
    productsList: '.b-product_tile',
    colourSelectionBtn: '.b-product_details-variations > .m-color > .b-variations_container > .b-variations_item-content:visible',
    sizeSelectionBtn: '.b-variation_swatch-value_text:visible',
    productGrid: "div#product-grid",
    cartCheckoutButtonTop: '[data-tau="cart_top_section"] [data-tau="start_checkout_bottom"]',
    creditCard: 'button#payment-button-scheme > .b-payment_accordion-icon',
    guestCheckoutEmail: '[data-tau="guest_checkout_email"]',
    guestCheckoutButton: '[data-tau="guest_checkout_submit"]',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '[data-tau="year_of_birth"]',
    dobForm: '.form-birthday-rows-inner',
    addShippingAddress: '.b-address_selector-button.b-button.m-info',
    AvailabilityText: '.b-availability-status',
    wishlistProductName: '[data-tau="product_details_name"]',
    wishlistLineProduct: '.b-product_tile-container',
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
    allShippingMethods: '.b-shipping_method .b-option_switch:visible',
    radioButton: ".b-option_switch-icon",
    shippingMethodName: "[data-tau='shipping_name']",
    orderSummaryShippingMethod: "[data-tau='summary_shipping']",
    editButton: '.b-summary_order-header a',
    removeItemButton: '.b-cart_product-remove',
    emptyCart: ".b-cart_empty-title",
    viewCartBtn: '[data-tau="minicart_start_open_cart_bottom"]',
    basketItemCount: 'span.b-minicart_icon-qty',
    removeItemFromCartBTN: `button[title='Remove']`,
    removeItemFromCartBTNFR: '[data-tau="minicart_product_remove"]',
    closeMiniCartBTN: '.b-minicart-header [title="Close"]',
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
    availableSizes: '.flex.flex-wrap.mb-2 button.flex:not(.PDPSizes_isOutOfStock__02GEZ)',
    guestCheckoutEmail: '#customer-email',
    guestCheckoutButton: 'form > .btn',
    proceedToShippingPage: '.c-button--large',
    wishlistProductName: '#pdp-name',
    wishlistLineProduct: '.wishlist-item',
    viewCartBtn: '[data-testid="cartCount"]'
  },
  'karenmillen.com': {
    minicartIcon: '.mini-cart-link',
    searchIcon: '.js-search-icon',
    searchField: '.js-header-search-input',
    productsList: '.product-tile',
    productGrid: ".search-results-container",
    colourSelectionBtn: "[class='swatches color clearfix'] span",
    sizeSelectionBtn: "[class='swatches size clearfix'] span",
    addToCart: '#add-to-cart',
    addToCartMobile: '#add-to-cart',
    AvailabilityText: '.availability-msg-title',
    cartCheckoutButtonTop: '[name="dwfrm_cart_checkoutCart"]',
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    guestCheckoutButton: '.login-page-guest-button',
    guestCheckoutButtonNonUK: "[name='dwfrm_login_unregistered']",
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    shippingEmail: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    wishlistProductName: '.product-name.hidden-on-mobile.js-product-name',
    wishlistLineProduct: '.product-list-item',
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
    privacyNotice: '[title="Privacy Notice"]',
    privacyNoticePageHeading: '.content-asset.cs-privacy-policy > h1',
    allShippingMethods: "[data-cmp='ShippingMethodModals'] .js-delivery-row",
    radioButton: ".input-radio",
    shippingMethodName: ".shipping-method-name",
    orderSummaryShippingMethod: ".order-shipping",
    editButton: '[class="section-header-note js-edit-cart-summary"]',
    removeItemButton: '[class="item-actions-icon icon-remove"]',
    emptyCart: ".cart-empty-title",
    viewCartBtn: '[title="Go to Bag"]',
    viewCartBtnNonUK: '.mini-cart-link-cart',
    basketItemCount: 'span#js-minicart-quantity',
    removeItemFromCartBTN: '.mini-cart-edit-buttons > button',
  }

};
let breakLoop: boolean = false
let count: number = 1;
class e2ePage {

  goto() {
    if (brand == 'nastygal.com') {

      // Cy.intercept(/newsletter/i, []); // Stops nastygal newsletter popup
    }
    if ((brand == 'karenmillen.com') && locale == 'EU') {
      cy.setCookie('dw_locale', 'default');

      // It needs to be set again when linking to another page.
    }
    cy.visit(url);
  }

  addProductToShippingPage() {
    const randomItem = this.selectRandomProduct()
    this.findItem(randomItem)
    this.assertProductsFound()
    this.selectProduct()
    if (brand == 'boohooman.com') {
      this.SelectSize()
    } else {
      cy.wait(3000)
      this.selectAvailableColour()
    }

    this.addToCart()
    this.proceedToCheckout()
  }
  addProductToCartPage() {
    const viewCartBtn = selectors[brand].viewCartBtn;
    const viewCartBtnNonUK = selectors[brand].viewCartBtnNonUK;
    const randomItem = this.selectRandomProduct()
    this.findItem(randomItem)
    this.assertProductsFound()
    this.selectProduct()
    if (brand == 'boohooman.com') {
      this.SelectSize()
    } else {
      cy.wait(3000)
      this.selectAvailableColour()
    }

    this.addToCart();
    if (brand == 'karenmillen.com' && (locale == 'IE' || locale == 'EU' || locale == 'US')) {
      cy.wait(3000)
      cy.get(viewCartBtnNonUK).invoke('show').click({ force: true })
    } else {
      cy.get(viewCartBtn).invoke('show').click({ force: true })
    }
    cy.wait(5000);
  }
  selectRandomProduct() {
    const searchProduct = ["TOPS", "Shirt", "Jeans", "Shoes"];
    const randomItem = searchProduct[Math.floor(Math.random() * searchProduct.length)];
    return randomItem
  }
  findItem(item: string) {
    const searchField = selectors[brand].searchField;
    const searchIcon = selectors[brand].searchIcon;
    if (brand != 'boohooman.com') {
      cy.get(searchIcon).click({ force: true });
    }
    cy.get(searchField).clear({ force: true }).type(item + '{enter}', { force: true });
  }
  assertProductsFound() {
    const productsList = selectors[brand].productsList;
    const productGrid = selectors[brand].productGrid;

    cy.get("body", { timeout: 10000 }).then($body => {
      if ($body.find(productGrid).length > 0) {
        //evaluates as true if button exists at all
        cy.get(productGrid).then($plp => {
          if ($plp.is(':visible')) {
            cy.get(productsList).should('be.visible')
          }
        });
      } else {
        const randomItem = this.selectRandomProduct()
        this.findItem(randomItem)
        this.assertProductsFound()
        cy.get(productsList).should('be.visible')
      }
      cy.storeCurrentUrl();
    });

  }

  selectProduct() {
    const productsList = selectors[brand].productsList;
    cy.get(productsList).its('length')
      .then((allProduct) => Cypress._.random(0, allProduct - 1))
      .then((index) => {
        cy.get(productsList).eq(index).click({ multiple: true })
      })
  }

  selectAvailableColour() {
    const colourSelectionBtn = selectors[brand].colourSelectionBtn;
    cy.get(colourSelectionBtn).its('length').then(length => {
      cy.get(colourSelectionBtn).each((count, indexOuter) => {
        cy.then(() => {
          if (breakLoop) {
            return false; // Breaks out of the outer loop if In stock item found
          }
          cy.wait(2000)
          if (brand == 'karenmillen.com' && indexOuter == 0 && cy.get('[class*="variation-value selectable selected"] .swatchanchor-img')) {
            cy.log("Not clicking on First color swatch to prevent deselection")
          }
          else {
            cy.get(colourSelectionBtn).eq(indexOuter).click({ force: true });
          }
          cy.wait(2000)
          this.selectAvailableSize()
        })
        cy.then(() => {
          if (!breakLoop && indexOuter == length - 1) {
            cy.log('Item is out of Stock or Limited stock Available')
            const randomItem = this.selectRandomProduct();
            cy.navigateToStoredUrl();
            this.selectProduct()
            this.selectAvailableColour()
          }
        })
      })
    })
  }
  selectAvailableSize() {
    const sizeSelectionBtn = selectors[brand].sizeSelectionBtn;
    const AvailabilityText = selectors[brand].AvailabilityText;
    cy.get(sizeSelectionBtn).each((item, indexInner) => {
      cy.then(() => {
        if (breakLoop) {
          return false; // Breaks out of the inner loop if In stock item found
        }
        cy.wait(2000)
        cy.get(sizeSelectionBtn).eq(indexInner).click({ force: true })
        cy.wait(2000)

        cy.get('body').then($body => {
          if ($body.find(AvailabilityText).length > 0) {
            cy.get(AvailabilityText).invoke('text').then($text => {
              const value = $text.trim()
              let text;
              if (brand == 'karenmillen.com') {
                text = /This is/gi.exec(value);
              } else {
                let pattern;
                if(brand == 'nastygal.com') {
                  pattern = assertionText.inStockArkadia[language]; // String pattern to search for
                } else {
                  pattern = assertionText.inStock[language]; // String pattern to search for
                }
                const flags = 'gi'; // Flags for global and case-insensitive search
                const regex = new RegExp(pattern, flags); // Creating a regular expression object

                text = regex.exec(value);
              }
              if (text) {
                assert.ok(value)
                breakLoop = true
              }
            })
          }
        })
      });
    })
  }

  verifyCartIsEmpty() {
    const minicartIcon = selectors[brand].minicartIcon;
    const basketItemCount = selectors[brand].basketItemCount;
    const removeItemFromCartBTN = selectors[brand].removeItemFromCartBTN;
    const removeItemFromCartBTNFR = selectors[brand].removeItemFromCartBTNFR;
    const closeMiniCartBTN = selectors[brand].closeMiniCartBTN;
    const removeItemFromCartBTNDE = selectors[brand].removeItemFromCartBTNDE;
    const removeItemFromCartBTNES = selectors[brand].removeItemFromCartBTNES;
    const removeItemFromCartBTNIT = selectors[brand].removeItemFromCartBTNIT;

    cy.get('body').then(($body) => {
      if ($body.find(basketItemCount).length > 0) {
        if (brand == 'karenmillen.com') {
          if ($body.find(removeItemFromCartBTN).length > 0) {
            cy.get(minicartIcon).trigger('mouseover').wait(2000)
            cy.get(removeItemFromCartBTN).click({ multiple: true })
          } else {
            cy.log('KM Cart is empty')
          }
        } else {
          cy.get(minicartIcon).click({ force: true }).wait(4000)
          if ((brand == 'boohoo.com' || brand == 'nastygal.com') && (locale == 'FR' || locale == 'NL')) {
            cy.get(removeItemFromCartBTNFR).click({ multiple: true })
          } else if (brand == 'boohoo.com' && (locale == 'DE' || locale == 'SE')) {
            cy.get(removeItemFromCartBTNDE).click({ multiple: true })
          } else if (brand == 'boohoo.com' && (locale == 'IT')) {
            cy.get(removeItemFromCartBTNIT).click({ multiple: true })
          } else if (brand == 'boohoo.com' && (locale == 'ES')) {
            cy.get(removeItemFromCartBTNES).click({ multiple: true })
          } else {
            cy.get(removeItemFromCartBTN).click({ multiple: true })
          }
          cy.wait(3000)
            .get(closeMiniCartBTN).click({ force: true })
        }
      } else {
        cy.log('Cart is empty')
      }
    })
  }

  addToCart() {
    const addToCart = selectors[brand].addToCart;
    const addToCartMobile = selectors[brand].addToCartMobile;

    cy.then(() => {
      breakLoop = false;
      this.verifyCartIsEmpty()
      if (isMobileDeviceUsed) {
        cy.get('body').then(($body) => {
          if ($body.find(addToCartMobile).length > 0) {
            if (brand == 'boohoo.com' && locale == 'FR'){
              cy.get(addToCartMobile).invoke('show').eq(1).click({ force: true });  // For BHO FR mobile if multiple:true is added or index is 0, premier gets added to cart
            } else {
              cy.get(addToCartMobile).invoke('show').click({ force: true });
            }
            
          } else {
            cy.navigateToStoredUrl()
            this.selectProduct()
            this.selectAvailableColour()
            cy.get(addToCartMobile).invoke('show').click({ force: true });
          }
        }
        )
      } else {
        cy.get(addToCart).invoke('show').click({ force: true });
      }
    })
    cy.wait(4000)
  }

  proceedToCheckout() {
    const cartCheckoutButtonTop = selectors[brand].cartCheckoutButtonTop;
    cy.wait(3000)
    if (brand == 'boohooman.com') {
      cy.visit(url + '/checkout/cart')
    } else {
      cy.visit(url + '/cart')
    }
    cy.get(cartCheckoutButtonTop).click({ force: true });
  }
  checkoutGuestemail(email: string) {
    const guestCheckoutEmail = selectors[brand].guestCheckoutEmail;
    const guestCheckoutButton = selectors[brand].guestCheckoutButton;
    const guestCheckoutButtonNonUK = selectors[brand].guestCheckoutButtonNonUK;

    if (brand == 'boohooman.com' && locale == 'IE') {
      cy.get('#onetrust-accept-btn-handler').click() // accept cookie
    }

    cy.wait(3000)
    if (brand == 'karenmillen.com' && (locale != 'UK')) {
      cy.get(guestCheckoutButtonNonUK).click()
    } else {
      cy.get(guestCheckoutEmail).type(email)
        .get(guestCheckoutButton).click()
    }
  }
  billingPage(email: string) {
    const addShippingAddress = selectors[brand].addShippingAddress;
    const primaryAddress = addresses.getAddressByLocale(locale, 'primaryAddress');
    const confirmEmail = selectors[brand].confirmEmail;
    const shippingEmail = selectors[brand].shippingEmail;
    const shippingCountry = selectors[brand].shippingCountry;

    cy.get("body", { timeout: 10000 }).then(($body) => {
      if ($body.find(addShippingAddress).length > 0) {
        cy.get(addShippingAddress).click()
      }
    })
    shippingPage.actions.firstNameField(primaryAddress.firstName);
    shippingPage.actions.lastNameField(primaryAddress.lastName);
    shippingPage.actions.selectCountry(primaryAddress.country);
    shippingPage.actions.phoneNumberField(primaryAddress.phone);
    cy.wait(5000);
    shippingPage.click.addAddressManually();
    if (brand == 'boohooman.com' && locale == 'IE') {
      shippingPage.actions.selectDate('17', '08', '1993');
    }
    shippingPage.actions.adressLine1(primaryAddress.addressLine);
    if (brand == 'boohooman.com') {
      shippingPage.actions.addressLine2Clear();
    }
    shippingPage.actions.cityField(primaryAddress.city);
    cy.wait(2000);
    if (locale == 'US' || locale == 'AU' || locale == 'IE' || locale == 'CA') {
      shippingPage.actions.selectState(primaryAddress.county);
    }
    if (brand == 'karenmillen.com') {
      cy.get("body").then(($body) => {
        if ($body.find(shippingEmail).length > 0) {
          cy.get(shippingEmail).clear({ force: true }).type(email);
        }
      })
      cy.get("body").then(($body) => {
        if ($body.find(confirmEmail).length > 0) {
          cy.get(confirmEmail).clear({ force: true }).type(email);
        }
      })
      cy.get(shippingCountry).select(primaryAddress.country).invoke('show');
      this.selectDate()
    }
    shippingPage.actions.postcodeField(primaryAddress.postcode);
    cy.wait(2000);
    shippingPage.click.makeShippingAddressDefault;
    if ((brand == 'karenmillen.com' && locale == 'AU') || (brand == 'boohooman.com' && locale == 'IE')) {
      shippingPage.click.proceedToBillingMouseOver();
    } else {
      shippingPage.click.proceedToBilling();
    }
    cy.wait(3000);
    shippingPage.click.proceedToBillingVerification();
    billingPage.actions.waitPageToLoad();
    if (brand == 'boohooman.com') {
      this.proceedToShippingPage();

    }
  }

  verifyShippingMethods() {
    const allShippingMethods = selectors[brand].allShippingMethods;
    const radioButton = selectors[brand].radioButton;
    const shippingMethodName = selectors[brand].shippingMethodName;
    const orderSummaryShippingMethod = selectors[brand].orderSummaryShippingMethod;
    const primaryAddress = addresses.getAddressByLocale(locale, 'primaryAddress');
    const addShippingAddress = selectors[brand].addShippingAddress;

    if (brand == 'boohoo.com' && (locale == 'AU' || locale == 'US' || locale == 'IE' || locale == 'FR' || locale == 'NL' || locale == 'NZ' || locale == 'SE' || locale == 'ES'|| locale == 'IT')) {
      shippingPage.actions.phoneNumberField(primaryAddress.phone)
    }
    cy.get(allShippingMethods).each((element) => {
      cy.wait(2000)
      cy.wrap(element).find(radioButton).click({ force: true })
      cy.wait(2000)
      cy.wrap(element).find(shippingMethodName).invoke('text').then(text => {

        if (brand == 'karenmillen.com' && locale == 'IE') {
          const textIE = text.split('-')[0];
          cy.log(textIE);
          cy.wait(2000);
          cy.get(orderSummaryShippingMethod).should('include.text', textIE.trim())
        }
        else if (brand == 'boohoo.com' && locale == 'FR') {
          const textFr = text.split('\n')[0];
          cy.log(textFr);
          cy.wait(4000);
          cy.get(orderSummaryShippingMethod).should('include.text', textFr.trim())
        }
        else {
          text = text.trim();
          cy.wait(5000)
          cy.get(orderSummaryShippingMethod).should('include.text', text.trim())
        }
      })
    })
  }

  removeItemsfromCart() {
    const editButton = selectors[brand].editButton;
    const removeItemButton = selectors[brand].removeItemButton;
    const emptyCart = selectors[brand].emptyCart;

    cy.get(editButton).click()
    cy.get(removeItemButton).each((ele, index) => {
      cy.get(removeItemButton, { timeout: 30000 }).eq(0).click({ force: true })
    })
    cy.get(emptyCart).should('be.visible')
  }

  payUsingCard() {
    const creditCard = selectors[brand].creditCard;
    cy.wait(4000) //  wait to load creditcard iframe for sitegensis brands
    const randomIndex = Math.floor(Math.random() * card.getLength());
    const randomCard = card.getCard(randomIndex);
    billingPage.actions.selectCreditCard(randomCard.cardNo, randomCard.owner, randomCard.date, randomCard.code)
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
  }
  payUsingPaypal() {
    billingPage.actions.selectPayPal();
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
  }
  selectDate() {
    const dobDate = selectors[brand].dobDate;
    const dobMonth = selectors[brand].dobMonth;
    const dobYear = selectors[brand].dobYear;
    const monthList = months.monthsMap[locale];
    const month = monthList[Math.floor(Math.random() * monthList.length)];
    // Get the current year
    const yearList = ["1950", "1960", "1970", "1980", "1990", "2000"]
    // Generate a random year between 1989 and the current year
    const year = yearList[Math.floor(Math.random() * yearList.length)];

    const day = Math.ceil(Math.random() * 10);
    cy.get("body").then(($body) => {
      if ($body.find(dobDate).length > 0) {
        cy.get(dobDate).select(day);
        if ((brand == 'nastygal.com' || brand == 'boohoo.com') && locale == 'FR') {
          cy.wait(2000);
          cy.get(dobMonth).select(month)
        } else if (brand == 'boohoo.com' && locale == 'SE') {
          cy.wait(2000);
          cy.get(dobMonth).select(month)
        } else if (brand == 'boohoo.com' && locale == 'DE') {
          cy.wait(2000);
          cy.get(dobMonth).select(month)
        } else {
          cy.get(dobMonth).select(month);
        }
        cy.get(dobYear).select(year);
      }
    })
  }
  assertItemIsAddedToWishlist() {
    const wishlistProductName = selectors[brand].wishlistProductName;
    const wishlistLineProduct = selectors[brand].wishlistLineProduct;

    cy.get(wishlistProductName).invoke('text').then((productName) => {
      homePage.click.wishListIcon();
      cy.get(wishlistLineProduct).should('contain', productName.trim())
    })
  }
  SelectSize() {
    const allSizes = selectors[brand].allSizes;
    const notAvailableSizes = selectors[brand].notAvailableSizes;
    const availableSizes = selectors[brand].availableSizes;
    cy.get(allSizes).then($body => {
      if ($body.not(notAvailableSizes).length > 0) {
        const len = $body.not(notAvailableSizes).length
        cy.log("length is : " + len)
        cy.get(availableSizes).eq(0).click()
      }
      else {
        count++;
        if (count == 10) {
          assert.fail("Item not found with a Valid quantity")

        }
        const randomItem = this.selectRandomProduct()
        this.findItem(randomItem)
        this.selectProduct()
        this.SelectSize()
      }
    })
  }
  shippingPageGuestUser(email: string) {
    this.goto();
    this.addProductToShippingPage();
    this.checkoutGuestemail(email);
  }
  shippingPageRegisteredUser(email: string, password: string, firstName: string, lastname: string) {
    this.goto();
    loginPage.click.loginIcon();
    homePage.click.registrationButton();
    registrationPage.actions.startRegistration(email);
    if (!isSiteGenesisBrand) {
      registrationPage.actions.confirmationCheckbox();
      registrationPage.assertions.assertCheckboxIsChecked();
    }
    registrationPage.actions.enterNewUserData(password, password, firstName, lastname);
    registrationPage.actions.chooseDate('23', assertionText.DOBmonth[language], '1989');
    registrationPage.click.chooseEmailConsent();
    if (brand == 'boohooman.com') {
      const primaryAddress = addresses.getAddressByLocale(locale, 'primaryAddress');
      shippingPage.actions.phoneNumberField(primaryAddress.phone);
      shippingPage.click.addAddressManually();
      shippingPage.actions.adressLine1(primaryAddress.addressLine);
      shippingPage.actions.cityField(primaryAddress.city);
      shippingPage.actions.countyField(primaryAddress.county);
      shippingPage.actions.postcodeField(primaryAddress.postcode);
    }
    registrationPage.click.submitButton();
    registrationPage.assertions.assertMyAcountPageIsOpened();
    this.addProductToShippingPage();
  }

  proceedToShippingPage() {
    const proceedToShippingPage = selectors[brand].proceedToShippingPage;
    cy.wait(3000)
    cy.get(proceedToShippingPage).click()
  }

}

export default new e2ePage();
