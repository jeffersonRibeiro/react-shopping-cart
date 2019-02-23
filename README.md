## 🛍️ Simple ecommerce cart application [![CircleCI](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart.svg?style=svg)](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart)

<p align="center">

  <img src="./doc/react-shopping-cart-min.gif">
</p>

## Basic Overview - [Live Demo](https://react-shopping-cart-67954.firebaseapp.com/)

This simple shopping cart prototype shows how React components and Redux can be used to build a
friendly user experience with instant visual updates and scaleable code in ecommerce applications.

#### Features

- Add and remove products from the floating cart
- Sort products by highest to lowest and lowest to highest price
- Filter products by available sizes
- Products persist in floating cart after page reloads
- Unit tests, integration tests and e2e testing
- Responsive design

## Getting started

Try playing with the code on CodeSandbox :)

[![Edit app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/74rykw70qq)

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
