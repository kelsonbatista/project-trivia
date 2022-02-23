import React from 'react';
import logo from './assets/images/logo.png';
import localVideo from './assets/videos/intro.mp4';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <header>
        <div className="video-container">
          <video autoPlay muted loop>
            <source src={ localVideo } type="video/mp4" />
          </video>
        </div>
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
