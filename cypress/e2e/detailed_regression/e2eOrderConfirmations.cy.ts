import billingPage from 'cypress/pom/billing.page';
import assertionText from '../../helpers/assertionText';
import { isSiteGenesisBrand, isEUlocales } from 'cypress/helpers/common';
import { brand, language, locale } from 'cypress/support/e2e';
import e2ePage from 'cypress/pom/e2e.page';
import { faker } from '@faker-js/faker';
import loginPage from 'cypress/pom/login.page';
import homePage from 'cypress/pom/home.page';
import registrationPage from 'cypress/pom/registration.page';

if (locale !== 'IL') {  //TODO : Remove this condition when it swich on
  if ((brand == 'boohoo.com' || brand == 'karenmillen.com' || brand == 'nastygal.com') && (locale != 'EU' && locale != 'ES')) {
    describe('Order confirmation page for guest user', function () {
      beforeEach(() => {
        e2ePage.goto();
        const email = faker.internet.email();
        e2ePage.addProductToShippingPage();
        e2ePage.checkoutGuestemail(email);
        e2ePage.billingPage(email);
      })

      it('Verify that guest user can place order using Klarna', function () {
        const isKlarnaLocale = (isEUlocales && locale != 'IL') || (brand == 'karenmillen.com' && locale == 'EU') || locale == 'AU' || locale == 'US';
        if ((brand == 'nastygal.com' || brand == 'boohoo.com') && (locale == 'CA' || locale == 'NZ' || locale == 'ES')) { // No account for ES locale
          this.skip()
        }
        if (isKlarnaLocale) {
          if (!isSiteGenesisBrand) {
            billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
          }
          billingPage.actions.selectKlarna();

          billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
        }
      });
      it('Verify that guest user can place order using ClearPay', function () {
        const isClearpayLocale: boolean = brand != 'karenmillen.com' && (locale == 'UK' || locale == 'IT'); // Clearpay not available on FR at the moment
        if (isClearpayLocale) {
          if (!isSiteGenesisBrand) {
            billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
          }
          billingPage.actions.selectClearpay();
          billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
        } else {
          this.skip();
        }
      });

      // US and CA has no valid account
      it('Verify that guest user can place order using AfterPay', function () {
        const isAfterPayLocale: boolean = locale == 'NZ'; // For now there is no AfterPay credential for AU. So just skipping the test.
        if (isAfterPayLocale) {
          billingPage.actions.selectPriceBetween35and150();
          if (!isSiteGenesisBrand) {
            billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
          }
          billingPage.actions.selectAfterPay();
          billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
        } else {
          this.skip();
        }
      });
    });

    describe('Order confirmation page for registered user', function () {

      beforeEach(() => {
        e2ePage.goto();
        const email = faker.internet.email();
        const password = faker.internet.password({ length: 20, pattern: /^[a-zA-Z0-9_.-@]/ });
        const firstName = faker.person.firstName();
        const lastname = faker.person.lastName();
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
        registrationPage.click.submitButton();
        registrationPage.assertions.assertMyAcountPageIsOpened();
        e2ePage.addProductToShippingPage();
        e2ePage.billingPage(email, "United Kingdom");
      })

      it('Verify that registered user can place order using Klarna', function () {
        const isKlarnaLocale = (isEUlocales && locale != 'IL') || (brand == 'karenmillen.com' && locale == 'EU') || locale == 'AU' || locale == 'US';
        if ((brand == 'nastygal.com' || brand == 'boohoo.com') && (locale == 'CA' || locale == 'NZ' || locale == 'ES') || (brand == 'nastygal.com' && locale == 'FR')) { // No account for ES locale
          this.skip()
        }
        if (isKlarnaLocale) {
          billingPage.actions.selectKlarna();
          billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
        }
      });
      it('Verify that registered user can place order using ClearPay', function () {
        const isClearpayLocale: boolean = brand != 'karenmillen.com' && (locale == 'UK' || locale == 'IT'); // Clearpay not available on FR at the moment
        if (isClearpayLocale) {
          billingPage.actions.selectClearpay();

          billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
        } else {
          this.skip();
        }
      });

      // US and CA has no valid account
      it('Verify that registered user can place order using AfterPay', function () {
        const isAfterPayLocale: boolean = locale == 'NZ'; // For now there is no AfterPay credential for AU. So just skipping the test.
        if (isAfterPayLocale) {
          billingPage.actions.selectPriceBetween35and150();
          billingPage.actions.selectAfterPay();

          billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
        } else {
          this.skip();
        }
      });
    });
  }
} else {
  describe('Order confirmation is unavailable for IL and EU locales', function () {
    it('Verify that the test is skipped for ES locales, EU locales, US loceles, IL loceles and CA locales', function () {
      cy.log('ClearPay, AfterPay, and Klarna are not available for ES locales, EU locales, US loceles, IL loceles and CA locales')
    });
  })
}