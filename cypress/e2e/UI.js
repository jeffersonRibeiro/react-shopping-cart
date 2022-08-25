import { loginPage, userPage } from '../locators/index';
import pages from '../fixtures/pages.json';
import utils from '../src/utils';

describe('ZenHR', () => {
  it('Checking the availability of the links, @ID: 01', () => {
    cy.visit('/'); 
  });
});
