import { isSiteGenesisBrand } from 'cypress/helpers/common';
import assertionText from '../../helpers/assertionText';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';
import { brand, language, locale } from 'cypress/support/e2e';
import { faker } from '@faker-js/faker';
import registrationPage from 'cypress/pom/registration.page';
import e2ePage from 'cypress/pom/e2e.page';
import shippingPage from 'cypress/pom/shipping.page';
import addresses from 'cypress/helpers/addresses';

if (locale !== 'IL') {  //TODO : Remove this condition when it swich on
  describe('e2e flow using registered user', () => {

    beforeEach(() => {
      //e2ePage.goto();
    })
    it("Order creation as a Registered user", () => {
      const email = faker.internet.email();
      const password = faker.internet.password({ length: 20, pattern: /^[a-zA-Z0-9_.\-@]+$/ });
      const firstName = faker.person.firstName();
      const lastname = faker.person.lastName();
      // Register with random Email
      context("Visit homepage", () => {
        e2ePage.goto();
      })
      context("Registration", () => {
        LoginPage.click.loginIcon();
        HomePage.click.registrationButton();
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
      })
      context("Search and add product to the Cart", () => {
        e2ePage.addProductToShippingPage();
        if (brand != 'boohooman.com') {
          e2ePage.billingPage(email);
        }
        e2ePage.payUsingCard();
      })
      context("Search and add product to the Cart", () => {
        if (brand == 'boohoo.com' && locale !== 'AU') {  //TODO : Remove condition for locale once paypal dev env issue sorted
          e2ePage.addProductToShippingPage();
          e2ePage.billingPage(email);
          e2ePage.payUsingPaypal();
        }
      })
    })
  });
}