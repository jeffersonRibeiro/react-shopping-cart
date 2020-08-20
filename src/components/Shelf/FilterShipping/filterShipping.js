import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateShipping } from '../../../services/FilterShipping/filterShippingAction'; // need to address
import Selectbox from '../../Selectbox';

const sortBy = [
  { value: '', label: 'Select' },
  { value: 'freeShipping', label: 'Free shipping' },
  { value: 'nonFreeShipping', label: 'Non free shipping' }
];

const FilterShipping = ({ updateShipping, sort }) => (
  <div className="sort">
    Free shipping availability:
    <Selectbox
      options={sortBy}
      handleOnChange={value => updateShipping(value)}
    />
  </div>
);

FilterShipping.propTypes = {
  updateShipping: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateShipping }
)(FilterShipping);
