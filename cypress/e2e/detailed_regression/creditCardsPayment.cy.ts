import { faker } from "@faker-js/faker";
import assertionText from "cypress/helpers/assertionText";
import card from "cypress/helpers/cards";
import { isSiteGenesisBrand } from "cypress/helpers/common";
import loginDetails from "cypress/helpers/loginDetails";
import billingPage from "cypress/pom/billing.page";
import checkoutLoginPage from "cypress/pom/checkoutLogin.page";
import e2ePage from "cypress/pom/e2e.page";
import homePage from "cypress/pom/home.page";
import loginPage from "cypress/pom/login.page";
import { brand, language, locale } from "cypress/support/e2e";

describe('Card Payment For Guest Users', function () {

    for (const cardDetails of card.getCards()) {
        const nameOfCard = cardDetails.name;

        it('Verify that guest user can place order using - ' + nameOfCard, function () {
            e2ePage.goto();
            cy.wait(3000);
            const email = faker.internet.email();
            e2ePage.addProductToShippingPage();
            e2ePage.checkoutGuestemail(email);
            e2ePage.billingPage(email);
            if (!isSiteGenesisBrand) {
                billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
            }
            billingPage.actions.selectCreditCard(cardDetails.cardNo, cardDetails.owner, cardDetails.date, cardDetails.code);
            billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
            cy.wait(3000)
        })
    }
})

describe('Card Payment For Registered Users', function () {

    for (let cardDetails of card.getCards()) {
        const nameOfCard = cardDetails.name;

        it('Verify that registered user can place order using - ' + nameOfCard, function () {
            const primaryLoginDetails = loginDetails.getLogindetailsByLocale(brand, locale, 'primaryLoginDetails');
            homePage.goto();
            homePage.actions.closeNastygalPopup();
            if (brand == "boohooman.com") {
                cy.fixture('users').then((credentials: LoginCredentials) => {
                    loginPage.actions.login(credentials.boohoomanUsername, credentials.boohoomanPassword);
                    cy.wait(8000)
                });
            } else {
                loginPage.actions.login(primaryLoginDetails.Email, primaryLoginDetails.Password);
            }
            e2ePage.addProductToShippingPage();
            checkoutLoginPage.assertions.assertUserProceededToShippingPage();
            e2ePage.billingPage(primaryLoginDetails.Email);
            billingPage.actions.selectCreditCard(cardDetails.cardNo, cardDetails.owner, cardDetails.date, cardDetails.code);
            billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
            cy.wait(3000)
        })
    }
})