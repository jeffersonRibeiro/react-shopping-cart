import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort';
import FilterShipping from '../../Shelf/FilterShipping/filterShipping';

const ShelfHeader = props => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.productsLength} Product(s) found.</span>
      </small>
      <Sort />
      <FilterShipping />
    </div>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
