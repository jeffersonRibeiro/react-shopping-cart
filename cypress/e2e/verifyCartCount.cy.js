describe('Verify Cart Count and Remove Button', () => {
  it('should have a cart count of 1 and display a Remove button', () => {
    // Visit the homepage
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');

    // Select the first product and add it to the cart
    cy.get('div.iZZGui').eq(0).find('button.sc-124al1g-0').first().click();

    // Verify the cart count is 1
    cy.get('div.VLMSP').should('have.text', '1');

    // Verify the presence of the Remove button
    cy.get('.gBQuHE').should('exist');
  });
});
