import { brand } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    guestCheckoutEmail: '#dwfrm_login_guestEmail',
    userEmailField: '#dwfrm_login_email',
    passwordField:'#dwfrm_login_password',
    continueAsGuestBt:'.b-form > .b-button',
    continueAsRegisteredUser: 'button[data-tau="login_submit"]',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.b-ngvip-inner p.b-ngvip-title:eq(1)',
    premierIconIsDisplayed:'.i-icon-premierLogoShort',
    premierSubtitle:'p.b-ngvip-subtitle:eq(1)'
  },
  'nastygal.com': {
    guestCheckoutEmail: '#dwfrm_login_guestEmail',
    userEmailField: 'input[id="dwfrm_login_email"]',
    passwordField:'#dwfrm_login_password',
    continueAsGuestBt:'.b-form > .b-button',
    continueAsRegisteredUser: '.b-login_form-group_cta > .b-button',
    premierIsDisplayed :'button.b-ngvip-button',
    premierSubtitle: '.b-ngvip-description',
  },
  'boohooman.com': {
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    userEmailField: '[id^="dwfrm_login_username"]',
    passwordField:'.input-text.password.required',
    continueAsGuestBt:'.login-box-create-account .login-page-button',
    continueAsRegisteredUser: '.login-page-form .login-page-button',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle',
  },
  'karenmillen.com': {
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    userEmailField: '[id^="dwfrm_login_username"]',
    passwordField:'input[id^=dwfrm_login_password]',
    continueAsGuestBt:'button[value^="Continue as"]',
    continueAsRegisteredUser: "[name='dwfrm_login_login']",
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle',
  }
};

class CheckoutPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {
    continueAsGuestBtn () {
      const continueAsGuestBt = selectors[brand].continueAsGuestBt;
      cy.get(continueAsGuestBt).click({force:true});
    },
    continueAsRegisteredUser () {
      const continueAsRegisteredUser = selectors[brand].continueAsRegisteredUser;
      cy.get(continueAsRegisteredUser).click({force:true});
    },
    premierAddToCart () {
      const premierAddToCart = selectors[brand].premierAddToCart;
      cy.get(premierAddToCart).click();
    }
  };

  actions = {
    guestCheckoutEmail (guestEmail: string) {
      const guestCheckoutEmail = selectors[brand].guestCheckoutEmail;
      cy.get(guestCheckoutEmail).click({force:true}).clear({force:true}).type(guestEmail, {force:true});
    },
    userEmailField (username: string) {
      const userEmailField = selectors[brand].userEmailField;
      cy.get(userEmailField).click({force:true}).type(username + '{enter}', {force:true});
    },
    passwordField (password: string) {
      const passwordField = selectors[brand].passwordField;
      cy.get(passwordField).type(password, {force:true});
    }
  };

  assertions = {
    assertUserProceededToShippingPage () {
      cy.url().should('include', 'shipping');
    },
    assertUserEmailField () {
      const userEmailField = selectors[brand].userEmailField;
      cy.get('body').then($body => {
        if ($body.find(userEmailField).length) {
          cy.get(userEmailField).should('be.visible');
        }
      }
      );

    },
    assertPasswordFieldForRegisteredUserIsVisible () {
      const passwordField = selectors[brand].passwordField;
      cy.get(passwordField).should('be.visible');
    },
    assertGuestCheckoutEmail () {
      const guestCheckoutEmail = selectors[brand].guestCheckoutEmail;
      cy.get(guestCheckoutEmail).should('be.visible');
    },
    assertPremierIconIsDisplayed () {
      const premierIconIsDisplayed = selectors[brand].premierIconIsDisplayed;
      cy.get(premierIconIsDisplayed).should('be.visible');
    },
    assertPremierTitleIsDisplayed (premierTitleText: string) {
      const premierIsDisplayed = selectors[brand].premierIsDisplayed;
      cy.get(premierIsDisplayed).invoke('text').then(text=>{
        const premierText = text.replace(/\.b-ngvip-title\s*\{[^}]+\}[\n\r]+|[\s]{2,}/g, ' ').trim(); // REGULAR EXPRESSION TO REMOVE STYLE TAG TEXT AND SPACES INSIDE P TAG FOR BOOHOO
        expect(premierText.toUpperCase()).to.equal(premierTitleText.toUpperCase());
      });
    },
    assertPremierSubtitleIsDisplayed (premierSubtitleText: string) {
      const premierSubtitle = selectors[brand].premierSubtitle;
      cy.get(premierSubtitle).invoke('text').then(text=>{
        const premiersubText=text.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim(); // REGULAR EXPRESSION TO REMOVE EXTRA SPACES AND LINES FROM STRING
        expect(premiersubText.toUpperCase()).to.include(premierSubtitleText.toUpperCase());
      });
    }
  };
}

export default new CheckoutPage();