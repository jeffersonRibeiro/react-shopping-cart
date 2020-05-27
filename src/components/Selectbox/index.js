import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Selectbox({ options, classes, handleOnChange }) {
  return (
    <Container
      onChange={(e) => handleOnChange(e.target.value)}
      className={classes}
    >
      {options.map((o) => (
        <option value={o.value} key={o.value}>
          {o.label}
        </option>
      ))}
    </Container>
  );
}

Selectbox.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
};

export default Selectbox;
