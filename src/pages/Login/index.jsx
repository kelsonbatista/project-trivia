import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css';

function Login(props) {
  const { history } = props;

  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  function handleChange({ target: { name, value } }) {
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleClick() {
    history.push('/game');
  }

  return (
    <>
      <Input
        classDiv="login"
        className="login__name"
        dataTestid="input-player-name"
        id="name"
        name="name"
        onChange={ (event) => handleChange(event) }
        placeholder="Digite seu nome"
        value={ user.name }
        type="text"
      />
      <Input
        classDiv="login"
        className="login__email"
        dataTestid="input-gravatar-email"
        id="email"
        name="email"
        onChange={ (event) => handleChange(event) }
        placeholder="Digite seu email"
        value={ user.email }
        type="email"
      />
      <Button
        className={ `login__button ${(user.name && user.email) ? '' : 'disabled'}` }
        dataTestid="btn-play"
        disabled={ !user.name || !user.email }
        id="loginbtn"
        name="login-btn"
        onClick={ () => handleClick() }
        text="Play"
        type="button"
      />
    </>
  );
}

Login.propTypes = {
  history: PropTypes.instanceOf(Object),
}.isRequired;

export default Login;
