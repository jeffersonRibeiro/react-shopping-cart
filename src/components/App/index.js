import React from 'react';

import Filter from '../Filter';
import Shelf from '../Shelf';

import { Container, LayoutSide, LayoutMain } from './styles';

import PRODUCTS from '../../mock/products.json';

const App = () => (
  <Container>
    <LayoutSide>Sidebar</LayoutSide>
    <LayoutMain>
      <Shelf products={PRODUCTS.products} />
    </LayoutMain>
    {/* <Filter /> */}
  </Container>
);

export default App;
