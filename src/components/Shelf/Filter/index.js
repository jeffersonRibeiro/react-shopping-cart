import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';
import Checkbox from '../../Checkbox';

import './style.scss';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class Filter extends Component {
  state = {
    clearFilter: true
  };
  static propTypes = {
    updateFilters: PropTypes.func.isRequired,
    filters: PropTypes.array
  };

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  };

  createCheckbox = label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
      isFilterCleared={this.selectedCheckboxes}
    />
  );

  clearFilter = () => {
    this.selectedCheckboxes.size && this.selectedCheckboxes.clear();
    this.props.updateFilters(Array.from(this.selectedCheckboxes));
    this.setState({ clearFilter: false }, () => {
      this.setState({ clearFilter: true });
    });
  };

  createCheckboxes = () => availableSizes.map(this.createCheckbox);

  render() {
    return (
      <div className="filters">
        <h4 className="title">Sizes:</h4>
        <span className="clear-filter" onClick={this.clearFilter}>
          Clear Filter
        </span>
        {this.state.clearFilter && this.createCheckboxes()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters.items
});

export default connect(
  mapStateToProps,
  { updateFilters }
)(Filter);
