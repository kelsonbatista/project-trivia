import React from 'react';
import logo from './assets/images/logo.png';
// import video from './assets/videos/intro.mp4';
import './App.css';
import Login from './pages/Login';

// const video = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4';
// const video = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const video = 'https://github.com/kelsonbatista/kelsonbatista.github.io/blob/version/1.0/assets/public/videos/intro.mp4?raw=true';

function App() {
  return (
    <div>
      <header>
        <div className="video-container">
          <video autoPlay muted loop>
            <source src={ video } type="video/mp4" />
            <track
              src="captions_en.vtt"
              kind="captions"
              srcLang="en"
              label="english_captions"
            />
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
