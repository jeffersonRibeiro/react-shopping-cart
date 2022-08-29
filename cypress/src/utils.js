import { cart, mainPage } from '../locators/index';

/**
 * add items in the cart
 *
 * @param {object} index items that should be added to cart
 */

const addItemsToCart = (index) => {
  index.forEach(element => {
    cy.GetByTestId(mainPage.addToCart).eq(element).click();
    cy.GetByTestId('closeCartButton').click();
  });
};
module.exports = {
  addItemsToCart,
};
