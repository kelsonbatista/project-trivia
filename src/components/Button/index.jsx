import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { className, dataTestid, disabled, id,
    key, name, onClick, type, text } = props;

  // const item = index + 1;
  // const answerNumber = (<span className="game__answer-num">{ item }</span>);

  // <span className="game__answer">
  //     {item ? answerNumber : ''}
  // </span>

  return (
    <button
      className={ className }
      data-testid={ dataTestid }
      disabled={ disabled }
      id={ id }
      key={ key }
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
