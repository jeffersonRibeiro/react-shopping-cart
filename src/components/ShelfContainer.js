import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

import Product from './Product';

class ShelfContainer extends Component {

  componentWillMount(){
    this.props.fetchProducts();
  }


  addToCart(sku){
    this.props.openFloatCart();
    console.log(sku);
  }

  render() {
    const products = this.props.products.map(p => {
      return (
        <Product
          product={p}
          addToCart={this.addToCart}
          key={p.sku}
        />
      );
    });

    return (
      <div className="shelf-container">
        {products}
      </div>
    );
  }
}

ShelfContainer.PropTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  products: state.products.items
})

export default connect(mapStateToProps, { fetchProducts })(ShelfContainer);