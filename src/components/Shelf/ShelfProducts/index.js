import React from 'react';
import Product from './Product';

import { Container } from './styles';

function ShelfProducts({ products }) {
  return (
    <Container>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
}

export default ShelfProducts;
