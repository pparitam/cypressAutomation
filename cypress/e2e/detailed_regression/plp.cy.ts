import e2ePage from 'cypress/pom/e2e.page';
import plpPage from "cypress/pom/plp.page";
import { brand, locale } from 'cypress/support/e2e';

describe('E2E - Product - Listing Pages sorting', () => {

    beforeEach(() => {
        const randomItem = e2ePage.selectRandomProduct()
        e2ePage.goto()
        e2ePage.findItem(randomItem)
        e2ePage.assertProductsFound()
    })

    it("Validate Sort Filters works", () => {
        plpPage.plpSort() //working for all brands
    })

    describe('E2E - Product - Listing Pages Filtering', () => {

        it("Validate all Filters works", () => {
            plpPage.assertSizeFilterWorks()
            plpPage.assertColourFilterWorks()
            plpPage.assertShopByFitFilterWorks()
            plpPage.assertStyleFilterWorks()
            plpPage.assertWearToFilterWorksForMobile()
            plpPage.assertOccasionFilterWorks()
            plpPage.assertPriceFilterWorks()
        })
    });

});