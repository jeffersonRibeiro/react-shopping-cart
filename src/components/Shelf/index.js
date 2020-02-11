import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../services/shelf/actions';

import Spinner from '../Spinner';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';

import './style.scss';

class Shelf extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    filters: PropTypes.array,
    sort: PropTypes.string
  };

  state = {
    isLoading: false,
    filters: this.props.filters,
    sort: this.props.sort
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  // componentWillReceiveProps(nextProps) {
  //   const { filters: nextFilters, sort: nextSort } = nextProps;
  //   const { filters } = this.props;
  //   if (nextFilters.length !== filters.length) {
  //     this.handleFetchProducts(nextFilters, undefined);
  //   }

  //   if (nextSort !== this.props.sort) {
  //     this.handleFetchProducts(undefined, nextSort);
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.filters.length !== prevState.filters.length) {
      return { filters: nextProps.filters };
    }

    if (nextProps.sort !== prevState.sort) {
      return { sort: nextProps.sort };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { filters: nextFilters, sort: nextSort } = this.state;
    const { filters, sort } = prevState;

    if (nextFilters.length !== filters.length) {
      this.handleFetchProducts(nextFilters, undefined);
    }

    if (nextSort !== sort) {
      this.handleFetchProducts(undefined, nextSort);
    }
  }

  handleFetchProducts = (
    filters = this.state.filters,
    sort = this.state.sort
  ) => {
    this.setState({ isLoading: true });
    this.props.fetchProducts(filters, sort, () => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { products } = this.props;
    const { isLoading } = this.state;

    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length} />
          <ProductList products={products} />
        </div>
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
  { fetchProducts }
)(Shelf);
