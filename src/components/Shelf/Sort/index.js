import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateSort } from '../../../services/sort/actions';
import Selectbox from '../../Selectbox';

const sortBy = [
  { value: '', label: 'Selecionar' },
  { value: 'lowestprice', label: 'Menor Preço' },
  { value: 'highestprice', label: 'Maior Preço' }
];

class Sort extends Component {
  static propTypes = {
    updateSort: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired
  };

  handleSort = value => {
    this.props.updateSort(value);
  };

  render() {
    return (
      <div className="sort">
        Ordenar por
        <Selectbox options={sortBy} handleOnChange={this.handleSort} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
