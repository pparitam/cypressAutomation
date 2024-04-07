import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import WishListPage from '../../pom/wishlist.page';
import assertionText from '../../helpers/assertionText';
import pdpPage from 'cypress/pom/pdp.page';
import cartPage from 'cypress/pom/cart.page';
import { isMobileDeviceUsed, isSiteGenesisBrand } from 'cypress/helpers/common';
import { brand, fullSku, language, locale } from 'cypress/support/e2e';
import e2ePage from 'cypress/pom/e2e.page';
import loginDetails from 'cypress/helpers/loginDetails';

describe('Wishlist Page tests', function () {

  // This will execute before every single test
  beforeEach(() => {
    HomePage.goto();
    HomePage.actions.closeNastygalPopup();
    if (brand == "boohooman.com") {
      cy.fixture('users').then((credentials: LoginCredentials) => {
        LoginPage.actions.login(credentials.boohoomanUsername, credentials.boohoomanPassword);
        cy.wait(8000)
      });
    } else {
      const primaryLoginDetails = loginDetails.getLogindetailsByLocale(brand, locale, 'primaryLoginDetails');
      LoginPage.actions.login(primaryLoginDetails.Email, primaryLoginDetails.Password);
    }
    HomePage.goto(); // This is added because user is redirected to MyAccount page after login
  });

  it('CYP-215 Verify that item is saved to wishlist, can be added to cart and removed from wishlist', function () {
    HomePage.click.wishListIcon();
    WishListPage.click.removeAllItemsFromWishlist(); // Make sure wishlist is empty
    const randomItem = e2ePage.selectRandomProduct()
    e2ePage.findItem(randomItem)
    e2ePage.assertProductsFound()
    e2ePage.selectProduct()
    cy.wait(3000)
    if (brand == 'boohooman.com') {
      e2ePage.SelectSize()
    } else {
      e2ePage.selectAvailableColour()
    }
    pdpPage.click.addToWishList();

    if (brand == 'boohoo.com') {
      WishListPage.assertions.assertItemIsAddedtoWishlistAlertText(assertionText.WishlistItemsAddedAlert[language]);
    }
    e2ePage.assertItemIsAddedToWishlist()

    // Assert item can be added to cart
    WishListPage.click.addToCart();

    if (isMobileDeviceUsed && locale !== 'DE') {
      pdpPage.assertions.assertMiniCartIsDisplayed();
    }

    // Cleanup of Whishlist and Cart
    WishListPage.click.removeAllItemsFromWishlist();
    if (isSiteGenesisBrand) {
      if(brand == 'boohooman.com' && locale == 'IE') {
        WishListPage.assertions.assertWishListIsEmpty(assertionText.WishListIsEmptyBHMAN[language]);
      } else {
        WishListPage.assertions.assertWishListIsEmpty(assertionText.WishListIsEmptySiteGenesis[language]);
      }
    } else if (brand == 'boohoo.com' && locale == 'FR') {
      WishListPage.assertions.assertWishListIsEmpty(assertionText.WishListIsEmptyBH[language]);
    } else {
      WishListPage.assertions.assertWishListIsEmpty(assertionText.WishListIsEmptyBlp[language]);
    }
    cartPage.goto();
    cartPage.click.clearCart();
    cartPage.assertions.assertCartIsEmpty();
  });
});