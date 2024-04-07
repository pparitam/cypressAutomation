import { brand, url, locale, language } from 'cypress/support/e2e';
import { RouteMatcher } from 'cypress/types/net-stubbing';
import assertionText from 'cypress/helpers/assertionText';
import e2ePage from 'cypress/pom/e2e.page';
import { isMobileDeviceUsed } from 'cypress/helpers/common';
import sortingRecommendation from 'cypress/helpers/sortingRecommendation';

const selectors: SelectorBrandMap = {
    'boohoo.com': {
        categoryRefinement: '#searchRefineBarAccordionItemBtn-category > span',
        sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
        styleRefinement: '#searchRefineBarAccordionItemBtn-style',
        colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
        priceRefinements: '#searchRefineBarAccordionItemBtn-price > span',
        shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
        occassionRefinement: '#searchRefineBarAccordionItemBtn-occasion > span',
        sortProducts: '#plp-sort-desktop',
        priceVariant: '',
        selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
        selectRefinementVariantColour: '#searchRefineBarAccordionItemInner-colour',
        selectRefinementVariantStyle: '#refinementAttributesList-style',
        selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
        selectRefinementVariantCategory: '#refinementAttributesList-category',
        selectRefinementVariantCategoryOtherLanguages: '#searchRefineBarAccordionItemBtn-',
        SelectRefinementVariantCategory: '#searchRefineBarAccordionItemBtn-category',
        selectRefinementVariantOccasion: '#searchRefineBarAccordionItemInner-occasion',
        selectRefinementVariantShopByPrice: '#searchRefineBarAccordionItemInner-price',
        wishlistPlpIcon: '.b-wishlist_button-icon',
        loadMoreProducts: 'div.b-load_more > a',
        loadMoreProductsMobile: '.b-load_more-button',
        numberOfItemsTextIsVisible: 'div.b-load_progress > span',
        productColorIsDisplayedOnPLP: '.b-product_tile_swatches-swatch_image',
        newProductPriceIsDispayed: '.m-new',
        productPriceIsDispayed: '.b-price-item',
        productImageIsDisplayed: '.b-product_tile-image img',
        itemIsAddedToWishlist: '.b-header_wishlist-count',
        productNameIsDisplayed: '.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link',
        quickView: '.b-product_tile-quick_view',
        quickViewSize: 'button[aria-disabled="false"] .b-variation_swatch-value_text',
        quickAddtoCart: '.b-button.b-product_addtocard.m-width_full',
        miniCartQty: '.b-minicart_icon-qty',
        selectRefinementVariantPrice: '#refinementAttributesList-price',
        allSortingOptions: "#plp-sort-desktop option",
        sortingOption: "select#plp-sort-desktop",
        allSortingOptionsMobile: "#plp-sort-mobile option",
        sortingOptionMobile: "select#plp-sort-mobile",
        loadingBar: '[class="l-plp_grid m-busy"]',
        selectFilter: '[data-tau="refinements_title"]',
        selectFilterIL: '[data-tau="refinements_button"]',
        selectSizeCheckbox: '#size-refinement-item > li',
        selectSizeCheckboxUS: '#us-size-refinement-item > li',
        selectedFilterValue: '[data-tau="applied_filter_value"]',
        clearAllFilterCTA: '[data-tau="applied_filters_clear_all"]',
        selectColourCheckbox: '#colour-refinement-item > li',
        selectColorCheckboxUS: '#color-refinement-item > li',
        selectShopByFitCheckbox: '#shop-by-fit-refinement-item > li',
        selectStyleCheckbox: '#style-refinement-item > li',
        selectOccasionCheckbox: '#occasion-refinement-item > li',
        selectPriceCheckbox: '.b-refinement_radio ',
        selectColorCheckboxFR: '#couleur-refinement-item li',
        selectShopByFitCheckboxFR: '#shopper-par-coupe-refinement-item li',
        selectSizeCheckboxFR: '#taille-refinement-item>li',
        selectSizeCheckboxNL: '#grootte-refinement-item>li',
        selectSizeCheckboxES: '#talla-refinement-item>li',
        selectSizeCheckboxIT: '#taglia-refinement-item>li',
        selectColorCheckboxNL: '#kleur-refinement-item>li',
        selectShopByFitCheckboxNL: '#shop-op-pasvorm-refinement-item>li',
        selectShopByFitCheckboxES: '#comprar-por-ajuste-refinement-item>li',
        selectShopByFitCheckboxIT: '#searchRefineBarAccordionItemBtn-acquista-per-fit',
        selectOccasionCheckboxNL: '#gelegenheid-refinement-item>li',
        selectStyleCheckboxNL: '#stijl-refinement-item>li',
        selectStyleCheckboxES: '#estilo-refinement-item>li',
        selectSizeCheckboxSE: '#storlek-refinement-item>li',
        selectColorCheckboxSE: '#färg-refinement-item>li',
        selectShopByFitCheckboxSE: '#shoppa-passform-refinement-item>li',
        selectOccasionCheckboxSE: '#tillfälle-refinement-item>li',
        selectOccasionCheckboxES: '#acontecimiento-refinement-item>li',
        selectOccasionCheckboxIT: '#colore-refinement-item > li',
        selectStyleCheckboxSE: '#modell-refinement-item>li',
        selectSizeCheckboxDE: '#größe-refinement-item>li',
        selectColorCheckboxDE: '#farbe-refinement-item>li',
        selectColorCheckboxIT: '#searchRefineBarAccordionItemInner-colore',
        selectShopByFitCheckboxDE: '#shoppe-nach-maß-refinement-item>li',
        selectOccasionCheckboxDE: '#anlass-refinement-item>li',
        selectSizeCheckboxIL: '#מידה-refinement-item > li',
        selectColorCheckboxIL: '#צבע-refinement-item > li',
        selectShopByFitCheckboxIL: '#סיווג-refinement-item > li',
        selectStyleCheckboxIL: '#סגנון-refinement-item > li',
        selectOccasionCheckboxIL: '#אירוע-refinement-item > li',

        //Mobile
        selectFilterMobile: 'button[data-tau="refinements_open"]',
        selectFilterRefineByMobile: '.b-slide_panel-items',
        selectSizeCheckboxMobile: '[data-tau-refinement-id="sizeRefinement"] [data-tau="refinements_option_name"]:visible',
        refinementApplyButtonMobile: '.b-slide_panel-submenu [data-id="applyBtn"]',
        viewAllItemsButtonMobile: 'button[data-tau="refinements_all_results"]',
        selectFilterMobileWithFilterNumber: '.b-plp_actions-refinements_toggle.b-button.m-info.m-active',
        clearAllFilterCTAMobile: 'button#clearRefinementsButton',
        selectColourCheckboxMobile: '[data-tau-refinement-id="color"] [data-tau="refinements_option_name"]:visible',
        selectShopByFitCheckboxMobile: '[data-tau-refinement-id="classification"] [data-tau="refinements_option_name"]:visible',
        selectStyleCheckboxMobile: '[data-tau-refinement-id="style"] [data-tau="refinements_option_name"]:visible',
        selectOccasionCheckboxMobile: '[data-tau-refinement-id="occasion"] [data-tau="refinements_option_name"]:visible',
        selectPriceCheckboxMobile: '[data-tau-refinement-id="price"] [data-tau="refinements_option_name"]:visible',
    },
    'nastygal.com': {
        categoryRefinement: '#searchRefineBarAccordionItemBtn-category > span',
        sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
        colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
        shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
        occassionRefinement: '#searchRefineBarAccordionItemBtn-occasion > span',
        sortProducts: '#plp-sort-desktop',
        priceVariant: '',
        selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
        selectRefinementVariantColour: '#searchRefineBarAccordionItemInner-colour',
        selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
        selectRefinementVariantCategory: '#searchRefineBarAccordionItemInner-category',
        selectRefinementVariantOccasion: '#searchRefineBarAccordionItemInner-occasion',
        wishlistPlpIcon: '.b-wishlist_button-icon',
        loadMoreProducts: 'div.b-load_more > a',
        loadMoreProductsMobile: '.b-load_more-button',
        numberOfItemsTextIsVisible: 'div.b-load_progress > span',
        productColorIsDisplayedOnPLP: '.b-product_tile-container > .b-quickbuy-swatches > .b-product_slider-track > .b-product_tile_swatches-swatch_wrapper > .b-product_tile_swatches-swatch',
        newProductPriceIsDispayed: '.m-new',
        productPriceIsDispayed: '.b-price-item',
        productImageIsDisplayed: '#product-grid > div.l-plp_grid > section:nth-child(3) > div.b-product_tile-container > div:nth-child(1) > div.b-product_tile-top > a > picture > img',
        itemIsAddedToWishlist: '.b-header_wishlist-count', //  Does not exist for NG
        productNameIsDisplayed: '.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link',
        wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon',
        quickView: '.b-product_tile-quick_view',
        quickViewSize: '.b-product_tile_swatches-swatch.m-quickbuy.m-size:not(.m-disabled)',
        quickAddtoCart: '.b-quickbuy-addtocart_availability',
        miniCartQty: '.b-minicart_icon-qty',
        selectRefinementVariantPrice: '#refinementAttributesList-price',
        allSortingOptions: "#plp-sort-desktop option",
        sortingOption: "select#plp-sort-desktop",
        allSortingOptionsMobile: "#plp-sort-mobile option",
        sortingOptionMobile: "select#plp-sort-mobile",
        loadingBar: '[class="l-plp_grid m-busy"]',
        selectFilter: '[data-tau="refinements_title"]',
        selectSizeCheckbox: '#size-refinement-item > li',
        selectSizeCheckboxIT: '#taglia-refinement-item',
        selectSizeCheckboxUS: '#size-refinement-item',
        selectSizeCheckboxFR: '#taille-refinement-item>li',
        selectedFilterValue: '[data-tau="applied_filter_value"]',
        clearAllFilterCTA: '[data-tau="applied_filters_clear_all"]',
        selectColourCheckbox: '#colour-refinement-item > li',
        selectColorCheckboxUS: '#color-refinement-item > li',
        selectColorCheckboxFR: '#couleur-refinement-item li',
        selectShopByFitCheckbox: '#shop-by-fit-refinement-item > li',
        selectShopByFitCheckboxFR: '#shopper-par-coupe-refinement-item li',
        selectStyleCheckbox: '#style-refinement-item > li',
        selectWearToCheckbox: '#occasion-refinement-item > li',
        selectPriceCheckbox: '.b-refinement_radio ',
        //Mobile
        selectFilterMobile: '.b-plp_actions-refinements_toggle',
        selectFilterRefineByMobile: '.b-slide_panel > .m-level_1',
        selectSizeCheckboxMobile: '.b-slide_panel-submenu .b-refinement_checkbox-label',
        refinementApplyButtonMobile: '.b-slide_panel-submenu button[data-id="applyBtn"]',
        viewAllItemsButtonMobile: '#applyRefinementsButton',
        selectFilterMobileWithFilterNumber: '.b-plp_actions-refinements_toggle.b-button.m-info.m-active',
        clearAllFilterCTAMobile: 'button#clearRefinementsButton',
        selectColourCheckboxMobile: '.b-slide_panel-submenu .b-refinement_checkbox.m-swatch',
        selectShopByFitCheckboxMobile: '.b-slide_panel-submenu .b-refinement_checkbox',
        selectStyleCheckboxMobile: '.b-slide_panel-submenu .b-refinement_checkbox',
        selectWearToCheckboxMobile: '.b-slide_panel-submenu .b-refinement_checkbox',
        selectPriceCheckboxMobile: '.b-slide_panel-submenu .b-refinement_radio-label',
        selectOccasionCheckboxMobile: '.b-slide_panel-submenu .b-refinement_checkbox'
    },
    'boohooman.com': {
        allSortingOptions: "[role='presentation'] [role='option'] [id^='radix']",
        sortingOption: "[role='presentation'] [role='option'] [id^='radix']"
    },
    'karenmillen.com': {
        sortCTA: '.refinement-head-icon.icon-menu-arrow',
        priceLowToHigh: '.js-refinement-sortRule.refinement-dropdown > ul > li',
        priceHighToLow: '.js-refinement-sortRule.refinement-dropdown > ul > li',
        productPrice: '[title="Sale Price"]',
        categoryRefinement: 'div[class="refinement js-refinement category"] input',
        styleRefinement: 'div[class="refinement js-refinement style"] input',
        sizeRefinement: 'div[class="refinement js-refinement sizeRefinement"] input',
        colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
        shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
        lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
        sortProducts: '#plp-sort-desktop',
        priceVariant: '',
        selectRefinementVariantCategory: '.js-refinement-category.refinement-dropdown',
        selectRefinementVariantStyle: '.js-refinement-style.refinement-dropdown',
        selectRefinementVariantSize: 'div[class="refinement js-refinement sizeRefinement"] div ul',
        selectRefinementVariantColor: '.js-refinement-color.refinement-dropdown',
        selectRefinementVariantPrice: '.js-refinement-price.refinement-dropdown ul',
        selectRefinementVariantShopByFit: '.js-refinement-classification.refinement-dropdown',
        selectRefinementVariantOccasion: '.js-refinement-occasion.refinement-dropdown',
        selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
        wishlistPlpIcon: '.b-wishlist_button-icon',
        loadMoreProducts: '.search-result-options [title="Next"]',
        loadMoreProductsMobile: '.is-mobile.m-pagination-wrapper > .pagination > .pagination-list > .pagination-item-next > .pagination-item-link',
        numberOfPagesTextIsVisible: '.search-result-options select[class*="pagination-select"]',
        productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
        newProductPriceIsDispayed: '.product-pricing .product-sales-price',
        productPriceIsDispayed: '.product-pricing .product-standard-price',
        productImageIsDisplayed: '.thumb-link img',
        itemIsAddedToWishlist: '.b-header_wishlist-count',
        productNameIsDisplayed: '.product-tile-name > .name-link',
        wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon',
        quickView: 'a#quickviewbutton',
        quickViewSize: 'ul.swatches.size.clearfix li.selectable',
        quickAddtoCart: 'button#add-to-cart',
        miniCartQty: '.mini-cart-wrapper .minicart-has-products',
        selectedSizeCheckbox: '.sizeRefinement > div > ul > li.swatches-item.selected',
        selectFilter: '.refinement-head-text',
        selectSizeCheckbox: '.clearfix.swatches.swatches-sizeRefinement.scrollable > li',
        selectedFilterValue: '.breadcrumb-refinement-value',
        clearAllFilterCTA: '.breadcrumb-refined-clearall',
        selectColourCheckbox: '.clearfix.swatches.swatches-color.scrollable > li',
        selectShopByFitCheckbox: '.clearfix.swatches.swatches-classification > li',
        selectStyleCheckbox: '.clearfix.swatches.swatches-style.scrollable > li',
        selectOccasionCheckbox: '.clearfix.swatches.swatches-occasion > li',
        selectPriceCheckbox: '.clearfix.swatches.swatches-price.scrollable > li',
        loadingBar: ".loader-bg",
        sortingOption: "[class='clearfix swatches sort-by scrollable'] li.swatches-item .refinement-link-copy",
        allSortingOptions: '[class="clearfix swatches sort-by scrollable"] li',
        allSortingOptionsMobile: "#grid-sort-header:eq(0) option",
        sortingOptionMobile: "#grid-sort-header:eq(0)",
        selectFilterMobile: '.m-refine-by-button',
        selectFilterRefineByMobile: '.m-refinement-list',
        selectSizeCheckboxMobile: ' .m-label-inline:visible',
        refinementApplyButtonMobile: "button.m-refinement-apply-button:visible",
        viewAllItemsButtonMobile: "[class='js-apply-refinements m-refinement-apply-button button']",
        selectFilterMobileWithFilterNumber: '.m-refine-by-button',
        clearAllFilterCTAMobile: ".m-refinement-clear-wrapper",
        selectColourCheckboxMobile: ' .m-label-inline:visible',
        selectShopByFitCheckboxMobile: ' .m-label-inline:visible',
        selectStyleCheckboxMobile: ' .m-label-inline:visible',
        selectOccasionCheckboxMobile: ' .m-label-inline:visible',
        selectPriceCheckboxMobile: ' ul.m-refinement-price-radiobuttons li',
    }

};

class plpPage {

    plpSort() {
        const allSortingOptions = selectors[brand].allSortingOptions;
        const sortingOption = selectors[brand].sortingOption;
        const allSortingOptionsMobile = selectors[brand].allSortingOptionsMobile;
        const sortingOptionMobile = selectors[brand].sortingOptionMobile;
        const loadingBar = selectors[brand].loadingBar
        const sortingRecommendationMobile = sortingRecommendation.textMap['mobile'][brand][locale];
        const sortingRecommendationWeb = sortingRecommendation.textMap['web'][brand][locale];

        if (brand == 'boohooman.com') {
            cy.get("button[role='combobox']").click()
        }
        if (isMobileDeviceUsed) {
            cy.get(allSortingOptionsMobile).each((value, index) => {
                cy.wrap(value).invoke('text').then(text => {
                    text = text.trim()
                    cy.get(sortingOptionMobile).select(text)
                    cy.wait(2000);
                    expect(sortingRecommendationMobile).to.contain(text.trim())
                    cy.log(text)
                })
            })
        } else {
            cy.get(allSortingOptions).each((value, index) => {
                cy.wrap(value).invoke('text').then(text => {
                    text = text.trim()
                    if (brand == "karenmillen.com" || brand == 'boohooman.com') {
                        if (brand == 'boohooman.com' && index != 0) {
                            cy.get("button[role='combobox']").click({ force: true })
                        }
                        cy.get(sortingOption).contains(text).click({ force: true })
                    }
                    else {
                        cy.get(sortingOption).select(text)
                    }
                    cy.log(text)
                    expect(sortingRecommendationWeb).to.include(text)

                    if (brand != 'boohooman.com') {
                        cy.get(loadingBar, { timeout: 30000 }).should('not.exist') //verify Page loading is finished
                    }
                })
            })
            e2ePage.assertProductsFound()
        }
    }

    clickClearAllFilters() {
        const clearAllFilterCTA = selectors[brand].clearAllFilterCTA;
        const selectFilterMobile = selectors[brand].selectFilterMobile;
        const clearAllFilterCTAMobile = selectors[brand].clearAllFilterCTAMobile;

        if (isMobileDeviceUsed) {
            cy.get(selectFilterMobile).click()
                .get(clearAllFilterCTAMobile).contains(assertionText.clearAllFiltersPLP[language]).click().wait(15000)
        } else {
            cy.get(clearAllFilterCTA).contains(assertionText.clearAllFiltersPLP[language]).click().wait(20000)
        }
    }

    clickRefinementApplyCTAMobile() {
        const refinementApplyButtonMobile = selectors[brand].refinementApplyButtonMobile;
        const viewAllItemsButtonMobile = selectors[brand].viewAllItemsButtonMobile;
        const selectFilterMobileWithFilterNumber = selectors[brand].selectFilterMobileWithFilterNumber;

        cy.get(refinementApplyButtonMobile).click({ force: true })
            .wait(3000)
            .get(viewAllItemsButtonMobile, { timeout: 5000 }).click()
            .get(selectFilterMobileWithFilterNumber, { timeout: 80000 })
    }

    assertSizeFilterWorks() {
        const selectedFilterValue = selectors[brand].selectedFilterValue;
        const selectFilter = selectors[brand].selectFilter;
        const selectFilterIL = selectors[brand].selectFilterIL;
        const selectSizeCheckbox = selectors[brand].selectSizeCheckbox;
        const selectSizeCheckboxUS = selectors[brand].selectSizeCheckboxUS;
        const selectSizeCheckboxFR = selectors[brand].selectSizeCheckboxFR;
        const selectSizeCheckboxNL = selectors[brand].selectSizeCheckboxNL;
        const selectSizeCheckboxSE = selectors[brand].selectSizeCheckboxSE;
        const selectSizeCheckboxDE = selectors[brand].selectSizeCheckboxDE;
        const selectSizeCheckboxES = selectors[brand].selectSizeCheckboxES;
        const selectSizeCheckboxIT = selectors[brand].selectSizeCheckboxIT;
        const selectSizeCheckboxIL = selectors[brand].selectSizeCheckboxIL;

        if (isMobileDeviceUsed) {
            this.assertSizeFilterWorksForMobile()
        } else {
            if (brand == 'boohoo.com' && locale == 'IL') {
                cy.get(selectFilterIL).contains(assertionText.size[language]).click()
            } else {
                cy.get(selectFilter).contains(assertionText.size[language]).click()
            }

            if (brand == 'boohoo.com' && (locale == 'US' || locale == 'CA')) {
                cy.get(selectSizeCheckboxUS).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckboxUS).eq(index).click()
                    })
            } else if ((brand == 'nastygal.com' || brand == 'boohoo.com') && locale == 'FR') {
                cy.get(selectSizeCheckboxFR).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckboxFR).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'NL') {
                cy.get(selectSizeCheckboxNL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckboxNL).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'SE') {
                cy.get(selectSizeCheckboxSE).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckboxSE).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'IT') {
                cy.get(selectSizeCheckboxIT).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckboxIT).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'DE') {
                cy.get(selectSizeCheckboxDE).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckboxDE).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'ES') {
                cy.get(selectSizeCheckboxES).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckboxES).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'IT') {
                cy.get(selectSizeCheckboxIT).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckboxIT).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'IL') {
                cy.get(selectSizeCheckboxIL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckboxIL).eq(index).click()
                    })
            } else {
                cy.get(selectSizeCheckbox).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectSizeCheckbox).eq(index).click()
                    })
            }
            cy.get(selectedFilterValue, { timeout: 80000 })
        }
        cy.url().should('contain', 'sizeRefinement')
        this.clickClearAllFilters()
    }

    assertSizeFilterWorksForMobile() {
        const selectFilterMobile = selectors[brand].selectFilterMobile;
        const selectFilterRefineByMobile = selectors[brand].selectFilterRefineByMobile;
        const selectSizeCheckboxMobile = selectors[brand].selectSizeCheckboxMobile;

        cy.get(selectFilterMobile, { timeout: 20000 }).click()
            .get(selectFilterRefineByMobile).contains(assertionText.size[language]).click().wait(3000)
            .get(selectSizeCheckboxMobile).its('length')
            .then((allProduct) => Cypress._.random(0, allProduct - 1))
            .then((index) => {
                cy.get(selectSizeCheckboxMobile).eq(index).click({ multiple: true })
            })
            .wait(3000)
        this.clickRefinementApplyCTAMobile()
    }

    assertColourFilterWorks() {
        const selectedFilterValue = selectors[brand].selectedFilterValue;
        const selectFilter = selectors[brand].selectFilter;
        const selectFilterIL = selectors[brand].selectFilterIL;
        const selectColourCheckbox = selectors[brand].selectColourCheckbox; //selectColorCheckboxUS
        const selectColorCheckboxUS = selectors[brand].selectColorCheckboxUS;
        const selectColorCheckboxFR = selectors[brand].selectColorCheckboxFR;
        const selectColorCheckboxNL = selectors[brand].selectColorCheckboxNL;
        const selectColorCheckboxSE = selectors[brand].selectColorCheckboxSE;
        const selectColorCheckboxDE = selectors[brand].selectColorCheckboxDE;
        const selectColorCheckboxIT = selectors[brand].selectColorCheckboxIT;
        const selectColorCheckboxIL = selectors[brand].selectColorCheckboxIL;

        if (isMobileDeviceUsed) {
            this.assertColourFilterWorksForMobile()
        } else {
            if ((brand == 'karenmillen.com' || brand == 'boohoo.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA' || locale == 'IL')) {
                cy.get(selectFilter).contains(assertionText.color[language]).click()
            } else {
                cy.get(selectFilter).contains(assertionText.colour[language]).click()
            }

            if ((brand == 'boohoo.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA' || locale == 'ES')) {
                cy.get(selectColorCheckboxUS).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectColorCheckboxUS).eq(index).click()
                    })
            } else if ((brand == 'nastygal.com' || brand == 'boohoo.com') && locale == 'FR') {
                cy.get(selectColorCheckboxFR).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectColorCheckboxFR).eq(index).click();
                        cy.wait(5000)
                    })
            } else if (brand == 'boohoo.com' && locale == 'NL') {
                cy.get(selectColorCheckboxNL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectColorCheckboxNL).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'SE') {
                cy.get(selectColorCheckboxSE).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectColorCheckboxSE).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'DE') {
                cy.get(selectColorCheckboxDE).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectColorCheckboxDE).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'IT') {
                cy.get(selectColorCheckboxIT).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectColorCheckboxIT).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'IL') {
                cy.get(selectColorCheckboxIL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectColorCheckboxIL).eq(index).click()
                    })
            } else {
                cy.get(selectColourCheckbox).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectColourCheckbox).eq(index).click()
                    })
            }
            cy.get(selectedFilterValue, { timeout: 80000 })
        }
        cy.url().should('contain', 'color')
        this.clickClearAllFilters()
    }

    assertColourFilterWorksForMobile() {
        const selectFilterMobile = selectors[brand].selectFilterMobile;
        const selectFilterRefineByMobile = selectors[brand].selectFilterRefineByMobile;
        const selectColourCheckboxMobile = selectors[brand].selectColourCheckboxMobile;

        cy.get(selectFilterMobile).click()
        if ((brand == 'karenmillen.com' || brand == 'boohoo.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA')) {
            cy.get(selectFilterRefineByMobile).contains(assertionText.color[language]).click()
        } else {
            cy.get(selectFilterRefineByMobile).contains(assertionText.colour[language]).click()
        }
        cy.wait(3000)
            .get(selectColourCheckboxMobile).its('length')
            .then((allProduct) => Cypress._.random(0, allProduct - 1))
            .then((index) => {
                cy.get(selectColourCheckboxMobile).eq(index).click()
            })
            .wait(3000)
        this.clickRefinementApplyCTAMobile()
    }

    assertShopByFitFilterWorks() {
        const selectedFilterValue = selectors[brand].selectedFilterValue;
        const selectFilter = selectors[brand].selectFilter;
        const selectShopByFitCheckbox = selectors[brand].selectShopByFitCheckbox;
        const selectShopByFitCheckboxFR = selectors[brand].selectShopByFitCheckboxFR;
        const selectShopByFitCheckboxNL = selectors[brand].selectShopByFitCheckboxNL;
        const selectShopByFitCheckboxSE = selectors[brand].selectShopByFitCheckboxSE;
        const selectShopByFitCheckboxDE = selectors[brand].selectShopByFitCheckboxDE;
        const selectShopByFitCheckboxES = selectors[brand].selectShopByFitCheckboxES;
        const selectShopByFitCheckboxIT = selectors[brand].selectShopByFitCheckboxIT;
        const selectShopByFitCheckboxIL = selectors[brand].selectShopByFitCheckboxIL;

        if (isMobileDeviceUsed) {
            this.assertShopByFitFilterWorksForMobile()
        } else {
            cy.get(selectFilter).contains(assertionText.shopByFit[language]).click()

            if ((brand == 'nastygal.com' || brand == 'boohoo.com') && locale == 'FR') {
                cy.get(selectShopByFitCheckboxFR).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectShopByFitCheckboxFR).eq(index).click();
                        cy.wait(5000)
                    })
            } else if (brand == 'boohoo.com' && locale == 'NL') {
                cy.get(selectShopByFitCheckboxNL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectShopByFitCheckboxNL).eq(index).click();
                        cy.wait(5000)
                    })
            } else if (brand == 'boohoo.com' && locale == 'ES') {
                cy.get(selectShopByFitCheckboxES).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectShopByFitCheckboxES).eq(index).click();
                        cy.wait(5000)
                    })
            } else if (brand == 'boohoo.com' && locale == 'SE') {
                cy.get(selectShopByFitCheckboxSE).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectShopByFitCheckboxSE).eq(index).click();
                        cy.wait(5000)
                    })
            } else if (brand == 'boohoo.com' && locale == 'DE') {
                cy.get(selectShopByFitCheckboxDE).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectShopByFitCheckboxDE).eq(index).click();
                        cy.wait(5000)
                    })
            } else if (brand == 'boohoo.com' && locale == 'IT') {
                cy.get(selectShopByFitCheckboxIT).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectShopByFitCheckboxIT).eq(index).click();
                        cy.wait(5000)
                    })
            } else if (brand == 'boohoo.com' && locale == 'IL') {
                cy.get(selectShopByFitCheckboxIL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectShopByFitCheckboxIL).eq(index).click();
                        cy.wait(5000)
                    })
            } else {
                cy.get(selectShopByFitCheckbox).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectShopByFitCheckbox).eq(index).click()
                    })
            }
            cy.get(selectedFilterValue, { timeout: 80000 })
        }
        cy.url().should('contain', 'classification')
        this.clickClearAllFilters()
    }

    assertShopByFitFilterWorksForMobile() {
        const selectFilterMobile = selectors[brand].selectFilterMobile;
        const selectFilterRefineByMobile = selectors[brand].selectFilterRefineByMobile;
        const selectShopByFitCheckboxMobile = selectors[brand].selectShopByFitCheckboxMobile;

        cy.get(selectFilterMobile).click()
            .get(selectFilterRefineByMobile).contains(assertionText.shopByFit[language]).click().wait(3000)
            .get(selectShopByFitCheckboxMobile).its('length')
            .then((allProduct) => Cypress._.random(0, allProduct - 1))
            .then((index) => {
                cy.get(selectShopByFitCheckboxMobile).eq(index).click()
            })
            .wait(3000)
        this.clickRefinementApplyCTAMobile()
    }

    assertStyleFilterWorks() {
        const selectedFilterValue = selectors[brand].selectedFilterValue;
        const selectFilter = selectors[brand].selectFilter;
        const selectStyleCheckbox = selectors[brand].selectStyleCheckbox;
        const selectStyleCheckboxNL = selectors[brand].selectStyleCheckboxNL;
        const selectStyleCheckboxSE = selectors[brand].selectStyleCheckboxSE;
        const selectStyleCheckboxES = selectors[brand].selectStyleCheckboxES;
        const selectStyleCheckboxIT = selectors[brand].selectStyleCheckboxIT;
        const selectStyleCheckboxIL = selectors[brand].selectStyleCheckboxIL;

        if (isMobileDeviceUsed) {
            this.assertStyleFilterWorksForMobile()
        } else {
            if (brand == 'nastygal.com' && locale == 'AU') {
                cy.log('Style filter not present')
            } else {
                cy.get(selectFilter).contains(assertionText.style[language]).click()
            }
            if (brand == 'boohoo.com' && locale == 'NL') {
                cy.get(selectStyleCheckboxNL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectStyleCheckboxNL).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'SE') {
                cy.get(selectStyleCheckboxSE).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectStyleCheckboxSE).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'ES') {
                cy.get(selectStyleCheckboxES).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectStyleCheckboxES).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'IT') {
                cy.get(selectStyleCheckboxIT).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectStyleCheckboxES).eq(index).click()
                    })
            } else if (brand == 'boohoo.com' && locale == 'IL') {
                cy.get(selectStyleCheckboxIL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectStyleCheckboxIL).eq(index).click()
                    })
            } else {
                cy.get(selectStyleCheckbox).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectStyleCheckbox).eq(index).click()
                    })
            }
            cy.get(selectedFilterValue, { timeout: 80000 })
        }
        cy.url().should('contain', 'style')
        this.clickClearAllFilters()
    }

    assertStyleFilterWorksForMobile() {
        const selectFilterMobile = selectors[brand].selectFilterMobile;
        const selectFilterRefineByMobile = selectors[brand].selectFilterRefineByMobile;
        const selectStyleCheckboxMobile = selectors[brand].selectStyleCheckboxMobile;

        cy.get(selectFilterMobile).click()
        if (brand == 'nastygal.com' && locale == 'AU') {
            cy.log('Style filter not present')
        } else {
            cy.get(selectFilterRefineByMobile).contains(assertionText.style[language]).click().wait(3000)
        }
        cy.get(selectStyleCheckboxMobile).its('length')
            .then((allProduct) => Cypress._.random(0, allProduct - 1))
            .then((index) => {
                cy.get(selectStyleCheckboxMobile).eq(index).click({ waitForAnimations: false })
            })
            .wait(3000)
        this.clickRefinementApplyCTAMobile()
    }

    assertOccasionFilterWorks() {
        const selectedFilterValue = selectors[brand].selectedFilterValue;
        const selectFilter = selectors[brand].selectFilter;
        const selectOccasionCheckbox = selectors[brand].selectOccasionCheckbox;
        const selectOccasionCheckboxNL = selectors[brand].selectOccasionCheckboxNL;
        const selectOccasionCheckboxSE = selectors[brand].selectOccasionCheckboxSE;
        const selectOccasionCheckboxDE = selectors[brand].selectOccasionCheckboxDE;
        const selectOccasionCheckboxES = selectors[brand].selectOccasionCheckboxES;
        const selectOccasionCheckboxIT = selectors[brand].selectOccasionCheckboxIT;
        const selectOccasionCheckboxIL = selectors[brand].selectOccasionCheckboxIL;

        if (isMobileDeviceUsed) {
            this.assertOccasionFilterWorksForMobile()
        } else {
            if (brand == 'nastygal.com') {
                if (locale == 'IE' || locale == 'US' || locale == 'AU' || locale == 'FR') {
                    cy.log('occassion filter not present')
                } else {
                    cy.get(selectFilter).contains(assertionText.occasion[language]).click()
                        .get(selectedFilterValue, { timeout: 80000 })
                        .url().should('contain', 'occasion')
                    this.clickClearAllFilters()
                }
            } else if (brand == 'boohoo.com' && locale == 'NL') {
                cy.get(selectFilter).contains(assertionText.occasion[language]).click()
                    .get(selectOccasionCheckboxNL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectOccasionCheckboxNL).eq(index).click()
                    })
                cy.get(selectedFilterValue, { timeout: 80000 })
                    .url().should('contain', 'occasion')
                this.clickClearAllFilters()
            } else if (brand == 'boohoo.com' && locale == 'ES') {
                cy.get(selectFilter).contains(assertionText.occasion[language]).click()
                    .get(selectOccasionCheckboxES).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectOccasionCheckboxES).eq(index).click()
                    })
                cy.get(selectedFilterValue, { timeout: 80000 })
                    .url().should('contain', 'occasion')
                this.clickClearAllFilters()
            } else if (brand == 'boohoo.com' && locale == 'SE') {
                cy.get(selectFilter).contains(assertionText.occasion[language]).click()
                    .get(selectOccasionCheckboxSE).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectOccasionCheckboxSE).eq(index).click()
                    })
                cy.get(selectedFilterValue, { timeout: 80000 })
                    .url().should('contain', 'occasion')
                this.clickClearAllFilters()
            } else if (brand == 'boohoo.com' && locale == 'DE') {
                cy.get(selectFilter).contains(assertionText.occasion[language]).click()
                    .get(selectOccasionCheckboxDE).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectOccasionCheckboxDE).eq(index).click()
                    })
                cy.get(selectedFilterValue, { timeout: 80000 })
                    .url().should('contain', 'occasion')
                this.clickClearAllFilters()
            } else if (brand == 'boohoo.com' && locale == 'IT') {
                cy.get(selectFilter).contains(assertionText.occasion[language]).click()
                    .get(selectOccasionCheckboxIT).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectOccasionCheckboxIT).eq(index).click()
                    })
                cy.get(selectedFilterValue, { timeout: 80000 })
                    .url().should('contain', 'occasion')
                this.clickClearAllFilters()
            } else if (brand == 'boohoo.com' && locale == 'IL') {
                cy.get(selectFilter).contains(assertionText.occasion[language]).click()
                    .get(selectOccasionCheckboxIL).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectOccasionCheckboxIL).eq(index).click()
                    })
                cy.get(selectedFilterValue, { timeout: 80000 })
                    .url().should('contain', 'occasion')
                this.clickClearAllFilters()
            } else {
                cy.get(selectFilter).contains(assertionText.occasion[language]).click()
                    .get(selectOccasionCheckbox).its('length')
                    .then((allProduct) => Cypress._.random(0, allProduct - 1))
                    .then((index) => {
                        cy.get(selectOccasionCheckbox).eq(index).click()
                    })
                cy.get(selectedFilterValue, { timeout: 80000 })
                    .url().should('contain', 'occasion')
                this.clickClearAllFilters()
            }
        }
    }

    assertOccasionFilterWorksForMobile() {
        if (brand == 'nastygal.com' && (locale !== 'IE' && locale !== 'US' && locale !== 'AU' && locale !== 'FR')) {
            const selectFilterMobile = selectors[brand].selectFilterMobile;
            const selectFilterRefineByMobile = selectors[brand].selectFilterRefineByMobile;
            const selectOccasionCheckboxMobile = selectors[brand].selectOccasionCheckboxMobile;

            cy.get(selectFilterMobile).click()
            cy.get(selectFilterRefineByMobile).contains(assertionText.occasion[language]).click().wait(3000)
                .get(selectOccasionCheckboxMobile).its('length')
                .then((allProduct) => Cypress._.random(0, allProduct - 1))
                .then((index) => {
                    cy.get(selectOccasionCheckboxMobile).eq(index).click()
                })
                .wait(3000)
            this.clickRefinementApplyCTAMobile()
            cy.url().should('contain', 'occasion')
            this.clickClearAllFilters()
        } else {
            cy.log('Occasion filter not present')
        }
    }

    assertWearToFilterWorksForMobile() {
        if (brand == 'nastygal.com' && (locale == 'IE' || locale == 'US')) {
            const selectFilterMobile = selectors[brand].selectFilterMobile;
            const selectFilterRefineByMobile = selectors[brand].selectFilterRefineByMobile;
            const selectWearToCheckboxMobile = selectors[brand].selectWearToCheckboxMobile;

            cy.get(selectFilterMobile).click()
            cy.get(selectFilterRefineByMobile).contains(assertionText.wearTo[language]).click().wait(3000)
                .get(selectWearToCheckboxMobile).its('length')
                .then((allProduct) => Cypress._.random(0, allProduct - 1))
                .then((index) => {
                    cy.get(selectWearToCheckboxMobile).eq(index).click()
                })
                .wait(3000)
            this.clickRefinementApplyCTAMobile()
            cy.url().should('contain', 'occasion')
            this.clickClearAllFilters()
        } else {
            cy.log('Wear To Filter not present')
        }
    }

    assertPriceFilterWorks() {
        const selectFilter = selectors[brand].selectFilter;
        const selectPriceCheckbox = selectors[brand].selectPriceCheckbox;

        if (isMobileDeviceUsed) {
            this.assertPriceFilterWorksForMobile()
        } else {
            if (brand == 'nastygal.com' && (locale == 'FR')) {
                cy.log('price filter not present')
            } else {
                cy.get(selectFilter).contains(assertionText.price[language]).click()
            }
            cy.get(selectPriceCheckbox).its('length')
                .then((allProduct) => Cypress._.random(0, allProduct - 1))
                .then((index) => {
                    cy.get(selectPriceCheckbox).eq(index).click()
                })
            cy.wait(20000)
        }
        cy.url().should('contain', 'pmin').and('contain', 'pmax')
        this.clickClearAllFilters()
    }

    assertPriceFilterWorksForMobile() {
        const selectFilterMobile = selectors[brand].selectFilterMobile;
        const selectFilterRefineByMobile = selectors[brand].selectFilterRefineByMobile;
        const selectPriceCheckboxMobile = selectors[brand].selectPriceCheckboxMobile;

        cy.get(selectFilterMobile).click()
        if (brand == 'nastygal.com' && locale == 'FR') {
            cy.log('price filter not present')
        } else {
            cy.get(selectFilterRefineByMobile).contains(assertionText.price[language]).click().wait(3000)
        }
        cy.get(selectPriceCheckboxMobile).its('length')
            .then((allProduct) => Cypress._.random(0, allProduct - 1))
            .then((index) => {
                cy.get(selectPriceCheckboxMobile).eq(index).click()
            })
            .wait(3000)
        this.clickRefinementApplyCTAMobile()
    }

}


export default new plpPage();
