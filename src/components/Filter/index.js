import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';

import { Container, Title } from './styles';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

const Filter = (props) => {
  const selectedCheckboxes = new Set();

  const toggleCheckbox = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    // props.updateFilters(Array.from(selectedCheckboxes));
  };

  const createCheckbox = (label) => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={toggleCheckbox}
      key={label}
    />
  );

  const createCheckboxes = () => availableSizes.map(createCheckbox);

  return (
    <Container>
      <Title>Sizes:</Title>
      {createCheckboxes()}
    </Container>
  );
};

Filter.propTypes = {
  filters: PropTypes.array,
};

export default Filter;
