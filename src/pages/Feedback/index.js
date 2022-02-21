import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableApp from '../../components/Table';
import Button from '../../components/Button';
import { THREE } from '../../commons/constants';
import './style.css';

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
    <div className="feedback">
      <section className="feedback__left">
        <div className="feedback__header">
          <TableApp
            className="feedback__profile-name"
            classPicture="feedback__profile-picture"
            classPictureImage="feedback__profile-image"
            classScore="feedback__profile-score"
            classTable="feedback__profile"
            name={ name }
            score={ score }
            gravatarEmail={ gravatarEmail }
          />
        </div>
        <div className="feedback__body">
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
        </div>
        <div className="feedback__btn">
          <Button
            className="play__btn"
            dataTestid="btn-play-again"
            onClick={ () => history.push('/game') }
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
      <section className="feedback__right">
        &nbsp;
      </section>
    </div>
  );
}

Feedback.propTypes = {
  player: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps, null)(Feedback);
