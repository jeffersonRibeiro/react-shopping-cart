import React from 'react';

import Filter from '../Filter';
import Shelf from '../Shelf';
import GithubCorner from '../github/Corner';

import { Container, LayoutSide, LayoutMain } from './styles';

import PRODUCTS from '../../mock/products.json';

const App = () => (
  <Container>
    <GithubCorner />
    <LayoutSide>
      <Filter />
    </LayoutSide>
    <LayoutMain>
      <Shelf products={PRODUCTS.products} />
    </LayoutMain>
  </Container>
);

export default App;
