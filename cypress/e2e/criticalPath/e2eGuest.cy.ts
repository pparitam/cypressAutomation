import { brand, locale } from 'cypress/support/e2e';
import { faker } from '@faker-js/faker';
import e2ePage from 'cypress/pom/e2e.page';

if (locale !== 'IL') {  //TODO : Remove this condition when it swich on
  describe('e2e flow Guest user', () => {

    beforeEach(() => {
      e2ePage.goto();

      // Register with random Email
    })
    it("Order creation as a Guest user", () => {
      const email = faker.internet.email();
      context("Create order using card", () => {
        e2ePage.addProductToShippingPage();
        e2ePage.checkoutGuestemail(email);
        e2ePage.billingPage(email);
        if (brand !== 'karenmillen.com') {
          e2ePage.selectDate();
        }
        e2ePage.payUsingCard();
      })
    })
  });
}