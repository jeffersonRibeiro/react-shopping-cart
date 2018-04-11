import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';


import Main from '../components/main/Main';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import FloatCart from './../components/floatCart/FloatCart';

import store from './../store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
          <Footer />
          <FloatCart />
        </div>
      </Provider>
    )
  }
}

export default App;
