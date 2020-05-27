import React from 'react';
import PropTypes from 'prop-types';

import ShelfSort from '../ShelfSort';

import { Container, ProductsFound } from './styles';

const ShelfHeader = ({ productsQuantity }) => {
  return (
    <Container>
      <ProductsFound>{productsQuantity} Product(s) found.</ProductsFound>
      <ShelfSort />
    </Container>
  );
};

ShelfHeader.propTypes = {
  productsQuantity: PropTypes.number.isRequired,
};

export default ShelfHeader;
