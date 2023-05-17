import './commands';
import 'cypress-mochawesome-reporter/register';

declare global {
  namespace Cypress {
    interface Chainable {
      getBySel(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}