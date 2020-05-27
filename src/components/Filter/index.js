import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import GithubStarButton from '../github/StarButton';

import { Container, Title } from './styles';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

function Filter(props) {
  const selectedCheckboxes = new Set();

  const toggleCheckbox = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    // props.updateFilters(Array.from(selectedCheckboxes));
  };

  return (
    <Container>
      <Title>Sizes:</Title>
      <div>
        {availableSizes.map((label) => (
          <Checkbox
            classes="filters-available-size"
            label={label}
            handleCheckboxChange={toggleCheckbox}
            key={label}
          />
        ))}
      </div>
      <GithubStarButton />
    </Container>
  );
}

Filter.propTypes = {
  filters: PropTypes.array,
};

export default Filter;
