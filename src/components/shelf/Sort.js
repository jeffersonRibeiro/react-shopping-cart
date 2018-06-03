import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { updateSort } from '../../store/actions/sortActions';

import Selectbox from '../Selectbox';

const sortBy = [
  { value: '',           label: 'Selecionar'  },
  { value: 'menorpreco', label: 'Menor Preço' },
  { value: 'maiorpreco', label: 'Maior Preço' },
]

class Sort extends Component {

  handleSort = (value) => {
    this.props.updateSort(value);
  }

  render() {
    return (
      <div className="sort">
        Ordenar por <Selectbox options={sortBy} handleOnChange={this.handleSort} />
      </div>
    );
  }
}

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  sort: state.sort.item,
})

export default connect(mapStateToProps, { updateSort })(Sort);