import React, { useState } from 'react';
import logo from './trivia.png';
import './App.css';
import Input from './components/Input';

function App() {
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');

  function handleChange({ target: { name, value } }) {
    setName(name);
    setEmail(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <Input
          classDiv="input__name"
          data-testid="input-player-name"
          id="name"
          name="name"
          onChange={ () => handleChange() }
          placeholder="Digite seu nome"
          value={ userName }
          type="text"
        />
        <Input
          classDiv="input__email"
          data-testid="input-player-name"
          id="email"
          name="email"
          onChange={ () => handleChange() }
          placeholder="Digite seu email"
          value={ userEmail }
          type="text"
        />
      </header>
    </div>
  );
}

export default App;
