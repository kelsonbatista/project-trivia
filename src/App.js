import React, { Component } from 'react';
import logo from './trivia.png';
import './App.css';
import Input from './components/Input';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
    }
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <Input
            classDiv="input__name"
            data-testid="input-player-name"
            id="name"
            name="name"
            onChange={ this.handleChange }
            placeholder="Digite seu nome"
            value={ value }
            type="text"
          />
          <Input
            classDiv="input__email"
            data-testid="input-player-name"
            id="email"
            name="email"
            onChange={ () => handleChange() }
            placeholder="Digite seu email"
            value={ value }
            type="text"
          />
        </header>
      </div>
    );
  }
}

export default App;
