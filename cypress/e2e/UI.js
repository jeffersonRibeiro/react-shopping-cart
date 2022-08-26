import { cart, mainPage } from '../locators/index';
import pages from '../fixtures/pages.json';
import utils from '../src/utils';

describe('xxx', () => {
	it('Clicking on Add to cart should add the item to the cart and open the side card menue, @ID: 01', () => {
		cy.visit('/');
		cy.GetByTestId(mainPage.addToCart).eq(0).click();
		cy.GetByTestId(cart.checkOutButton).should('be.visible');
		cy.contains('Cropped Stay Groovy off white').should('be.visible')
	});

	it('Clicking the x icon on an iteam should remove it from cart, @ID: 02', () => {
		cy.visit('/');
		cy.GetByTestId(mainPage.addToCart).eq(0).click()
		cy.GetByTestId(cart.checkOutButton).should('be.visible');
		cy.get(cart.removeItemFromCart).click();
		cy.GetByTestId(cart.subTotal).should('have.text', '$ 0.00');
	});

	it('Checking the functionalty of filtering, @ID: 03', () => {
		cy.visit('/');
		cy.GetByTestId(mainPage.addToCart).should('have.length', 16);
		cy.get('[value="XS"]').check({force:true});
		cy.GetByTestId(mainPage.addToCart).should('have.length', 1);
		cy.get('[value="XXL"]').check({force:true});
		cy.GetByTestId(mainPage.addToCart).should('have.length', 5);
		cy.get('[value="XXL"]').uncheck({force:true});
		cy.GetByTestId(mainPage.addToCart).should('have.length', 1);
	});

	it('x, @ID: 04', () => {
		cy.visit('/');
		cy.GetByTestId(mainPage.addToCart).eq(0).click()
		cy.GetByTestId(cart.checkOutButton).should('be.visible');
		cy.GetByTestId(cart.increaseQuatity).click()
		cy.GetByTestId(cart.increaseQuatity).click()
		cy.GetByTestId(cart.increaseQuatity).click()
		cy.GetByTestId(cart.subTotal).should('have.text', `$ ${10.90 * 4}0`);
		cy.GetByTestId(cart.decreaseQuatity).click()
		cy.GetByTestId(cart.subTotal).should('have.text', `$ ${10.90 * 3}0`);
	});

	it('x, @ID: 05', () => {
		cy.visit('/');
		cy.GetByTestId(mainPage.openCartButton).eq(0).click()
		cy.GetByTestId(cart.emptyCartText).should('have.text', 'Add some products in the cart :)');
	});

	it('Checking that the header is should the right amout of Product(s), @ID: 06', () => {
		cy.visit('/');
		cy.GetByTestId(mainPage.addToCart).then((items)=>{
			cy.contains(`${items.length} Product(s) found`).should('be.visible');
		})
		cy.get('[value="XS"]').check({force:true});
		cy.GetByTestId(mainPage.addToCart).then((items)=>{
			cy.contains(`${items.length} Product(s) found`).should('be.visible');
		})
	});
});
