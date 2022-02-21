import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <header>
        <section className="login">
          <img src={ logo } className="login__logo" alt="logo" />
          <div className="login__glow">&nbsp;</div>
          <div className="login__form">
            <Login />
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
