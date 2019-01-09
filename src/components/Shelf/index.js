import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../services/shelf/actions';
import { addProduct } from '../../services/cart/actions';

import Product from './Product';
import Filter from './Filter';
import ShelfHeader from './ShelfHeader';
import Clearfix from '../Clearfix';
import Spinner from '../Spinner';

import './style.scss';

class Shelf extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    addProduct: PropTypes.func.isRequired,
    filters: PropTypes.array,
    sort: PropTypes.string
  };

  state = {
    loading: false
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { filters: nextFilters, sort: nextSort } = nextProps;

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(nextFilters, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, nextSort);
    }
  }

  handleFetchProducts = (
    filters = this.props.filters,
    sort = this.props.sort
  ) => {
    this.setState({ loading: true });
    this.props.fetchProducts(filters, sort, () => {
      this.setState({ loading: false });
    });
  };

  render() {
    const { products } = this.props;

    const p = products.map(p => {
      return (
        <Product product={p} addProduct={this.props.addProduct} key={p.id} />
      );
    });

    return (
      <React.Fragment>
        {this.state.loading && <Spinner />}
        <Filter />
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length} />
          {p}
          <Clearfix />
        </div>
        <Clearfix />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.shelf.products,
  filters: state.filters.items,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchProducts, addProduct }
)(Shelf);
