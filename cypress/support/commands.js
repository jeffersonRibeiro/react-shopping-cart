Cypress.Commands.add('GetByTestId', (id) => {
	cy.get(`[data-testid="${id}"]`);
});