import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import ShelfHeader from './ShelfHeader';
import ShelfProducts from './ShelfProducts';

import { Container } from './styles';

function Shelf({ products }) {
  const [isLoading] = useState(false);

  return (
    <Container>
      {isLoading && <Spinner />}
      <ShelfHeader productsQuantity={products.length} />
      <ShelfProducts products={products} />
    </Container>
  );
}

Shelf.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Shelf;
