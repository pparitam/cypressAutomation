import AbstractPage from './abstract/abstract.page';
import { isSiteGenesisBrand, isMobileDeviceUsed } from '../helpers/common';
import { brand, locale, url } from 'cypress/support/e2e';
import billingPage from './billing.page';
import e2eMyAccountPage from './e2eMyAccount.page';
import registrationPage from './registration.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    mobileHamburgIcon: "[class='i-icon i-icon-hamburger']",
    MobileLoginLink: '[class="b-hamburger_account-action_link m-login"]',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton: 'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner > .b-form_box',
    errorLoginMessage: '.b-message-copy',
    resetPasswordEmailFieldMobile: '#dwfrm_registration_resetPassword_email',
  },
  'nastygal.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    mobileHamburgIcon: "[class='i-icon i-icon-hamburger']",
    MobileLoginLink: '.m-login',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton: 'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '[name="dwfrm_profile_resetPassword_email"]',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: '.b-login_form',
    errorLoginMessage: '.b-message-copy',
    resetPasswordEmailFieldMobile: '#dwfrm_registration_resetPassword_email',
    popUpSign: '.b-dialog-header >button',
  },
  'boohooman.com': {
    loginIcon: '[data-name="profile"]',
    loginIconNl: '.user-links',
    loginLink: '.user-links > a:nth-child(1)',
    mobileHamburgIcon: "[class='menu-toggle js-menu-toggle']",
    MobileLoginLink: '.user-link-item[title^="Log"]:eq(1)',
    loginEmail: '[name="username"]',
    loginPassword: '[name="password"]',
    loginButton: 'button[name="submit"]',
    forgotPassword: 'a.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '[class*="field-wrapper"]>#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: 'form#dwfrm_login[class="login-page-form"]',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email'
  },
  'karenmillen.com': {
    loginIcon: '.user-account',
    loginLink: '.user-links > [title="Log In"]',
    mobileHamburgIcon: "[class='menu-toggle js-menu-toggle']",
    MobileLoginLink: '.user-link-item[title^="Log"]:eq(1)',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton: '#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email',
    headerUserInfo: '.header-customer-info'
  }
};


class LoginPage implements AbstractPage {

  goto(): void {
    cy.visit(url + '/login');
  }

  click = {
    loginIcon() {
      const loginIcon = selectors[brand].loginIcon;
      const loginIconNl = selectors[brand].loginIconNl;
      const mobileHamburgIcon = selectors[brand].mobileHamburgIcon;
      const headerUserInfo = selectors[brand].headerUserInfo;

      if (isMobileDeviceUsed) {
        cy.get(mobileHamburgIcon).click();
      } else {
        if (isSiteGenesisBrand && brand != 'boohooman.com') {
          cy.get(headerUserInfo).invoke('show');
        } else if (brand == 'boohooman.com' && locale == 'NL') {
          cy.get(loginIconNl).click({ force: true });
        } else {
          cy.get(loginIcon).click({ force: true });
        }
      }
    },
    forgotPasswordLink(opts = { force: true }) {
      const forgotPassword = selectors[brand].forgotPassword;
      cy.get(forgotPassword).click({ force: opts.force });
    },
    resetPasswordButon() {
      const resetPasswordBtn = selectors[brand].resetPasswordBtn;
      cy.get(resetPasswordBtn).click();
    }
  };

  assertions = {
    assertLoginFormIsPresent() {
      const loginForm = selectors[brand].loginForm;
      cy.get(loginForm).should('be.visible');
    },
    assertWishlistLoginTitleIsPresent(title: string) {
      const wishlistLoginTitle = selectors[brand].wishlistLoginTitle;
      cy.get(wishlistLoginTitle).should('contain.text', title);
    },

    //  Login Attempts
    assertErrorLoginMessageIsPresent(text: string) {
      const errorLoginMessage = selectors[brand].errorLoginMessage;
      cy.get(errorLoginMessage).should('be.visible').and('contain.text', text);
    },

    assertForgotPasswordMessageisDisplayed(email: string) {
      const forgotPasswordMessage = selectors[brand].forgotPasswordMessage;
      if (isSiteGenesisBrand) {
        cy.get(forgotPasswordMessage, { timeout: 2000 }).should('be.visible');
      } else {
        cy.get(forgotPasswordMessage, { timeout: 2000 }).should('be.visible').and('contain', email);
      }
    },
  };

  actions = {
    login(user: string, pass: string) {
      const loginIcon = selectors[brand].loginIcon;
      const loginLink = selectors[brand].loginLink;
      const mobileHamburgIcon = selectors[brand].mobileHamburgIcon;
      const MobileLoginLink = selectors[brand].MobileLoginLink;

      if (isMobileDeviceUsed) {
        cy.get(mobileHamburgIcon).click({ force: true })
          .get(MobileLoginLink).click({ force: true });
      } else { // Web Device logic start from this else statement
        if (isSiteGenesisBrand) {
          if (brand == 'boohooman.com') {
            cy.get(loginIcon).click({ force: true });

          } else {
            cy.get(loginIcon).invoke('show')
              .get(loginLink).click({ force: true });
          }
        } else {
          cy.get(loginIcon).click({ force: true });
        }
      }

      const loginEmail = selectors[brand].loginEmail;
      cy.get(loginEmail).type(user, { force: true });
      const loginPassword = selectors[brand].loginPassword;
      cy.get(loginPassword).type(pass, { force: true });
      const loginButton = selectors[brand].loginButton;
      cy.get(loginButton).click({ force: true });
      e2eMyAccountPage.assertAccountPageLoad();
    },
    loginViaPage(user: string, pass: string) {
      const loginEmail = selectors[brand].loginEmail;
      cy.get(loginEmail).type(user, { force: true });
      const loginPassword = selectors[brand].loginPassword;
      cy.get(loginPassword).type(pass, { force: true });
      const loginButton = selectors[brand].loginButton;
      cy.get(loginButton).click({ force: true });
    },
    resetPasswordEmail(email: string) {
      const resetPasswordEmailField = selectors[brand].resetPasswordEmailField;
      const resetPasswordEmailFieldMobile = selectors[brand].resetPasswordEmailFieldMobile;

      if (isMobileDeviceUsed) {
        cy.get(resetPasswordEmailFieldMobile).type(email, { timeout: 2000 });
      } else {
        cy.get(resetPasswordEmailField).type(email, { timeout: 2000 });
      }
    },
    loginPopUpMessage() {
      const popUpSign = selectors[brand].popUpSign;
      cy.get('body').then($body => {
        if ($body.find(popUpSign).length > 0) {
          cy.get(popUpSign).click({ force: true });
        }
      });

    },
  };
}

export default new LoginPage();