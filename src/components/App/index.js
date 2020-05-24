import React from 'react';

import Filter from '../Filter';
import Shelf from '../Shelf';

import { Container } from './styles';

import PRODUCTS from '../../mock/products.json';

const App = () => (
  <Container>
    <Filter />
    <Shelf products={PRODUCTS.products} />
  </Container>
);

export default App;
