import { cart, mainPage } from '../locators/index';
import utils from '../src/utils';

describe('Shopping', () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it('Clicking on Add to cart should add the item to the cart and open the side card menue, @ID: 01', () => {
		cy.GetByTestId(mainPage.addToCart).eq(0).click();
		cy.GetByTestId(cart.checkOutButton).should('be.visible');
		cy.contains('Cropped Stay Groovy off white').should('be.visible')
	});

	it('Clicking the x icon on an iteam should remove it from cart, @ID: 02', () => {
		cy.GetByTestId(mainPage.addToCart).eq(0).click()
		cy.GetByTestId(cart.checkOutButton).should('be.visible');
		cy.get(cart.removeItemFromCart).click();
		cy.GetByTestId(cart.subTotal).should('have.text', '$ 0.00');
	});

	it('Checking the functionalty of filtering, @ID: 03', () => {
		cy.GetByTestId(mainPage.addToCart).should('have.length', 16);
		cy.get(mainPage.filterBySize('XS')).check({ force: true });
		cy.GetByTestId(mainPage.addToCart).should('have.length', 1);
		cy.get(mainPage.filterBySize('XXL')).check({ force: true });
		cy.GetByTestId(mainPage.addToCart).should('have.length', 5);
		cy.get(mainPage.filterBySize('XXL')).uncheck({ force: true });
		cy.GetByTestId(mainPage.addToCart).should('have.length', 1);
	});

	it('Checking the functionalty of subTotal when increacing the items from the cart, @ID: 04', () => {
		cy.GetByTestId(mainPage.addToCart).eq(0).click()
		cy.GetByTestId(cart.checkOutButton).should('be.visible');
		cy.GetByTestId(cart.increaseQuatity).click();
		cy.GetByTestId(cart.increaseQuatity).click();
		cy.GetByTestId(cart.increaseQuatity).click();
		cy.GetByTestId(cart.subTotal).should('have.text', `$ ${10.90 * 4}0`);
		cy.GetByTestId(cart.decreaseQuatity).click()
		cy.GetByTestId(cart.subTotal).should('have.text', `$ ${10.90 * 3}0`);
	});

	it('Checking an empty cart should show a message, @ID: 05', () => {
		cy.GetByTestId(mainPage.openCartButton).eq(0).click()
		cy.GetByTestId(cart.emptyCartText).should('have.text', 'Add some products in the cart :)');
	});

	it('Checking that the header is should the right amout of Product(s), @ID: 06', () => {
		cy.GetByTestId(mainPage.addToCart).then((items) => {
			cy.contains(`${items.length} Product(s) found`).should('be.visible');
		})
		cy.get(mainPage.filterBySize('XS')).check({ force: true });
		cy.GetByTestId(mainPage.addToCart).then((items) => {
			cy.contains(`${items.length} Product(s) found`).should('be.visible');
		})
	});

	it('add dif items to the cart, @ID: 07', () => {
		utils.addItemsToCart([1, 3, 5, 6, 7, 2])
		cy.GetByTestId(cart.cartIconButton).click()
		cy.GetByTestId(cart.checkOutButton).should('be.visible');
		cy.GetByTestId('cartProducts').invoke('text').then((allNumbers) => {
			const removeSpace = allNumbers.replaceAll(" ", '');
			const values = removeSpace.split('$').filter(v => v != "");
			const sumOfCartPrices = values.map(a => parseFloat(a));
			cy.GetByTestId(cart.subTotal).invoke('text').then((cartSub) => {
				const removeSpace = cartSub.replaceAll(" ", '');
				const values = removeSpace.split('$').filter(v => v != "");
				expect(parseFloat(values)).to.be.closeTo(sumOfCartPrices.reduce((a, b) => a + b), 0.1);
			})
		})
	});

	it('Check the functiolaty of the installments, @ID: 08', () => {
		utils.addItemsToCart([3, 3, 5, 6, 11, 12, 12, 15])
		cy.GetByTestId(cart.cartIconButton).click()
		cy.GetByTestId(mainPage.allInstallments).invoke('text').then((fullText) => {
			const cleanText = fullText.match(/^[^\d]*(\d+)/)[1]
			const payment = fullText.match(/\$ [0-9.]+/)[0].split('$')[1]
			cy.GetByTestId(cart.subTotal).invoke('text').then((subTotal) => {
				const numberSubTotal = subTotal.split('$')[1]
				expect(parseFloat(numberSubTotal)).to.be.closeTo(parseFloat(payment) * cleanText, 0.1);
			})
		})
	});

	it('Check the number of added items, @ID: 09', () => {
		const itemsToAdd = [3, 3, 5, 6, 11, 12, 12, 15]
		utils.addItemsToCart(itemsToAdd)
		cy.GetByTestId(cart.cartIconButton).click()
		cy.GetByTestId(cart.numberOfItemsInCart).invoke('text').then((numberOfItems) => {
			expect(parseInt(numberOfItems)).to.eq(itemsToAdd.length)
		})
	});

	it("Check the prompt after checking out without adding any item, @ID: 10", () => {
		cy.GetByTestId(cart.cartIconButton).click()
		cy.GetByTestId(cart.checkOutButton).should('be.visible');
		cy.GetByTestId(cart.checkOutButton).click()
		cy.on('window:alert', (text) => {
			expect(text).to.eq('Add some product in the cart!');
		});
	});

	it("Check the prompt after checking out it should show the right sub total, @ID: 11", () => {
		const itemsToAdd = [3, 3, 5, 6, 11, 12, 12, 15]
		utils.addItemsToCart(itemsToAdd)
		cy.GetByTestId(cart.cartIconButton).click()
		cy.GetByTestId(cart.checkOutButton).click()
		cy.on('window:alert', (text) => {
			expect(text).to.eq("Checkout - Subtotal: $ 225.80");
		})
	});
});
