import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../ShelfSort';

import { Container, ProductsFound } from './styles';

const ShelfHeader = (props) => {
  return (
    <Container>
      <ProductsFound>
        <span>{props.productsLength} Product(s) found.</span>
      </ProductsFound>
      <Sort />
    </Container>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired,
};

export default ShelfHeader;
