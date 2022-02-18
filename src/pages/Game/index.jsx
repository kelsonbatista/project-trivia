import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import { connect } from 'react-redux';
import TableApp from '../../components/Table';

function Game(props) {
  const { player: { name, score, gravatarEmail } } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1>TRIVIA</h1>
        <TableApp
          name={ name }
          score={ score }
          gravatarEmail={ gravatarEmail }
        />
      </header>
    </div>
  );
}

Game.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps, null)(Game);
