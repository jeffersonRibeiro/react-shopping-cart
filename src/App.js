import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';


import ShelfContainer from './components/shelf/ShelfContainer';
import FloatCart from './components/floatCart/FloatCart';

import store from './store';


class App extends Component {
  render() {
    return <Provider store={store}>
        <div className="App">
          <ShelfContainer />
          <FloatCart />
        </div>
      </Provider>;
  }
}

export default App;
