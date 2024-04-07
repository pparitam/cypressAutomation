import { isSiteGenesisBrand, isMobileDeviceUsed } from 'cypress/helpers/common';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import { brand, locale, fullSku, language } from 'cypress/support/e2e';
import assertionText from 'cypress/helpers/assertionText';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    searchField: '#header-search-input',
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToWishListButton: '.m-outline > span',
    shippingInfoButton: '#product-details-btn-shipping',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline', // Changed for billing page - should checknp
    selectColor: '.b-product_details-variations > .m-swatch.m-color button',
    sizeVariations: '.b-product_details-variations > .m-size',
    productTitle: '#editProductModalTitle',
    productTitleMobile: '#editProductModalTitle',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner',
    miniCartContent: '.b-minicart-inner',
    miniCartProductIner: '.b-minicart_product-inner',
    miniCartProductInerMobile: '',
    miniCartProductTitle: '[data-tau="global_alerts_item"]',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productDeliveryNonUKLocale: '.b-product_shipping-delivery',
    productDeliveryOptions: 'a[data-event-click="loadDeliveryList"]',
    productReturnsDescription: '.b-product_shipping-returns',
    productReturnsInfoButton: '#product-details-btn-shipping',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    addedToWishlistMsg: '.b-message , .b-global_alerts-item',
    wishListIcon: '.b-header_wishlist',
    cartValidation: '.b-product_actions-error_msg',
    checkoutBtn: '/checkout-login',
    sizeGuidePdp: '[data-ref="productForm"] .b-size_guide_link-text',
    sizeGuidePdpIsDisplayed: '.b-dialog-header',
    sizeGuidePdpCms: '.b-size_type-switcher > div > span:nth-of-type(2)',
    sizeGuidePdpTable: '.b-custom_table-cell',
    howToMeasurePdp: 'button#product-details-btn > .b-icon_chevron',
    howToMeasurePdpContent: '.b-measure_tips-subheader',
    usCaLocale: '[id="US/CA"]',
    ausNzLocale: '[id="AUS/NZ"]',
    deLocale: '[id="DE"]',
    itLocale: '[id="IT"]',
    frLocale: '[id="FR"]',
    moreInfoKlarna: '[data-id="klarnaPdpCalculation"] > .b-payment_breakdown-text > a',
    moreInfoPaypal: '[data-id="paypalPdpCalculation"] > .b-payment_breakdown-text > a',
    moreInfoClearPay: '[href="https://uk-dwstg.boohoo.com/page/clearpay.html?payment_calc"]',
    moreInfoAfterPay: '[data-id="afterpayPdpCalculation"] > .b-payment_breakdown-text > .b-payment_breakdown-item_link',
    colourSelectionBtn: '.b-variation_swatch-color_value:visible',
    sizeSelectionBtn: '.b-variation_swatch-value_text:visible'
  },
  'nastygal.com': {
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToWishListButton: '.b-product_wishlist-button',
    returnLink: 'a[href="https://us1-dev.nastygal.com/eu/page/returns-and-refunds-customer-service.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '[data-tau="header_minicart"]',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.b-product_details-variations > .m-swatch.m-color button',
    sizeVariations: '.b-product_details-variations > .m-size',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner',
    miniCartContent: '.b-minicart-inner',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    productReturnsInfoButton: '#product-details-btn-shipping',
    productTitle: '#editProductModalTitle',
    productTitleMobile: '#editProductModalTitle',
    shippingInfoButton: '.b-product_delivery-link',
    addedToWishlistMsg: '.b-message',
    productDeliveryInfo: '.b-product_delivery',
    wishListIcon: '.b-header_wishlist',
    cartValidation: '.b-product_actions-error_msg',
    disabledAddToCart: '[data-widget="processButton"]',
    miniCartProductTitle: '[data-tau="global_alerts_item"]',
    moreInfoKlarna: '[data-id="klarnaPdpCalculation"] .b-payment_breakdown-item_link',
    moreInfoPaypal: '.b-payment_breakdown-item a[href*="paypal"]',
    moreInfoPaypalAU: '[data-id="paypalPdpCalculation"] > .b-payment_breakdown-item_link',
    moreInfoClearPay: '[data-id="clearpayPdpCalculation"] > .b-payment_breakdown-item_link',
    moreInfoAfterPay: '[data-id="afterpayPdpCalculation"] > .b-payment_breakdown-item_link',
  },
  'boohooman.com': {
    searchField: '#header-search-input',
    addToCart: '#add-to-cart',
    addToWishListButton: '#add-to-wishlist',
    shippingInfoButton: '#product-delivery-info-tab',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    deselectSize: '[class="swatches size clearfix"] li:eq(0)',
    deselectSizeIE: '#add-to-cart',
    selectColor: '.swatches.color',
    sizeVariations: '.swatches.size',
    productTitle: '.product-detail > h1.product-name',
    productCode: '.product-number > [itemprop="sku"]',
    productPrice: '.product-price',
    colorSwatches: '.swatches.color',
    productImage: '#product-image-0',
    addToCartTitle: '.mini-cart-header-product-added',
    miniCartContent: '[data-testid="cartCount"]',
    miniCartProductIner: '.mini-cart-content-inner',
    productDescription: '#ui-id-2 > p',
    productDelivery: '.del-table',
    productReturnsInfoButton: '#product-returns-info-tab .js-global-accordion-header',
    productReturnsDescription: '#ui-id-5',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '#ui-id-4',
    productDeliveryInfoButton: '#product-delivery-info-tab .js-global-accordion-header',
    productReturnsInfo: '#ui-id-6',
    premierBanner: '#pdp-premier',
    addToCartPremierBanner: '[data-replace-link=".js-premier-box-link"]',
    moreInfoKlarna: '.js-calculation-content > .js-pdp-calculations-klarna > u',
    moreInfoPaypal: '.js-calculation-content > .js-pdp-calculations-paypal u',
    moreInfoClearPay: '[href="https://uk-dwstg.boohoo.com/page/clearpay.html?payment_calc"]',
    moreInfoAfterPay: '.js-calculation-content > .js-pdp-calculations-afterpay > u',
    editInventory: '.inventory',
    editQuantityBox: 'input#Quantity',
    errorMsgForMoreThanFiveDiscountedItems: '#Quantity-error',
  },
  'karenmillen.com': {
    searchField: '#header-search-input',
    addToCart: '#add-to-cart',
    addToWishListButton: '[data-action="wishlist"]',
    shippingInfoButton: '#product-details-btn-shipping',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    miniCartProductIner: '[class="mini-cart-content-inner js-mini-cart-content-inner"]',
    selectColor: '.swatches.color',
    sizeVariations: '.swatches.size',
    productTitle: '.product-detail > h1.product-name',
    productTitleMobile: '.product-col-1 > .product-name',
    productCode: '.product-number > [itemprop="sku"]',
    productPrice: '.product-price',
    colorSwatches: '.swatches.color',
    productImage: '#product-image-0',
    addToCartTitle: '.mini-cart-header-text',
    miniCartContent: '.mini-cart-header-text',
    productDescription: '#ui-id-2 > p',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '#ui-id-5',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '#product-delivery-info-tab',
    productDeliveryInfoMobile: '#product-delivery-info-tab',
    productDeliveryInfoButton: '#product-delivery-info-tab .js-global-accordion-header',
    productReturnsInfoButton: '#product-returns-info-tab > .js-global-accordion-header',
    productReturnsInfo: '#product-returns-info-tab',
    premierBanner: '#pdpMain .banner-wrapper',
    moreInfoKlarna: '.js-calculation-content > .js-pdp-calculations-klarna u',
    moreInfoPaypal: '.js-calculation-content > .js-pdp-calculations-paypal u',
    moreInfoClearPay: '.js-calculation-content > .js-pdp-calculations > a u',
    moreInfoAfterPay: '.js-calculation-content > .js-pdp-calculations > a > u',

  }
};
let breakLoop: boolean = false
class PdpPage implements AbstractPage {
  goto(): void {
    homePage.goto();
  }

  click = {

    addToCart() {
      cy.wait(4000); // Need to keep this wait as it needed
      const addToCart = selectors[brand].addToCart;
      cy.get(addToCart).invoke('show').click({ force: true });
    },
    addToWishList() {
      const addToWishListButton = selectors[brand].addToWishListButton;
      if (brand == 'karenmillen.com') {
        cy.get(addToWishListButton).invoke('removeAttr', 'disabled').as('addToWishListButton'); // Due to bug in MP added this command
        cy.get('@addToWishListButton').click({ force: true });
      } else {
        cy.waitUntil(() => {
          return cy.get(addToWishListButton, { timeout: 4000 }).invoke('show').click({ force: true });
        });
      }
    },
    shippingInfoButton() {
      const shippingInfoButton = selectors[brand].shippingInfoButton;
      cy.get(shippingInfoButton).click();
    },
    returnLink() {
      const returnLink = selectors[brand].returnLink;
      cy.get(returnLink).invoke('removeAttr', 'target').click();
    },
    shopNowLinkNL() {
      const shopNowLinkNL = selectors[brand].shopNowLinkNL;
      cy.get(shopNowLinkNL).invoke('removeAttr', 'target').click();
    },
    shopNowLinkSA() {
      const shopNowLinkSA = selectors[brand].shopNowLinkSA;
      cy.get(shopNowLinkSA).invoke('removeAttr', 'target').click();
    },
    minicartCloseBtn() {
      const minicartCloseBtn = selectors[brand].minicartCloseBtn;
      cy.get(minicartCloseBtn).click();
    },
    miniCartIcon() {
      const miniCartIcon = selectors[brand].minicartIcon;
      cy.get(miniCartIcon).click({ force: true });
    },
    miniCartViewCartBtn() {
      const miniCartViewCartBtn = selectors[brand].miniCartViewCartBtn;
      if (!isMobileDeviceUsed) {
        cy.get(miniCartViewCartBtn).click({ force: true });
      }
    },
    wishListIcon() {
      const wishListIcon = selectors[brand].wishListIcon;
      cy.get(wishListIcon).click({ force: true });
    },
    addToCartPremier() {
      const premierBanner = selectors[brand].premierBanner;
      const addToCartPremierBanner = selectors[brand].addToCartPremierBanner;
      cy.get(premierBanner).then(($el) => {
        cy.wrap($el).find(addToCartPremierBanner).click({ force: true });
      });
    },
    premierLink(text: string) {
      const productDeliveryInfo = selectors[brand].productDeliveryInfo;
      cy.get(productDeliveryInfo).contains(text).click({ force: true });
    },
    deliveryInfo() {
      const productDeliveryInfoButton = selectors[brand].productDeliveryInfoButton;
      cy.get(productDeliveryInfoButton).click({ force: true });
    },
    returnsInfo() {
      const productReturnsInfoButton = selectors[brand].productReturnsInfoButton;
      cy.get(productReturnsInfoButton).click({ force: true });
    },
    sizeGuidePdp() {
      const sizeGuidePdp = selectors[brand].sizeGuidePdp;
      cy.get(sizeGuidePdp).click({ force: true });
    },
    sizeGuidePdpCms() {
      const sizeGuidePdpCms = selectors[brand].sizeGuidePdpCms;
      cy.get(sizeGuidePdpCms).click({ force: true });
    },
    howToMeasurePdp() {
      const howToMeasurePdp = selectors[brand].howToMeasurePdp;
      cy.get(howToMeasurePdp).click({ force: true });
    },
    paypalMoreInfo() {
      const moreInfoPaypal = selectors[brand].moreInfoPaypal;
      const moreInfoPaypalAU = selectors[brand].moreInfoPaypalAU;
      if (brand == 'nastygal.com' && locale == 'AU') {
        cy.get(moreInfoPaypalAU).invoke('removeAttr', 'target').click({ force: true });
      } else {
        cy.get(moreInfoPaypal).invoke('removeAttr', 'target').click({ force: true });
      }
    },
    klarnaMoreInfo() {
      const moreInfoKlarna = selectors[brand].moreInfoKlarna;
      cy.get(moreInfoKlarna).invoke('removeAttr', 'target').click({ force: true });
    },
    clearPayMoreInfo() {
      const moreInfoClearPay = selectors[brand].moreInfoClearPay;
      cy.get(moreInfoClearPay).invoke('removeAttr', 'target').click({ force: true });
    },
    afterPayMoreInfo() {
      const moreInfoAfterPay = selectors[brand].moreInfoAfterPay;
      cy.get(moreInfoAfterPay).invoke('removeAttr', 'target').click({ force: true });
    }
  };

  actions = {
    selectColorByIndex(index: number) {
      const selectColor = selectors[brand].selectColor;
      cy.get(selectColor).eq(index).click({ force: true });
    },
    selectColorFromSku() {
      const selectColor = selectors[brand].selectColor;
      const colorFromSku = fullSku.split('-')[1]; // Get color part from fullSku FZZ80440-157-18 => 157

      if (isSiteGenesisBrand) {
        cy.get(selectColor + ` span[data-variation-values*='backendValue": "${colorFromSku}']`).then(($element) => {
          if (!$element.parent().hasClass('selected')) { // If <li> doesn't have 'selected' class - it isn't already selected
            $element.trigger('click');
          } else if ($element.parent().hasClass('selected')) {
            cy.log('already selected');
          }
        });
      } else {
        cy.get(selectColor + `[data-tau-color-id='${colorFromSku}']`).then(($element) => {
          if (!$element.parent().hasClass('selected')) { // If <li> doesn't have 'selected' class - it isn't already selected
            $element.trigger('click');
          } else if ($element.parent().hasClass('selected')) {
            cy.log('already selected');
          }
        });
      }
    },
    selectSizeFromSku() {
      const sizeVariations = selectors[brand].sizeVariations;
      const sizeFromSku = fullSku.split('-')[2]; // Get size part from fullSku FZZ80440-106-18 => 18
      cy.wait(1000);
      if ((brand == 'boohoo.com') || (brand == 'nastygal.com')) {
        cy.get(sizeVariations + ` button[data-tau-size-id="${sizeFromSku}"]`).click({ force: true });
      } else {
        cy.get(sizeVariations + ` span[data-variation-values*='backendValue": "${sizeFromSku}']`, { timeout: 2000 }).then(($element) => {
          if (!$element.parent().hasClass('selected')) { // If <li> doesn't have 'selected' class - it isn't already selected
            $element.trigger('click', { setTimeout: 1000 });
          } else {
            if ($element.parent().hasClass('selected')) { // If <li> doesn't have 'selected' class - it isn't already selected
              cy.log('already selected');
            }
          }
        });
      }
      cy.wait(1000); // Need to put this as page need time to load

    },
    selectFirstAvailableSize() {
      const sizeVariations = selectors[brand].sizeVariations;
      if (isSiteGenesisBrand) {
        cy.get(sizeVariations).find('li').each(($element) => {
          if ($element.hasClass('selectable')) { // If size is available(selectable)
            if (!$element.hasClass('selected')) { // If size not already selected
              $element.find('span').trigger('click', { force: true });
              return false;
            }
            return false;
          }
        });
      } else {
        cy.get(sizeVariations).find('button').each(($element) => {
          if (!$element.attr('title').includes('not available')) { // If size is available
            if ($element.attr('data-attr-is-selected').includes('false')) { // If size not already selected
              $element.trigger('click');
              return false;
            }
            return false;
          }
        });
      }
    },
    miniCartProceedToCheckout() {
      const checkoutBtn = selectors[brand].checkoutBtn;
      cy.get(checkoutBtn).click({ force: true });
    },
    selectAvailableColour() {
      const colourSelectionBtn = selectors[brand].colourSelectionBtn;
      cy.get(colourSelectionBtn).each((count, indexOuter) => {
        cy.then(() => {
          if (breakLoop) {
            return false; // Breaks out of the outer loop if In stock item found
          }
          cy.wait(2000)
          cy.get(colourSelectionBtn).eq(indexOuter).click({ force: true });
          this.selectAvailableSize(count, indexOuter)
        })
      })
    },
    selectAvailableSize(count, indexOuter) {
      const sizeSelectionBtn = selectors[brand].sizeSelectionBtn;
      cy.get(sizeSelectionBtn).each((item, indexInner) => {
        cy.then(() => {
          if (breakLoop) {
            return false; // Breaks out of the inner loop if In stock item found
          }
          cy.wait(2000)
          cy.get(sizeSelectionBtn).eq(indexInner).click({ force: true })
          cy.wait(2000)

          cy.get('body').then($body => {
            if ($body.find('.b-availability-status').length > 0) {
              cy.get(".b-availability-status").invoke('text').then($text => {
                const value = $text.trim()
                if (value == `YAY! It's in stock\n            \n                YAY! It's in stock`) {
                  assert.ok(value)
                  breakLoop = true
                }
              })
            }
          })
        });
      })
    },
  };

  assertions = {
    assertProductNameIsDisplayed() {
      const productTitle = selectors[brand].productTitle;
      const productTitleMobile = selectors[brand].productTitleMobile;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {

        cy.get(productTitleMobile).should('be.visible');

        // If Desktop Device is used
      } else {
        cy.get(productTitle).should('be.visible');
      }

      // .and('include.text', productName);  // Skus are different
    },
    assertProductCodeIsDisplayed(SKU: string) {
      const productCode = selectors[brand].productCode;
      cy.get(productCode).should('be.visible').invoke('text').then(productCodeText => {
        if (brand == 'nastygal.com' && locale == 'US') {
          productCodeText = productCodeText.replace(/^/g, '');
          if (SKU.includes('-')) {
            SKU = SKU.split('-')[0];
          }
          expect(productCodeText).to.contain(SKU);
        } else {
          productCodeText = productCodeText.replace(/^#/g, '');
          if (SKU.includes('-')) {
            SKU = SKU.split('-')[0];
          }
        }
      });
    },
    assertProductPriceIsDisplayed() {
      const productPrice = selectors[brand].productPrice;
      cy.get(productPrice).should('be.visible').and('not.have.text', '0.00');
    },
    assertImageIsDisplayed(pictureId: string) {
      cy.get(pictureId).then(element => {
        cy.wrap(element).invoke('width').should('be.gt', 10);
      });
    },
    assertColorSwatchesAreVisible() {
      const colorSwatches = selectors[brand].colorSwatches;
      cy.get(colorSwatches).should('be.visible'); // Check how it works with single color
    },
    assertColorIsDisplayed(color: string) {
      const productImage = selectors[brand].productImage;
      cy.get(productImage).should('have.attr', 'src').and('include', color);
    },

    // TODO : This function is un-used but keep it commented just for investigation and future use if we can.
    // AssertSizeIsAvailable (msg: string) {
    //   Cy.get('.b-availability-status').should('contain.text', msg); // N/a need check
    // },
    assertProductIsAddedToCart(text: string) {
      const addToCartTitle = selectors[brand].addToCartTitle;
      cy.get(addToCartTitle).should('be.visible').and('contain.text', text);
    },
    assertAddToCartBtnIsNotAvailable(msg: string) {
      const addToCart = selectors[brand].addToCart;
      const cartValidation = selectors[brand].cartValidation;
      cy.get(addToCart).click({ force: true });
      cy.get(cartValidation).should('contain.text', msg);
    },
    assertAddToCartBtnDisabled() {
      if (isSiteGenesisBrand) {
        const addToCart = selectors[brand].addToCart;
        const deselectSize = selectors[brand].deselectSize;
        const deselectSizeIE = selectors[brand].deselectSizeIE;
        if (brand == 'boohooman.com' && locale == 'UK') {
          cy.get(deselectSize).click();// Deselecting Size to Disable addToCart button for BHM
        } else if (brand == 'boohooman.com' && (locale == 'IE' || locale == 'DE')) {
          cy.get(deselectSizeIE).click();
        }
        cy.get(addToCart).should('have.attr', 'disabled');
      } else {
        const disabledAddToCart = selectors[brand].disabledAddToCart;
        cy.get(disabledAddToCart).should('have.attr', 'disabled');
      }
    },
    assertMiniCartIsDisplayed() {
      const miniCartContent = selectors[brand].miniCartContent;
      const miniCartProductTitle = selectors[brand].miniCartProductTitle;

      isMobileDeviceUsed && !isSiteGenesisBrand
        ? cy.get(miniCartProductTitle).should('be.visible')
        : cy.get(miniCartContent).should('be.visible');
    },
    assertProductIsAddedToWishlist(msg: string) {
      const addedToWishlistMsg = selectors[brand].addedToWishlistMsg;
      cy.get(addedToWishlistMsg).should('contains.text', msg); //  Check how to switch between brands
    },
    assertProductDescriptionIsPresent() {
      const productDescription = selectors[brand].productDescription;
      cy.get(productDescription).should('be.visible').and('not.be.null');
    },
    assertDeliveryInfoIsDisplayed() {
      const productDelivery = selectors[brand].productDelivery;
      const productDeliveryNonUKLocale = selectors[brand].productDeliveryNonUKLocale;
      const productDeliveryOptions = selectors[brand].productDeliveryOptions;

      (brand == 'boohoo.com' && locale != 'UK')
        ? cy.get(productDeliveryNonUKLocale).should('be.visible')
        : isSiteGenesisBrand
          ? cy.get(productDelivery).should('be.visible')
          : cy.get(productDelivery).should('be.visible')
            .get(productDeliveryOptions).should('be.visible').click()
            .get(productDeliveryOptions).should('have.text', assertionText.productDeliveryOptions[language]);
    },

    assertDeliveryOptionsAreDisplayed() {
      const productDeliveryInfoButton = selectors[brand].productDeliveryInfoButton;
      const productDeliveryInfoMobile = selectors[brand].productDeliveryInfoMobile;

      if (isMobileDeviceUsed) {
        cy.get(productDeliveryInfoMobile).should('be.visible');
      } else {
        cy.get(productDeliveryInfoButton).should('be.visible');

      }
    },
    assertReturnInfoIsDisplayed() {
      const productReturnsInfoButton = selectors[brand].productReturnsInfoButton;
      const productReturnsDescription = selectors[brand].productReturnsDescription;
      const productReturnsDescriptionMobile = selectors[brand].productReturnsDescriptionMobile;

      if (isSiteGenesisBrand) {
        cy.get(productReturnsInfoButton).click({ force: true });
      }

      // If Mobile Device is used
      if (brand !== 'boohoo.com' && isMobileDeviceUsed) {
        cy.get(productReturnsInfoButton).click({ force: true });
      }
      cy.get(productReturnsDescription).should('be.visible');

    },
    assertStartReturnPageIsDisplayed() {

      // Temp: const returnLink = selectors[variables.brand].returnLink;
      cy.url().should('include', 'returns'); //  Need to be change
    },
    assertCompleteLookDisplayed(text: string) {
      const completeLookBox = selectors[brand].completeLookBox;
      cy.get(completeLookBox).should('have.text', text); //  Only boohoo
    },
    assertLinkNewSeasonIsLinked(text: string) {

      // Temp: const shopNowLinkNL = selectors[variables.brand].shopNowLinkNL;
      cy.url().should('include', text); //  Only boohoo brand // need to be change
    },
    assertLinkShoesAndAccIsLinked(text: string) {

      // Temp: const shopNowLinkSA = selectors[variables.brand].shopNowLinkSA;
      cy.url().should('include', text); //  Only boohoo brand //need to be change
    },
    assertPremierBannerIsVisible() {
      const premierBanner = selectors[brand].premierBanner;
      cy.get(premierBanner).then(element => {
        cy.wrap(element).invoke('width').should('be.gt', 10);
      });
    },
    assertLinkPremierIsLinked(text: string) {
      cy.url().should('include', text.toLocaleLowerCase());
    },
    assertDeliveryHereLinkIsDisplayedAndLinked(text: string) {
      const productDeliveryInfo = selectors[brand].productDeliveryInfo;
      cy.get(productDeliveryInfo).contains(text).then(($el) => {
        const hereLink = text.split(' ')[1];
        cy.wrap($el).contains(hereLink).click({ force: true });
      });
      cy.url().should('include', 'delivery');
    },
    assertReturnsHereLinkIsDisplayedAndLinked(text: string) {
      const productReturnsInfo = selectors[brand].productReturnsInfo;
      if (brand == 'boohooman.com' && (locale == 'IE' || locale == 'UK')) {
        text = 'policy here';
      }
      cy.get(productReturnsInfo).contains(text).then(($el) => {
        const hereLink = text.split(' ')[1];
        cy.wrap($el).contains(hereLink).click({ force: true });
      });
      cy.url().should('include', 'returns');
    },
    assertSizeGuidePdpIsDisplayed() {
      const sizeGuidePdpIsDisplayed = selectors[brand].sizeGuidePdpIsDisplayed;
      cy.get(sizeGuidePdpIsDisplayed).should('be.visible');
    },

    assertSizeGuidePdpCms() {
      const sizeGuidePdpTable = selectors[brand].sizeGuidePdpTable;
      cy.get(sizeGuidePdpTable).should('contain', '79');
    },
    assertSizeGuidePdpInches() {
      const sizeGuidePdpInches = selectors[brand].sizeGuidePdpInches;
      cy.get(sizeGuidePdpInches).should('have.text', '31');
    },
    assertHowToMeasurePdpDisplayed() {
      const howToMeasurePdpContent = selectors[brand].howToMeasurePdpContent;
      cy.get(howToMeasurePdpContent).should('be.visible');

    },
    assertUsCaLocaleSelected() {
      const usCaLocale = selectors[brand].usCaLocale;

      cy.get(usCaLocale).click(),
        cy.get(usCaLocale).should('be.checked');
    },
    assertausNzLocaleSelected() {
      const ausNzLocale = selectors[brand].ausNzLocale;

      cy.get(ausNzLocale).click(),
        cy.get(ausNzLocale).should('be.checked');
    },
    assertDeLocaleSelected() {
      const deLocale = selectors[brand].deLocale;

      cy.get(deLocale).click(),
        cy.get(deLocale).should('be.checked');
    },
    assertItLocaleSelected() {
      const itLocale = selectors[brand].itLocale;

      cy.get(itLocale).click(),
        cy.get(itLocale).should('be.checked');
    },
    assertFrLocaleSelected() {
      const frLocale = selectors[brand].frLocale;

      cy.get(frLocale).click(),
        cy.get(frLocale).should('be.checked');
    },
    assertKlarnaRelatedPageIsDisplayed() {
      cy.url({ timeout: 30000 }).should('include', 'klarna');
    },
    assertPaypalRelatedPageIsDisplayed() {
      cy.url({ timeout: 30000 }).should('include', 'paypal');
    },
    assertClearPayRelatedPageIsDisplayed() {
      cy.url({ timeout: 30000 }).should('include', 'clearpay');
    },
    assertAfterPayRelatedPageIsDisplayed() {
      cy.url({ timeout: 30000 }).should('include', 'afterpay');
    },
    assertErrorMsgForMoreThanFiveDiscountedItemsOnPDP(text: string) {
      const addToCart = selectors[brand].addToCart;
      const editInventory = selectors[brand].editInventory;
      const editQuantityBox = selectors[brand].editQuantityBox;
      const errorMsgForMoreThanFiveDiscountedItems = selectors[brand].errorMsgForMoreThanFiveDiscountedItems;
      cy.get(editInventory).find(editQuantityBox).last().click().clear().type(text)
        .get(addToCart).click()
        .get(errorMsgForMoreThanFiveDiscountedItems).should('be.visible').should('have.text', assertionText.errorMsgTextForMoreThanFiveDiscountedItems[language]);
    },

  };

}

export default new PdpPage();