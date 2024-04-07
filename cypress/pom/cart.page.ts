import { isSiteGenesisBrand, isMobileDeviceUsed } from 'cypress/helpers/common';
import { brand, locale, url, language } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import assertionText from 'cypress/helpers/assertionText';
import { lastIndexOf } from 'cypress/types/lodash';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.l-cart_product-total',
    productPriceMobile: '.b-cart_product-price > .b-price > .m-new',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty_value',
    editQuantity: '[data-tau="cart_product_quantity"]',
    editQuantityBtn: '.l-cart_product-edit .b-cart_product-edit',
    editQuantityMobile: '[data-tau="cart_product_quantity"]',
    editDetailsMobile: '.b-cart_product-edit',
    updateBtnMobile: ' .b-product_update-button_update',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    premierBlock: '.m-with_actions',
    addPremierToCart: 'button[data-tau="product_addToCart"]',
    PayPalCTA: '.zoid-component-frame',
    payPalDefaultView: '0.contentDocument.defaultView',
    cartPayPalButton: '.paypal-button',
    KlarnaCTA: '#klarna-express-button-0',
    KlarnaFrame: '#klarna-express-button-fullscreen',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    proceedToCheckoutUS: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    clearCartMobile: 'button.b-cart_product-remove[title="Remove"]',
    emptyCartTitle: '.b-cart_empty-title',
    emptyCartTitleMobile: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
    itemDetails: '.item-details',
  },
  'nastygal.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.l-cart_product-total',
    productPriceMobile: '.m-total > .b-summary_table-value',
    subtotal: 'tr[class="b-summary_table-item m-total"]',
    cartQuantity: '.b-cart_product-qty_value',
    editQuantity: '[data-tau="cart_product_quantity"]',
    editQuantityBtn: '.l-cart_product-edit .b-cart_product-edit',
    editQuantityMobile: '[data-tau="cart_product_quantity"]',
    editDetailsMobile: '.b-cart_product-edit',
    updateBtnMobile: '.b-product_update-button_update',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    PayPalCTA: '.zoid-component-frame',
    payPalDefaultView: '0.contentDocument.defaultView',
    cartPayPalButton: '.paypal-button',
    KlarnaCTA: '#klarna-express-button-0',
    KlarnaFrame: '#klarna-express-button-fullscreen',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button, [data-ref="lastFocusElement"]',
    clearCart: '.b-cart_product-remove',
    clearCartMobile: '.b-cart_product-remove[title="Remove"]',
    emptyCartTitle: '.b-cart_empty-title',
    emptyCartTitleMobile: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
    premierBlock: '.b-ngvip',
    addPremierToCart: '.b-ngvip-button',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
    itemDetails: '.item-details',
  },
  'boohooman.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    productPriceMobile: '.order-value',
    subtotal: '.order-subtotal > :nth-child(2)',
    cartQuantity: '.my-2',
    editQuantity: '.cart-input-quantity',
    editQuantityMobile: '#Quantity',
    editDetailsMobile: '.item-actions-btns > .item-edit-details > .item-actions-inner > .item-actions-copy',
    updateBtnMobile: '.add-to-cart-text',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: 'div.premier-box-main',
    addPremierToCart: '#add-to-cart',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    payPalDefaultView: '0.contentDocument.defaultView',
    cartPayPalButton: '.paypal-button',
    KlarnaCTA: '#klarna-express-button-0',
    KlarnaFrame: '#klarna-express-button-fullscreen',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[aria-label="Remove item"]',
    clearCartMobile: '.item-details-container > .item-actions-btns > .remove > .item-actions-inner > .item-actions-icon',
    emptyCartTitle: '#empty-cart .items-center',
    emptyCartTitleMobile: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
    itemDetails: '.item-details',
    deliveryOptions: '.cart-delivery-table',
    updateCartCTA: '#add-to-cart',
    editCartDetailsCTA: '.item-actions-copy.edit-details-text',
    editQuantityBox: '#Quantity',
    errorMsgForMoreThanFiveDiscountedItems: '#Quantity-error',
  },
  'karenmillen.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    productPriceMobile: '.price-adjusted-total > span',
    subtotal: '.order-subtotal > :nth-child(2)',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    editQuantityBtn: '.l-cart_product-edit .b-cart_product-edit',
    editQuantityMobile: "[class='input-text'][id='Quantity']",
    editDetailsMobile: '.item-actions-btns > .item-edit-details > .item-actions-inner > .item-actions-copy',
    updateBtnMobile: '[title="Update Bag"] .add-to-cart-text',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '#cart-unlimited',
    addPremierToCart: '[data-cmp="PremierAddToCartBtn"]',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    payPalDefaultView: '0.contentDocument.defaultView',
    cartPayPalButton: '.paypal-button',
    KlarnaCTA: '#klarna-express-button-0',
    KlarnaFrame: '#klarna-express-button-fullscreen',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: 'button[name=\'dwfrm_cart_shipments_i0_items_i0_deleteProduct\'] span',
    clearCartMobile: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    emptyCartTitleMobile: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
    thrift: '#js-thrift-plus-product',
    addThriftToCartBtn: '#js-thrift-plus-add-to-bag',
    cartPage: '#wrapper',
    itemDetails: '.item-details',
    deliveryOptions: '.cart-delivery-table',
  }
};

class CartPage implements AbstractPage {
  goto(): void {
    if(brand == 'boohooman.com' && locale == 'IE') {
      cy.visit(url + '/checkout/cart');
    } else {
      cy.visit(url + '/cart');
    }
  }

  click = {
    clearCart() {
      const clearCart = selectors[brand].clearCart;
      cy.get(clearCart).each(($el) => {
        const el: any = $el;
        cy.get(el, { timeout: 20000 }).click({ force: true });
      });
    },
    removePremierFromCart() {

      // Remove everything except the first item. If there are 3 items in cart, items 2 and 3 will be removed
      const clearCart = selectors[brand].clearCart;
      cy.get(clearCart).each(($el, index) => {
        if (index > 0) {
          cy.wrap($el).click({ force: true });
        }
      });
    },
    proceedToCheckoutminiCart() {
      const proceedToCheckout = selectors[brand].proceedToCheckout;
      const proceedToCheckoutUS = selectors[brand].proceedToCheckoutUS;
      const checkoutBtnForMobile = selectors[brand].checkoutBtnForMobile;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {
        cy.get(checkoutBtnForMobile).invoke('show').click({ force: true });
        // If Desktop Device is used
      } else if (brand == 'boohoo.com' && locale == 'US') {
        cy.get(proceedToCheckoutUS).invoke('show').click({ force: true });
      } else {
        cy.wait(7000);
        cy.get(proceedToCheckout).invoke('show').click({ force: true });
      }
    },
    proceedToCheckoutCart() {
      const proceedToCheckout = selectors[brand].proceedToCheckout;
      const checkoutBtnForMobile = selectors[brand].checkoutBtnForMobile;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {
        cy.get(checkoutBtnForMobile).invoke('show').click({ force: true });

        // If Desktop Device is used
      } else {
        cy.wait(1000);
        if (brand == 'nastygal.com') {
          cy.get('[data-tau="start_checkout_bottom"]').eq(0).invoke('show').click({ force: true });
        } else {
          cy.get(proceedToCheckout).invoke('show').click({ force: true });
        }
      }
    },
    addThriftToCart() {
      const addThriftToCartBtn = selectors[brand].addThriftToCartBtn;
      cy.get(addThriftToCartBtn).click({ force: true });
    }
  };

  actions = {
    updateQuantity() {
      const editQuantity = selectors[brand].editQuantity;
      cy.get(editQuantity).should('be.visible').click();
    },
    openPayPalSandbox() {
      const payPalCTA = selectors[brand].PayPalCTA;
      const payPalDefaultView = selectors[brand].payPalDefaultView;
      const cartPayPalButton = selectors[brand].cartPayPalButton;
      cy.get(payPalCTA).its(payPalDefaultView)
        .then(win => {
          cy.stub(win, 'open');
        });
      cy.iframe(payPalCTA).find(cartPayPalButton).should('be.visible').click({ force: true });

    },
    openKlarnaSandbox() {
      const KlarnaCTA = selectors[brand].KlarnaCTA;
      const KlarnaFrame = selectors[brand].KlarnaFrame;

      // Stub the open method with just a console log to force it not to open a window.
      cy.window().then((window: Cypress.AUTWindow) => {
        cy.stub(window, 'open').callsFake(() => {
          console.log('stop this button click');
        });
      });
      cy.get(KlarnaCTA).click();
      cy.frameLoaded(KlarnaFrame);
    },
    editCartQuantity(quantity: string) {
      const editQuantity = selectors[brand].editQuantity;
      const editQuantityBtn = selectors[brand].editQuantityBtn;
      const editQuantityMobile = selectors[brand].editQuantityMobile;
      const editDetailsMobile = selectors[brand].editDetailsMobile;
      const updateBtnMobile = selectors[brand].updateBtnMobile;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {
        cy.get(editDetailsMobile).click({ force: true }); 
        cy.get(editQuantityBtn, { timeout: 30000 })
        cy.get(editQuantity).select(quantity);
        cy.get(editQuantity).blur();
        cy.wait(1000);
        cy.get('.b-product_update-button_update').click({ force: true });
        cy.wait(3000);
        
        // If Desktop Device is used
      } else {
        cy.get('body').then(body => {
          if(body.find(editQuantityBtn).length > 0) {
            cy.get(editQuantityBtn).click();
          }
        })
        cy.get(editQuantityBtn, { timeout: 30000 })
        cy.get(editQuantity).select(quantity);
        cy.get(editQuantity).blur();
        cy.wait(1000);
        cy.get('.b-product_update-button_update').click({ force: true });
        cy.wait(3000);
      }
    },

    editCartQuantitySiteGenesis(quantity: string) {
      const editQuantity = selectors[brand].editQuantity;
      const editQuantityMobile = selectors[brand].editQuantityMobile;
      const editDetailsMobile = selectors[brand].editDetailsMobile;
      const updateBtnMobile = selectors[brand].updateBtnMobile;
      const updateQuantity = selectors[brand].updateQuantity;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {
        cy.get(editDetailsMobile).click({ force: true });
        cy.wait(5000);
        cy.get(editQuantityMobile).clear({ force: true }).type(quantity,{force:true});
        cy.get(updateBtnMobile).click({ force: true });

        cy.intercept('**/cart').as('cartPage');
        cy.wait('@cartPage', { timeout: 30000 }).its('response.statusCode').should('eq', 200);

        // If Desktop Device is used
      } else {
        cy.get(editQuantity).clear().type(quantity);
        cy.get(editQuantity).blur();
        cy.wait(1000);
        if (!isSiteGenesisBrand) {
          cy.get(updateQuantity).click({ force: true });
        }
        cy.wait(3000);
      }
    }
  };

  assertions = {
    assertTableWithProductIsVisible() {
      const productsTable = selectors[brand].productsTable;
      cy.get(productsTable).should('be.visible');
    },
    assertProductImageIsDisplayed() {
      const productImage = selectors[brand].productImage;
      cy.get(productImage).then(element => {
        cy.wrap(element).invoke('width').should('be.gt', 10);
      });
    },
    assertProductTitleIsVisible() {
      const productName = selectors[brand].productName;
      cy.get(productName).should('not.be.empty');
    },
    assertProductDetailsAreVisible() {
      const productDetails = selectors[brand].productDetails;
      cy.get(productDetails).should('be.visible');
    },
    assertPriceAndSubtotalAreVisible() {

      const productPrice = selectors[brand].productPrice;
      const productPriceMobile = selectors[brand].productPriceMobile;
      const subtotal = selectors[brand].subtotal;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {

        cy.get(productPriceMobile).should('be.visible');

        // If Desktop Device is used
      } else {

        cy.get(productPrice).should('be.visible').and('not.null');
        cy.get(subtotal).should('be.visible').and('not.to.be.empty');
      }
    },
    assertQuantityIsDisplayed(quantity: string) {
      const cartQuantity = selectors[brand].cartQuantity;
      if (brand == 'karenmillen.com') {
        cy.get(cartQuantity).should('have.value', quantity);
      } else {
        cy.get(cartQuantity).should('contain', quantity);
      }
    },
    assertCartIsEmpty() {
      const emptyCartTitle = selectors[brand].emptyCartTitle;
      const emptyCartTitleMobile = selectors[brand].emptyCartTitleMobile;
      if (isMobileDeviceUsed) {
        cy.get(emptyCartTitleMobile).should('be.visible');
      } else {
        cy.get(emptyCartTitle).should('be.visible');
      }
    },
    assertPremierSlotsAreVisible() {
      const premierBlock = selectors[brand].premierBlock;
      const addPremierToCart = selectors[brand].addPremierToCart;
      cy.get('body').then((body) => {
        if (body.find(premierBlock).length > 0) {
          cy.get(premierBlock).should('be.visible')
            .get(addPremierToCart).should('be.visible');
        } else {
          cy.log('premierBlock is not visible for ' + brand + ' ' + locale);
        }
      });
    },
    assertPayPalCTAisVisible() {
      const PayPalCTA = selectors[brand].PayPalCTA;
      cy.get(PayPalCTA).should('be.visible');
    },
    assertKlarnaCTAisVisible() {
      const KlarnaCTA = selectors[brand].KlarnaCTA;
      cy.get(KlarnaCTA).should('be.visible');
    },
    assertAmazonPayCTAisVisible() {
      const AmazonCTA = selectors[brand].AmazonCTA;
      cy.get(AmazonCTA).should('be.visible');
    },
    assertThriftSectionIsVisible() {
      const thrift = selectors[brand].thrift;
      cy.get(thrift).should('be.visible');
    },
    assertThriftBagIsAddedToTheCart() {
      const cartPage = selectors[brand].cartPage;
      cy.get(cartPage).should('contain', 'Thrift Bags');
    },
    assertSelectedProductIsAddedToTheCart(text: string) {
      const itemDetails = selectors[brand].itemDetails;
      cy.get(itemDetails).should('contains', text.toLocaleLowerCase);
    },
    assertDeliveryOptionsIsVisible() {
      const deliveryOptions = selectors[brand].deliveryOptions;
      cy.get(deliveryOptions).should('be.visible');
    },
    assertErrorMsgForMoreThanFiveDiscountedItemsInCart(text: string) {
      const updateCartCTA = selectors[brand].updateCartCTA;
      const editCartDetailsCTA = selectors[brand].editCartDetailsCTA;
      const editQuantityBox = selectors[brand].editQuantityBox;
      const errorMsgForMoreThanFiveDiscountedItems = selectors[brand].errorMsgForMoreThanFiveDiscountedItems;

      cy.get(editCartDetailsCTA).contains(assertionText.editCartDetailsText[language]).click()
        .get(editQuantityBox).clear().type(text)
        .get(updateCartCTA).click()
        .get(errorMsgForMoreThanFiveDiscountedItems).should('be.visible').should('have.text', assertionText.errorMsgTextForMoreThanFiveDiscountedItems[language]);
    },

    assertCartQuantityDecreased(quantity: number) {
      const cartQuantity = selectors[brand].cartQuantity;
      if (isSiteGenesisBrand) {
        cy.get(cartQuantity).invoke('val').then(quantityValue => {
          let quantityValueNum = parseInt(String(quantityValue));
          expect(quantityValueNum).to.be.lessThan(quantity);
        })
      } else {
        cy.get(cartQuantity).invoke('text').then(quantityValue => {
          let quantityValueNum = parseInt(quantityValue);
          expect(quantityValueNum).to.be.lessThan(quantity);
        })
      }
    },


    assertCartQuantityIncreased(quantity: number) {
      const cartQuantity = selectors[brand].cartQuantity;
      if (isSiteGenesisBrand) {
        cy.get(cartQuantity).invoke('val').then(quantityValue => {
          let quantityValueNum = parseInt(String(quantityValue));
          expect(quantityValueNum).to.be.greaterThan(quantity);
        })
      } else {
        cy.get(cartQuantity).invoke('text').then(quantityValue => {
          let quantityValueNum = parseInt(quantityValue);
          expect(quantityValueNum).to.be.greaterThan(quantity);
        })
      }
    }

  };
}

export default new CartPage();