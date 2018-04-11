import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';


import Main from './Main';
import Header from './Header';
import Banner from '../components/Banner';
import Footer from './Footer';
import FloatCart from './../components/floatCart/FloatCart';

import store from './../store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Banner />
          <Main />
          <Footer />
          <FloatCart />
        </div>
      </Provider>
    )
  }
}

export default App;
