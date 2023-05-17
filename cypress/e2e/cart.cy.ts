context('List page', () => {
  const selectors = {
    button: (name: string) => `button:contains("${name}")`,
    productCartDescription: '.CartProduct__Desc-sc-11uohgb-3',
    productDeleteCart: '.CartProduct__DeleteButton-sc-11uohgb-5',
    subTotalPrice: '.Cart__SubPriceValue-sc-1h98xa9-9.dCNBgZ',
  };
  let subTotal: string;

  beforeEach(() => {
    cy.visit('');
  });

  it('Add first product to the cart', () => {
    cy.get(selectors.button('Add to cart')).first().click();
    cy.get(selectors.subTotalPrice).invoke('text').then((text) => {
      subTotal = text;
    });
    cy.get(selectors.button('Checkout')).first().click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Checkout - Subtotal: ${subTotal}`);
    });
  });

  it('Filter by size', () => {
    cy.contains('XS').click();
    cy.get(selectors.button('Add to cart')).first().click();
    cy.get(selectors.productCartDescription).contains('S').should('be.visible');
  });

  it('Remove product from the Cart', () => {
    cy.get(selectors.button('Add to cart')).first().click();
    cy.get(selectors.button('Checkout')).first().click();
    cy.get(selectors.productDeleteCart).click();
    cy.contains('Add some products in the cart').should('be.visible');
  });
});