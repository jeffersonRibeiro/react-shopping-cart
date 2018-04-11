import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { updateFilters } from '../../actions/filterActions';

import Checkbox from '../Checkbox';

const availableSizes = [
  'S',
  'G',
  'GG',
  'GGG',
  '40',
  '41',
  '43',
];

class Filter extends Component {

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    availableSizes.map(this.createCheckbox)
  )

  render() {
    return (
      <div>
        <h4>Tamanhos:</h4>
        {this.createCheckboxes()}
      </div>
    );
  }
}

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  filters: state.filters.items
})

export default connect(mapStateToProps, { updateFilters })(Filter);