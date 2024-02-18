describe('Add Product to the Cart', () => {
  it('should add the first product to the cart', () => {
    // Visit the homepage
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');

    // Select the first product and add it to the cart
    cy.get('div.iZZGui').eq(0).find('button.sc-124al1g-0').first().click();

    // Verify the selected product is added to the cart
    cy.get('div.iZZGui').eq(0).should('exist');
    cy.get('div.iZZGui').eq(0).should('have.length', 1);
  });
});
