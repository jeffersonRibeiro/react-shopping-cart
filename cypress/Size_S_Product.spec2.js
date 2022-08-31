describe('TypeScript React Shopping Cart', () => {
  beforeEach('open application', () => {
    cy.openApplication();
  });
  it('Verify the product in Size Small', () => {
    cy.get('.Filter__Container-sc-bj2vay-0').then((label) => {
      cy.wrap(label).find('.checkmark').eq(1).contains('S').click();
      cy.get('[tabindex="1"]')
        .eq(0)
        .find('p')
        .should('contain', 'Black Batman T-shirt');
      cy.get('[tabindex="1"]')
        .eq(1)
        .find('p')
        .should('contain', 'Blue Sweatshirt');
    });
  });

  it('Verify the product known as blue t shirt added to the cart', () => {
    cy.get('.App__Main-sc-ebmerl-3').then((label) => {
      cy.wrap(label)
        .find('div.Product__Container-sc-124al1g-2.joQRPa')
        .find('p')
        .should('contain', 'Blue T-Shirt');
      cy.wrap(label)
        .find('div.Product__Container-sc-124al1g-2.joQRPa')
        .find('button.Product__BuyButton-sc-124al1g-0.jCZDKU')
        .click();
      cy.get('div.Cart__CartContent-sc-1h98xa9-4.cOJbZW')
        .find('p.CartProduct__Title-sc-11uohgb-2.jVsMjn')
        .should('contain', 'Blue T-Shirt');
    });
  });

  it.only('Verify the POP UP dialog box is executed after clicking the checkout button', () => {
    cy.get('.App__Main-sc-ebmerl-3').then((label) => {
      cy.wrap(label)
        .find('div.Product__Container-sc-124al1g-2.jinahK')
        .find('p')
        .should('contain', 'Black T-shirt with white stripes');
      cy.wrap(label)
        .find('div.Product__Container-sc-124al1g-2.jinahK')
        .find('button.Product__BuyButton-sc-124al1g-0.jCZDKU')
        .click();
      cy.get('div.Cart__CartContent-sc-1h98xa9-4.cOJbZW')
        .find('p.CartProduct__Title-sc-11uohgb-2.jVsMjn')
        .should('contain', 'Black T-shirt with white stripes');
      cy.get('div.Cart__CartContent-sc-1h98xa9-4.cOJbZW')
        .find('button.Cart__CheckoutButton-sc-1h98xa9-11.elxCN')
        .click();

      cy.get('div.Cart__CartContent-sc-1h98xa9-4.cOJbZW')
        .find('button.Cart__CheckoutButton-sc-1h98xa9-11.elxCN')
        .click();
      cy.on('window:confirm', (confirm) => {
        expect(confirm).to.equal('Checkout - Subtotal: $ 14.90');
      });
    });
  });
});
