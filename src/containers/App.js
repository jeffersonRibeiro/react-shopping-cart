import React, { Component } from 'react';
import './App.css';

import bannerImage from '../static/banner.jpg';

import { Provider } from 'react-redux';


import Main from './Main';
import Banner from '../components/Banner';
import Footer from './Footer';
import FloatCart from './../components/floatCart/FloatCart';

import store from './../store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Banner src={bannerImage} alt='Promoção Camisas do Timão' />
          <Main />
          <Footer />
          <FloatCart />
        </div>
      </Provider>
    )
  }
}

export default App;
