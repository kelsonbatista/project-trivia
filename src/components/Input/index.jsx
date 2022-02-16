import React from 'react';

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

export default Input;
