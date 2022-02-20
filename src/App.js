import React from 'react';
import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <header>
        <img src={ logo } className="App-logo" alt="logo" />
        <Login />
      </header>
    </div>
  );
}

export default App;
