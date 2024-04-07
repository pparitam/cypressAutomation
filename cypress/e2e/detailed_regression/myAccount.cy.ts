import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import e2eMyAccountPage from 'cypress/pom/e2eMyAccount.page';
import { locale , brand } from 'cypress/support/e2e';
import Addresses from '../../helpers/addresses';
import Cards from '../../helpers/cards';
import loginDetails from 'cypress/helpers/loginDetails';

describe('E2E - My Account', function () {

  beforeEach(() => {
    HomePage.goto();
    HomePage.actions.closeNastygalPopup();
    const primaryLoginDetails = loginDetails.getLogindetailsByLocale(brand, locale, 'primaryLoginDetails');
    LoginPage.actions.login(primaryLoginDetails.Email, primaryLoginDetails.Password);
  });

  it(`All tiles accessible from Landing page and every single page renders`, () => {
    e2eMyAccountPage.assertAccountPageLoad();
    e2eMyAccountPage.visitPremierPage();
    e2eMyAccountPage.visitOrderHistory();
    e2eMyAccountPage.visitAccountDetails();
    e2eMyAccountPage.visitChangePassword();
    e2eMyAccountPage.visitContactPreferences();
    e2eMyAccountPage.visitAdresses();
    e2eMyAccountPage.visitPaymentDetails();
    e2eMyAccountPage.visitSocialAccounts();
    e2eMyAccountPage.visitWishList();
    e2eMyAccountPage.visitStartAReturn();
    e2eMyAccountPage.visitReturnsPolicy();
    e2eMyAccountPage.visitPrivacyNotice();
  });

  it('Validate that user should be able to successfully Add, Edit and Delete address', () => {
    const localeNewAddress = Addresses.getAddressByLocale(locale, 'newAddedPrimaryAddress');

    e2eMyAccountPage.visitAdresses()
    e2eMyAccountPage.verifyAddressIsEmpty()
    e2eMyAccountPage.addAddress(localeNewAddress)
    e2eMyAccountPage.editAddress()
    e2eMyAccountPage.assertAdddressEditedSuccessfully()
    e2eMyAccountPage.deleteAddress()
  });

  it('Validate that user should be able to successfully Add and Delete Payment card', () => {
    e2eMyAccountPage.visitPaymentDetails()
    cy.wait(2000)
    if((brand == 'karenmillen.com' || brand == 'boohoo.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA')){
      e2eMyAccountPage.addCardUS(Cards.visa.cardNo, Cards.visa.owner, Cards.visa.date, Cards.visa.code)
    } else {
      e2eMyAccountPage.addCard(Cards.visa.cardNo, Cards.visa.owner, Cards.visa.date, Cards.visa.code)
    }
    e2eMyAccountPage.assertCardAdded(Cards.visa.end)
    e2eMyAccountPage.deleteCard(Cards.visa.end);
    e2eMyAccountPage.assertCardNotPresent(Cards.visa.end)
  });

});
