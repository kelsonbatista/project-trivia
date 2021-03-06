import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css';
import fetchToken from '../../services/token';
import { requestToken, setPlayer } from '../../store/actions';

function Login(props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const history = useHistory();
  const { dispatchPlayer, dispatchToken } = props;

  function handleChange({ target: { name, value } }) {
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handlePlayer() {
    const hash = md5(user.email).toString();
    const player = {
      name: user.name,
      assertions: 0,
      score: 0,
      total: 0,
      gravatarEmail: `https://www.gravatar.com/avatar/${hash}`,
    };
    dispatchPlayer(player);
  }

  async function handleClick() {
    const tokenInfo = await fetchToken();
    localStorage.setItem('token', JSON.stringify(tokenInfo.token));
    dispatchToken(tokenInfo.token);
    handlePlayer();
    history.push('/game');
  }

  return (
    <>
      <Input
        classDiv="login__div"
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
        classDiv="login__div"
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
      <Button
        className="settings__button"
        dataTestid="btn-settings"
        id="settingsbtn"
        name="settings-btn"
        onClick={ () => history.push('/settings') }
        text="Settings"
        type="button"
      />
    </>
  );
}

Login.propTypes = {
  history: PropTypes.instanceOf(Object),
  dispatchToken: PropTypes.func,
  dispatchPlayer: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: (tokenInfo) => dispatch(requestToken(tokenInfo)),
  dispatchPlayer: (player) => dispatch(setPlayer(player)),
});

export default connect(null, mapDispatchToProps)(Login);
