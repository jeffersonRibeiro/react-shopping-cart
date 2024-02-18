describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');
  });

  // Verify the Homepage is displayed correctly
  it('should display "Product(s) found" on the homepage', () => {
    cy.get('main.iliWeY').find('p').should('contain', 'Product(s) found');
  });
});
