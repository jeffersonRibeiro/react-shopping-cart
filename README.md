## 🛍️ Simple ecommerce cart application built with React & Redux [![CircleCI](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart.svg?style=svg)](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart)

<p align="center">
  <img src="https://img.shields.io/badge/React-16.6.1-blue.svg">
  <img src="https://img.shields.io/badge/Redux-4.0.1-blue.svg?colorB=764abc">
  <img src="https://img.shields.io/badge/Nodejs-8.11.3-blue.svg?colorB=90c53f">
  <img src="https://img.shields.io/badge/Express-4.16.4-blue.svg?colorB=47535e">
  <br/>
  <img src="./doc/react-shopping-cart.gif">
</p>

## Basic Overview - [Live Demo](https://react-shopping-cart-67954.firebaseapp.com/)

This simple shopping cart prototype shows how React components and Redux can be used to build a
friendly user experience with instant visual updates and scaleable code in ecommerce applications.

#### Features

- Add and remove products from the floating cart
- Sort products by highest to lowest and lowest to highest price
- Filter products by available sizes
- Products persist in floating cart even after page reloads
- Responsive design for desktop, tablets and mobile
- Product stoppers for free shipping
- Unit tests, integration tests and e2e testing

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

## Getting started

You can play with the code on CodeSandbox :)

[![Edit react-shopping-cart](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/r01pkz065o)

## Build/Run

#### Requirements

- Node.js
- NPM

```javascript

/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm start

/* To run the tests */
npm run test

/* Running e2e tests */
npm run wdio


```

## About tests

- Unit tests
  - All components have at least a basic smoke test
- Integration tests
  - Fetch product and add to cart properly
- e2e
  - Webdriverio - Add and remove product from cart

### Copyright and license

The MIT License (MIT). Please see License File for more information.

<br/>
<br/>

<p align="center"><img src="https://avatars2.githubusercontent.com/u/20846473?s=70&v=4" width="35" height="35"/></p>
<p align="center">
<sub>A little project by <a href="http://www.jeffersonribeiro.com/">Jefferson Ribeiro</a></sub>
</p>
