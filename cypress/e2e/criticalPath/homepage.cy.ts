import { brand } from 'cypress/support/e2e';
import homePage from '../../pom/home.page';
import HomePage from '../../pom/home.page';

describe('Home Page', function () {
  beforeEach(() => {
    HomePage.goto();
  });

  // Iterate the Links
  it('Check header footer links', () => {
    context("Checking Header Links", () => {
      if (brand == 'boohooman.com') {
        homePage.assertions.assertHeaderLinks()
      } else {
        HomePage.assertions.assertAllHeaderLinksStatus();
      }
    })
    context("Checking Footer Links", () => {
      HomePage.assertions.assertAllFooterLinksStatus();
    })
  });
});

