import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = props => {
  const { label, classes } = props;
  const [isChecked, setChecked] = useState(false);

  const toggleCheckboxChange = (props, isChecked, setChecked) => {
    const { handleCheckboxChange, label } = props;

    setChecked(!isChecked);
    handleCheckboxChange(label);
  };

  return (
    <div className={classes}>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={() => toggleCheckboxChange(props, isChecked, setChecked)}
        />
        <span className="checkmark">{label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};

export default Checkbox;
