import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, handleCheckboxChange }) => {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckboxChange = () => {
    setChecked(!isChecked);

    handleCheckboxChange(label);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
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
