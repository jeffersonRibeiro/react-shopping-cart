import React from 'react';
import PropTypes from 'prop-types';

import Sort from './Sort';
import Clearfix from '../Clearfix';


const ShelHeader = (props) => {

  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.productsLength} Produto(s) encontrado.</span>
      </small>
      <Sort />
      <Clearfix />
    </div>
  );
}

ShelHeader.propTypes = {
  productsLength: PropTypes.number.isRequired,
}

export default ShelHeader;