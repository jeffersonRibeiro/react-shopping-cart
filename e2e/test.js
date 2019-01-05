const expect = require('chai').expect;

describe('Shopping cart', () => {
  it('should add a product to cart and remove it', () => {
    browser.url('https://react-shopping-cart-67954.firebaseapp.com/');
    browser.waitForText('.shelf-item');

    /* Open float cart */
    browser.click('.bag--float-cart-closed');

    /* Bag should start with 0 products */
    browser.waitForText('.bag__quantity');
    let bagProductsQtd = browser.getText('.bag__quantity');
    expect(bagProductsQtd).to.equal('0');

    /* Add a product to cart */
    browser.click('.shelf-item');
    browser.pause(100);

    /* And it should have 1 product in it now */
    bagProductsQtd = browser.getText('.bag__quantity');
    expect(bagProductsQtd).to.equal('1');

    /* Remove the product from cart and now it should show 0 products in bag */
    browser.click('.shelf-item__del');
    browser.pause(100);
    bagProductsQtd = browser.getText('.bag__quantity');
    expect(bagProductsQtd).to.equal('0');
  });
});
