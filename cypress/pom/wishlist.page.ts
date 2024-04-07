import { brand } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import { isMobileDeviceUsed } from 'cypress/helpers/common';

const variables = Cypress.env() as EnvironmentVariables;

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span , .b-wishlist_tile-actions > button',
    removeItemFromWishlist: 'a[data-tau="wishlist_product_delete"]',
    removeItemFromWishlistMobile: '.b-wishlist_tile-sub_action[data-ref="remove"]',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-tau-product-id="product-${variables.fullSku}"]`,
    wishListIsEmpty: '.b-wishlist-empty_text',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action',
    wishListContainer: 'div[data-ref="wishlistContainer"]'
  },
  'nastygal.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span',
    wishlistLoginBtn: '.b-button',
    itemIsAddedToWishlist: `[data-tau-product-id="product-${variables.fullSku}"]`,
    confirmRemoveWishlistItem:'button[data-tau="remove_item_confirmation_confirm"]',
    wishListIsEmpty: '.b-wishlist-empty',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeDDL: '[data-id="attribute-size"] > .b-select > .b-select-input',
    removeItemFromWishlist: '.b-wishlist_tile-remove',
    removeItemFromWishlistMobile: '.b-wishlist_tile-remove',
    wishListContainer: 'div[data-ref="wishlistGrid"]'
  },
  'boohooman.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: '[data-event-action="Add To Bag"]',
    removeItemFromWishlist: '[data-name="delete"]',
    removeItemFromWishlistMobile: ':nth-child(3) > .button-text > .button-remove-text',
    confirmRemoveWishlistItem: '.cta--secondary',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-pid="${variables.fullSku}"]`,
    wishListIsEmpty: '.mx-2 > .normal-case',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action',
    wishListContainer: '.account-wishlist .content-center .flex-wrap'
  },
  'karenmillen.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'form[name="dwfrm_wishlist_items_i0"] button[class*="button-fancy-small"]',
    removeItemFromWishlist: ".hidden-on-mobile [class='button-text button-remove js-remove-from-bag']",
    removeItemFromWishlistMobile: ':nth-child(3) > .button-text > .button-remove-text',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-pid="${variables.fullSku}"]`,
    wishListIsEmpty: '.wishlist-empty-message',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action',
    wishListContainer: '.wishlist-table'
  }
};
class WishListPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {
    sortItems () {
      const sortItems = selectors[variables.brand].sortItems;
      cy.get(sortItems);
    },
    sortByDateAddedFromNew () {
      const sortByDateAddedFromNew = selectors[variables.brand].sortByDateAddedFromNew;
      cy.get(sortByDateAddedFromNew);
    },
    sortByDateAddedFromOld () {
      const sortByDateAddedFromOld = selectors[variables.brand].sortByDateAddedFromOld;
      cy.get(sortByDateAddedFromOld);
    },
    sortByPriceFromLowToHigh () {
      const sortByPriceFromLowToHigh = selectors[variables.brand].sortByPriceFromLowToHigh;
      cy.get(sortByPriceFromLowToHigh);
    },
    sortByPriceFromHighToLow () {
      const sortByPriceFromHighToLow = selectors[variables.brand].sortByPriceFromHighToLow;
      cy.get(sortByPriceFromHighToLow);
    },
    addToCart () {
      const addToCart = selectors[variables.brand].addToCart;
      cy.get(addToCart).eq(0).click({ force: true });
    },
    removeWishlistItem (itemSelector: string, confirmSelector: string) {
      cy.get(itemSelector).each(() => {
        cy.get(itemSelector).eq(0).click({ force: true });
        cy.wait(5000);
        if (brand == 'nastygal.com' || brand == 'boohooman.com') {
          cy.get(confirmSelector).click({ force: true });
          cy.wait(2000);
        }
      });
    },   
    removeAllItemsFromWishlist () {
      const removeItemFromWishlist = selectors[variables.brand].removeItemFromWishlist;
      const removeItemFromWishListMobile = selectors[variables.brand].removeItemFromWishlistMobile;
      const confirmRemoveWishlistItem = selectors[variables.brand].confirmRemoveWishlistItem;
      const wishListContainer = selectors[variables.brand].wishListContainer;
      if(brand != 'boohooman.com') {
        cy.get('body').then(($body) => {
          cy.wait(5000);
          const $itemsInWishlist = $body.find(wishListContainer); // Will be found if wishlist is not empty
          if ($itemsInWishlist.length > 0) { // If wishlist grid exists
            if (isMobileDeviceUsed) {
              this.removeWishlistItem(removeItemFromWishListMobile, confirmRemoveWishlistItem);
            } else {
              this.removeWishlistItem(removeItemFromWishlist, confirmRemoveWishlistItem);
            }
          } else {
            cy.log('Wishlist is empty - no items to delete');
          }
        });
      }
    },
    
    wishlistLoginBtn () {
      const wishlistLoginBtn = selectors[variables.brand].wishlistLoginBtn;
      cy.get(wishlistLoginBtn).eq(0).click();
    }

  };

  actions = {
  };
  assertions = {
    assertItemIsAddedToWishlist () {
      cy.reload();
      const itemIsAddedToWishlist = selectors[variables.brand].itemIsAddedToWishlist;
      cy.waitUntil(() => {
        return cy.get(itemIsAddedToWishlist, {timeout: 5000}).should('be.visible');
      });
      cy.get(itemIsAddedToWishlist)
        .parent().invoke('attr', 'style', 'display: block');
    },
    assertWishListIsEmpty (msg: string) {
      const wishListIsEmpty = selectors[variables.brand].wishListIsEmpty;
      cy.get(wishListIsEmpty)
        .parent().invoke('attr', 'style', 'display: block');
      cy.get(wishListIsEmpty).contains(msg, { matchCase: false }).should('be.visible');
    },
    assertItemIsAddedtoWishlistAlertText (msg: string) {
      const itemIsAddedtoWishlistAlertText = selectors[variables.brand].itemIsAddedtoWishlistAlertText;
      cy.waitUntil(() => {
        return cy.get(itemIsAddedtoWishlistAlertText, {timeout: 4000}).should('have.text', msg);
      });
    }
  };
}

export default new WishListPage();