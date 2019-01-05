import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Selectbox extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    classes: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired
  };

  state = {
    selected: ''
  };

  createOptions = options =>
    options.map(o => (
      <option value={o.value} key={o.value}>
        {o.label}
      </option>
    ));

  onChange = e => {
    this.props.handleOnChange(e.target.value);
  };

  render() {
    const { classes, options } = this.props;

    return (
      <select onChange={e => this.onChange(e)} className={classes}>
        {this.createOptions(options)}
      </select>
    );
  }
}

export default Selectbox;
