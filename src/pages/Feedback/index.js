import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableApp from '../../components/Table';
import Button from '../../components/Button';
import { THREE } from '../../commons/constants';

function Feedback(props) {
  const { history, player: { name, assertions, score, total, gravatarEmail } } = props;

  function checkAssertions() {
    if (assertions < THREE) return 'Could be better...';
    return 'Well Done!';
  }

  function handleRanking() {
    console.log('run function');
    let prevRanking = localStorage.getItem('ranking');

    if (prevRanking === null) prevRanking = [];
    else prevRanking = JSON.parse(prevRanking);

    const player = {
      name,
      score: total,
      picture: gravatarEmail,
    };
    if (Array.isArray(prevRanking)) {
      prevRanking.push(player);
      localStorage.setItem('ranking', JSON.stringify(prevRanking));
    }
  }

  useEffect(() => {
    handleRanking();
  }, []);

  return (
    <section className="feedback">
      <h1>Feedback</h1>
      <TableApp
        name={ name }
        score={ score }
        gravatarEmail={ gravatarEmail }
      />
      <h3 data-testid="feedback-text">{ checkAssertions() }</h3>
      <p>
        <span>Pontos: </span>
        <span data-testid="feedback-total-score">{ score }</span>
      </p>
      <p>
        <span>Total: </span>
        <span data-testid="feedback-total">{ total }</span>
      </p>
      <p>
        <span>Acertos: </span>
        <span data-testid="feedback-total-question">{ assertions }</span>
      </p>
      <div>
        <Button
          className="play__btn"
          dataTestid="btn-play-again"
          onClick={ () => {} }
          text="Play Again"
          type="button"
        />
        <Button
          className="ranking__btn"
          dataTestid="btn-ranking"
          onClick={ () => history.push('/ranking') }
          text="Ranking"
          type="button"
        />
      </div>
    </section>
  );
}

Feedback.propTypes = {
  player: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps, null)(Feedback);
