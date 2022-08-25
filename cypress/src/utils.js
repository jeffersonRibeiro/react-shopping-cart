/**
 * Wait for a request to be done successfully
 *
 * @param {object} alias request data object
 */

const waitForSuccessfulStatus = (alias, waitTimeout = 60000) => {
  cy.wait(alias, { timeout: waitTimeout }).then(({ response }) => {
    expect(response.statusCode).to.match(/^2\d{2}/);
  });
};
module.exports = {
  waitForSuccessfulStatus,
};
