import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import { locale, brand } from 'cypress/support/e2e';
import e2ePage from 'cypress/pom/e2e.page';
import addresses from 'cypress/helpers/addresses';
import shippingMethods from 'cypress/helpers/shippingMethods';
import { faker } from '@faker-js/faker';
import shippingPage from 'cypress/pom/shipping.page';
import loginDetails from 'cypress/helpers/loginDetails';

if (locale !== 'IL') {  //TODO : Remove this condition when it swich on
    describe('Shipping Page Methods tests', function () {

        // This will execute before every single test
        beforeEach(() => {
            HomePage.goto();
            const primaryLoginDetails = loginDetails.getLogindetailsByLocale(brand, locale, 'primaryLoginDetails');
            LoginPage.actions.login(primaryLoginDetails.Email, primaryLoginDetails.Password);
            HomePage.goto(); // This is added because user is redirected to MyAccount page after login
        });

        it("Verify the shipping Methods on shipping page", () => {
            e2ePage.addProductToShippingPage();
            e2ePage.verifyShippingMethods();
            e2ePage.removeItemsfromCart();
        })
    });
}

const primaryAddress = addresses.getAddressByLocale(locale, 'primaryAddress');
const evriStandart = shippingMethods.getShippingMethodByLocale(locale, 'shippingMethod2');
const evriNextDay = shippingMethods.getShippingMethodByLocale(locale, 'shippingMethod3');
const asdaNextDay = shippingMethods.getShippingMethodByLocale(locale, 'shippingMethod4');

if ((brand == 'boohoo.com' || brand == 'nastygal.com' || brand == 'karenmillen.com') && (locale == 'UK')) {
    describe('Shipping Page Guest User Test', function () {
        beforeEach(() => {
            const email = faker.internet.email();
            e2ePage.shippingPageGuestUser(email);
            shippingPage.actions.addressFormValidation();
            shippingPage.actions.selectClickAndCollectTab();
        })

        it('To validate the valid list of EVRI Stardard locations as per the postcode', function () {
            if (brand == 'nastygal.com' && locale == 'IE') {
                this.skip();
            };
            shippingPage.actions.selectShippingMethodByName(evriStandart.shippingMethodName);
            shippingPage.actions.postCodeEvri(primaryAddress.postcode);
            shippingPage.actions.selectFirstEvriPickUpAddressfromList();
            shippingPage.assertions.assertShippingMethodIsSelected(evriStandart.shippingMethodName);
        })

        it('To validate the valid list of EVRI Next Day locations as per the postcode', function () {
            cy.log('Muneeb Akhtar')
            shippingPage.actions.selectShippingMethodByName(evriNextDay.shippingMethodName);
            shippingPage.actions.postCodeEvri(primaryAddress.postcode);
            shippingPage.actions.selectFirstEvriPickUpAddressfromList();
            shippingPage.assertions.assertShippingMethodIsSelected(evriNextDay.shippingMethodName);
        })

        it('To validate the valid list of ASDA Next Day locations as per the postcode', function () {
            shippingPage.actions.selectShippingMethodByName(asdaNextDay.shippingMethodName);
            shippingPage.actions.postCodeAsda(primaryAddress.postcode);
            shippingPage.actions.selectFirstAsdaPickUpAddressFromList();
            shippingPage.assertions.assertShippingMethodIsSelected(asdaNextDay.shippingMethodName);
        })
    })
}

if ((brand == 'boohoo.com' || brand == 'nastygal.com' || brand == 'karenmillen.com') && (locale == 'UK')) {
    describe('Shipping Page Registered User Test', function () {
        beforeEach(() => {
            const email = faker.internet.email();
            const password = faker.internet.password({ length: 20, pattern: /^[a-zA-Z0-9_.-@]/ });
            const firstName = faker.person.firstName();
            const lastname = faker.person.lastName();
            e2ePage.shippingPageRegisteredUser(email, password, firstName, lastname);
            shippingPage.actions.addressFormValidation();
            shippingPage.actions.selectClickAndCollectTab();
        })

        it('To validate the valid list of EVRI Stardard locations as per the postcode', function () {
            shippingPage.actions.selectShippingMethodByName(evriStandart.shippingMethodName);
            shippingPage.actions.postCodeEvri(primaryAddress.postcode);
            shippingPage.actions.selectFirstEvriPickUpAddressfromList();
            shippingPage.assertions.assertShippingMethodIsSelected(evriStandart.shippingMethodName);
        })

        it('To validate the valid list of EVRI Next Day locations as per the postcode', function () {
            shippingPage.actions.selectShippingMethodByName(evriNextDay.shippingMethodName);
            shippingPage.actions.postCodeEvri(primaryAddress.postcode);
            shippingPage.actions.selectFirstEvriPickUpAddressfromList();
            shippingPage.assertions.assertShippingMethodIsSelected(evriNextDay.shippingMethodName);
        })

        it('To validate the valid list of ASDA Next Day locations as per the postcode', function () {
            shippingPage.actions.selectShippingMethodByName(asdaNextDay.shippingMethodName);
            shippingPage.actions.postCodeAsda(primaryAddress.postcode);
            shippingPage.actions.selectFirstAsdaPickUpAddressFromList();
            shippingPage.assertions.assertShippingMethodIsSelected(asdaNextDay.shippingMethodName);
        })
    })
}