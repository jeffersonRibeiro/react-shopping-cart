import React from 'react';

import Selectbox from '../../Selectbox';

import { Container } from './styles';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' },
];

const Sort = () => (
  <Container>
    Order by
    <Selectbox
      options={sortBy}
      handleOnChange={() => console.log('handle on change here')}
    />
  </Container>
);

export default Sort;
