import React from 'react';
import PropTypes from 'prop-types';

import Selectbox from '../../Selectbox';

import { Container } from './styles';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' },
];

const Sort = ({ updateSort, sort }) => (
  <Container>
    Order by
    <Selectbox options={sortBy} handleOnChange={(value) => updateSort(value)} />
  </Container>
);

Sort.propTypes = {
  sort: PropTypes.string.isRequired,
};

export default Sort;
