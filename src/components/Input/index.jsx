import React from 'react';
import PropTypes from 'prop-types';

function Input() {
  const {
    classDiv,
    dataTestid,
    id,
    label,
    name,
    onChange,
    placeholder,
    value,
    type,
  } = props;

  return (
    <div className={ classDiv }>
      <label htmlFor={ id }>
        {label}
        <input
          data-testid={ dataTestid }
          id={ id }
          name={ name }
          onChange={ onChange }
          placeholder={ placeholder }
          value={ value }
          type={ type }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  classDiv: PropTypes.string,
  dataTestid: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default Input;
