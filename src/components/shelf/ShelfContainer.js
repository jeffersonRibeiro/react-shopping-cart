import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';
import { addProduct } from '../../actions/floatCartActions';

import Product from './Product';
import Filter from './Filter';


class ShelfContainer extends Component {
  constructor(){
    super();

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { filters } = nextProps;

    if(filters !== this.props.filters){
      this.handleFilter(filters);
    }
  }

  handleFilter(filters) {
    this.props.fetchProducts(filters);
  }

  render() {
    const { products } = this.props;

    const p = products.map(p => {
      return (
        <Product
          product={p}
          addProduct={this.props.addProduct}
          key={p.sku}
        />
      );
    });

    return <React.Fragment>
        <header>
          <h2>Camisas Timão</h2>
          <small>Bicampeão Paulista</small>
        </header>

        <main>
          <Filter />
          <div className="shelf-container">
            {p}
          </div>
        </main>
        
        <footer>
        </footer>
      
      </React.Fragment>;

  }
}

ShelfContainer.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
  filters: PropTypes.array
}

const mapStateToProps = state => ({
  products: state.products.items,
  filters: state.filters.items
})

export default connect(mapStateToProps, { fetchProducts, addProduct })(ShelfContainer);