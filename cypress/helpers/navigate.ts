import BillingPage from '../pom/billing.page';
import CheckoutPage from '../pom/checkoutLogin.page';
import HomePage from '../pom/home.page';
import LoginPage from '../pom/login.page';
import PdpPage from '../pom/pdp.page';
import shippingPage from '../pom/shipping.page';
import assertionText from './assertionText';
import Addresses from './addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import cartPage from '../pom/cart.page';
import { locale, brand, url, sku, language } from 'cypress/support/e2e';


class Navigate {

  toHomePage() {
    HomePage.goto();
  }

  toProductDetailsPage() {
    this.toHomePage();
    HomePage.actions.findItemUsingSKU(sku);
  }

  toCartPage() {
    this.toProductDetailsPage();
    PdpPage.actions.selectColorFromSku();
    PdpPage.actions.selectSizeFromSku();
    PdpPage.click.addToCart();
    cy.wait(1000); // Wait is needed otherwise test is failing
    HomePage.click.cartIcon();
  }

  toCheckoutLoginPage() {
    this.toCartPage();
    cartPage.click.proceedToCheckoutminiCart();
  }

  toShippingPage(userType: UserType) {
    this.toCheckoutLoginPage();

    // GUEST USER //
    if (userType === 'GuestUser') {
      cy.fixture('users').then((credentials: LoginCredentials) => {
        if (!isSiteGenesisBrand || (brand == 'karenmillen.com' && locale == 'UK')) {
          cy.wait(2000);
          CheckoutPage.actions.guestCheckoutEmail(credentials.guest);
          CheckoutPage.click.continueAsGuestBtn();
        } else {
          cy.wait(2000);
          CheckoutPage.click.continueAsGuestBtn();
        }
      });

      // REGISTERED USER //
    } else {
      cy.fixture('users').then((credentials: LoginCredentials) => {
        cy.wait(2000);
        CheckoutPage.actions.userEmailField(credentials.username);
        if (isSiteGenesisBrand && brand != 'boohooman.com') {
          CheckoutPage.click.continueAsRegisteredUser();
        }
        cy.wait(1000);
        CheckoutPage.actions.passwordField(credentials.password);
        CheckoutPage.click.continueAsRegisteredUser();
      });
      shippingPage.click.assertQuantityIsoneOnCart();
    }
    cy.wait(2000);
  }

  toBillingPage(userType: UserType) {
    this.toShippingPage(userType);

    // GUEST USER //
    if (userType === 'GuestUser') {
      const primaryAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
      cy.fixture('users').then((credentials: LoginCredentials) => {
        shippingPage.actions.firstNameField(primaryAddress.firstName);
        shippingPage.actions.lastNameField(primaryAddress.lastName);
        shippingPage.actions.selectCountry(primaryAddress.country);
        shippingPage.click.addAddressManually();
        shippingPage.actions.adressLine1(primaryAddress.addressLine);
        shippingPage.actions.cityField(primaryAddress.city);
        if (locale == 'US' || locale == 'AU' || locale == 'IE' || locale == 'CA') {
          shippingPage.actions.selectState(primaryAddress.county);
        }
        shippingPage.actions.postcodeField(primaryAddress.postcode);
        shippingPage.actions.phoneNumberField(primaryAddress.phone);

        if (isSiteGenesisBrand) {
          shippingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
          if (brand != 'boohooman.com') {
            shippingPage.actions.confirmEmailField(credentials.guest);
          } if ((brand == 'karenmillen.com') && (locale == 'EU' || locale == 'IE' || locale == 'AU' || locale == 'US')) {
            shippingPage.actions.emptyEmailField();
            shippingPage.actions.emailField(credentials.guest);
            shippingPage.actions.confirmEmailField(credentials.guest);
          }
          cy.wait(2000);
          shippingPage.click.proceedToBilling();
          shippingPage.click.proceedToBillingVerification();
        } else {
          shippingPage.click.proceedToBilling();
        }
        if (brand == 'nastygal.com' && locale == 'US') {// To select standard shipping method for ngal/us as default address
          cy.get('[for="shippingMethod-USUsdStandardDelivery"]').click({ force: true });
        }

        if (brand == 'boohooman.com') {
          BillingPage.actions.billingEmailField(credentials.guest);
          BillingPage.actions.billingConfirmEmailField(credentials.guest);
        }
        BillingPage.actions.waitPageToLoad();
      });

      // REGISTERED USER //
    } else {
      const primaryAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
      if (brand != 'boohooman.com') {
        shippingPage.click.addNewAddressButton();
      }
      shippingPage.actions.firstNameField(primaryAddress.firstName);
      shippingPage.actions.lastNameField(primaryAddress.lastName);
      shippingPage.actions.selectCountry(primaryAddress.country);
      shippingPage.actions.phoneNumberField(primaryAddress.phone);
      cy.wait(5000);
      shippingPage.click.addAddressManually();
      shippingPage.actions.adressLine1(primaryAddress.addressLine);
      if (brand == 'boohooman.com') {
        shippingPage.actions.addressLine2Clear();
      }
      shippingPage.actions.cityField(primaryAddress.city);
      if (locale == 'US' || locale == 'AU' || locale == 'IE' || locale == 'CA') {
        shippingPage.actions.selectState(primaryAddress.county);
      }
      shippingPage.actions.postcodeField(primaryAddress.postcode);
      cy.wait(2000);
      shippingPage.click.makeShippingAddressDefault;
      shippingPage.click.proceedToBilling();
      cy.wait(3000);
      shippingPage.click.proceedToBillingVerification();
      BillingPage.actions.waitPageToLoad();
    }
  }

  toMyAccountPage() {
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login(credentials.username, credentials.password);
    });
  }

  // NAVIGATE TO PAGES USING SESSIONS
  toCartPageUsingSession() {
    cy.session('cart-page-session', () => {
      this.toCartPage();
    });

    cy.visit(url + '/cart');
  }
 //navigate to key worker
 keyWorkerPage() {
  cy.session('key-worker-session', () => {
    this.toHomePage();
  });
  cy.visit(url + '/key-workers.html');
}

  toCheckoutLoginPageUsingSession() {
    cy.session('checkout-login-page-session', () => {
      this.toCheckoutLoginPage();
    });

    cy.visit(url + '/checkout-login');
    if ((brand == 'karenmillen.com') && locale == 'EU') {
      cy.setCookie('dw_locale', 'default');
    }
  }

  toShippingPageUsingSession(userType: UserType) {
    cy.session('shipping-page-session', () => {
      this.toShippingPage(userType);
    });

    if (isSiteGenesisBrand) {
      cy.visit(url + '/shipping');
    } else {
      cy.visit(url + '/checkout?step=shipping');
    }
  }

  toBillingPageUsingSession(userType: UserType) {
    cy.session('billing-page-session', () => {
      this.toBillingPage(userType);
    });

    if (isSiteGenesisBrand) {
      cy.visit(url + '/billing-continue');
    } else {
      cy.visit(url + '/checkout?step=billing');
    }
  }

  toMyAccountPageUsingSession() {
    cy.session('myaccount-page-session', () => {
      this.toMyAccountPage();
      cy.wait(1000);
    });
    cy.visit(url + '/myaccount');
  }

  // NAVIGATE TO PAGES USING SPLIT SHIPPING SKU
  toShippingPageWithSplitShippingSku() {
    cy.log('I am on shipping page with split shipping SKU');

    // To be completed

  }

  toOrderConfirmationPageWithSplitShippingSku() {
    cy.log('I am on order confirmation page with split shipping SKU');

    // To be completed
  }

  clearSessionCookies() {
    cy.clearCookies();
  }

}

export default new Navigate();