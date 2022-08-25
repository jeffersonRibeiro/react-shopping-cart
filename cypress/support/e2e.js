import './commands';

beforeEach(() => {
  cy.window().then((window) => {
    window.sessionStorage.clear();
    window.localStorage.clear();
  });
});
Cypress.on('uncaught:exception', () => false);
