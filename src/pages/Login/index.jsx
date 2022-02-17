import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css';
import fetchToken from '../../services/token';
import requestToken from '../../store/actions';

function Login(props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const history = useHistory();

  function handleChange({ target: { name, value } }) {
    setUser({
      ...user,
      [name]: value,
    });
  }

  async function handleClick() {
    const { dispatchToken } = props;
    const tokenInfo = await fetchToken();
    localStorage.setItem('token', JSON.stringify(tokenInfo.token));
    dispatchToken(tokenInfo.token);
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
  dispatchToken: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: (tokenInfo) => dispatch(requestToken(tokenInfo)),
});

export default connect(null, mapDispatchToProps)(Login);
