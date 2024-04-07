import { isSiteGenesisBrand } from 'cypress/helpers/common';
import CartPage from '../../pom/cart.page';
import e2ePage from 'cypress/pom/e2e.page';
import cartPage from '../../pom/cart.page';

describe('Cart basic functionality for guest user', function () {
    beforeEach(() => {
        e2ePage.goto();
        e2ePage.addProductToCartPage();

    });

    it('Verify that quantity of product is increased', function () {
        if (isSiteGenesisBrand) {
            CartPage.assertions.assertQuantityIsDisplayed('1');
            CartPage.actions.editCartQuantitySiteGenesis('3');
            CartPage.assertions.assertCartQuantityIncreased(1);
            CartPage.actions.editCartQuantitySiteGenesis('1');
        } else {
            CartPage.assertions.assertQuantityIsDisplayed('1');
            CartPage.actions.editCartQuantity('3');
            CartPage.assertions.assertCartQuantityIncreased(1);
            CartPage.actions.editCartQuantity('1');
        }
    });

    it('Verify that quantity of product is decreased', function () {
        if (isSiteGenesisBrand) {
            CartPage.actions.editCartQuantitySiteGenesis('4');
            CartPage.assertions.assertQuantityIsDisplayed('4');
            CartPage.actions.editCartQuantitySiteGenesis('1');
            cartPage.assertions.assertCartQuantityDecreased(4);
        } else {
            CartPage.actions.editCartQuantity('4');
            CartPage.assertions.assertQuantityIsDisplayed('4');
            CartPage.actions.editCartQuantity('1');
            cartPage.assertions.assertCartQuantityDecreased(4);
        }
    });
});