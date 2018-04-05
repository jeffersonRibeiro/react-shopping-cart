import React, { Component } from 'react';
import './App.css';

import ShelfContainer from '../components/ShelfContainer';
import FloatCart from '../components/FloatCart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isFloatCartOpen: false
    };

    this.openFloatCart = this.openFloatCart.bind(this);
    this.closeFloatCart = this.closeFloatCart.bind(this);
  }

  openFloatCart() {
    this.setState({ isFloatCartOpen: true });
  }

  closeFloatCart() {
    this.setState({ isFloatCartOpen: false });
  }

  render() {
    return (
      <div className="App">
        <ShelfContainer openFloatCart={this.openFloatCart} />
        <FloatCart
          closeFloatCart={this.closeFloatCart}
          isOpen={this.state.isFloatCartOpen}
        />
      </div>
    );
  }
}

export default App;
