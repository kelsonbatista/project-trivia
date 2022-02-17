import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { className, dataTestid, disabled, id, name, onClick, type, text } = props;

  return (
    <button
      className={ className }
      data-testid={ dataTestid }
      disabled={ disabled }
      id={ id }
      name={ name }
      onClick={ onClick }
      type={ type === 'submit' ? 'submit' : 'button' }
    >
      { text }
    </button>
  );
}

Button.propTypes = {
  dataTestid: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default Button;
