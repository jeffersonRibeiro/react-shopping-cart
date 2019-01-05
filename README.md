# Netshoes Front end Recruitment Test

<p align="center">
  <img src="./doc/screenshot.png">
</p>

#### Features

- Add and remove products from the floating cart
- Sort products by highest to lowest and lowest to highest price
- Filter products by available sizes
- Products persist in floating cart even after page reloads
- Responsive design for desktop, tablets and mobile
- Product stoppers for free shipping
- **Unit tests, integration tests and e2e testing.**

#### Using

- React
  - Redux - state management
- Nodejs
  - Express CORS Middleware (Node and React run in different port)
  - Nodemon - for a better development experience
  - Concurrently - To run multiple tasks at once
- Axios - for promise HTTP requests
- CSS
  - BEM methodology
  - SASS
- Moxios - to stub http request
- Enzyme - to mount, shallow, render and query the DOM tree of React components
- Webdriverio - to do automated tests in a real browser environment
- Native local storage - to persist products in cart even after page reload

## About tests

- Unit tests
  - All components have at least a basic smoke test
- **Integration tests**
  - **Fetch product and add to cart properly**
- **e2e**
  - **Webdriverio - Add and remove product from cart**

### Coverage report

![Filters](./doc/coverage-report.png 'Filters')

## Build/Run

```javascript

/* Install the needed packages */
npm install

/* To start both Node and React */
npm start

/* To run the tests */
npm run test

/* Running e2e tests (The app should be running first) */
npm run wdio



```

