import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addProduct } from '../actions/floatCartActions';

import Product from './Product';

class ShelfContainer extends Component {

  componentWillMount(){
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products.map(p => {
      return (
        <Product
          product={p}
          addProduct={this.props.addProduct}
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

ShelfContainer.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: state.products.items
})

export default connect(mapStateToProps, { fetchProducts, addProduct })(ShelfContainer);