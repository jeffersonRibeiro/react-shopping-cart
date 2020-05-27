import React from 'react';
import PropTypes from 'prop-types';

import ShelfSort from '../ShelfSort';

import { Container, ProductsFound } from './styles';

const ShelfHeader = ({ productsQuantity }) => {
  return (
    <Container>
      <ProductsFound>
        <span>{productsQuantity} Product(s) found.</span>
      </ProductsFound>
      <ShelfSort />
    </Container>
  );
};

ShelfHeader.propTypes = {
  productsQuantity: PropTypes.number.isRequired,
};

export default ShelfHeader;
