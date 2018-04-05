import React, { Component } from 'react';

import Product from './Product';

class ShelfContainer extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }

    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount(){
    this.fetchProducts()
        .then( json => {
          const products = json.products;
          this.setState({products});
        })
        .catch(err => {
          console.log(err);
          throw new Error('Não foi possível obter os prodtos. Tente novamente mais tarde.');
        });
  }

  async fetchProducts(callback){
    const res = await fetch('//localhost:8001/api/products');
    const json = await res.json();

    return json;
  }

  addToCart(sku){
    console.log(sku);
  }

  render() {
    const products = this.state.products.map(p => {
      return (
        <Product
          product={p}
          addToCart={this.addToCart}
          key={p.sku}
        />
      );
    });

    return (
      <div className="shelfContainer">
        {products}
      </div>
    );
  }
}

export default ShelfContainer;