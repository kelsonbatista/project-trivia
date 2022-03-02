import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decode } from 'he';
import fetchTriviaApi from '../../services/triviaApi';
import TableApp from '../../components/Table';
import Button from '../../components/Button';
import { requestToken, setPlayer } from '../../store/actions';
import fetchToken from '../../services/token';
import Loading from '../../components/Loading';
import { HALF, ONE, TWO, THREE, FOUR,
  TEN, THIRTY, THOUSAND } from '../../commons/constants';
import './style.css';
import logo from '../../assets/images/logo.png';
import { entrada, handleConversation,
  handlePlay, rightAnswer, wrongAnswer } from './audio';

function Game(props) {
  const interval = useRef();
  const { dispatchPlayer, dispatchToken, history,
    player: { name, assertions, score, total, gravatarEmail }, token } = props;
  const [questions, setQuestions] = useState([]);
  // const [newQuestionSound, setNewQuestionSound] = useState(0);
  const [countQuestions, setCountQuestions] = useState(0);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(THIRTY);
  const [timeEnd, setTimeEnd] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const answerCorrect = useRef(false);
  const answerIncorrect = useRef(false);
  const [answers, setAnswers] = useState({
    correct: '',
    incorrect: [],
    all: [],
  });

  const man = ['man1', 'man2', 'man3', 'man4', 'man5', 'man6', 'man7'];

  async function handleTrivia() {
    setLoading(true);
    let fetchTrivia = await fetchTriviaApi(token);
    if (fetchTrivia.response_code === THREE) {
      const tokenInfo = await fetchToken();
      dispatchToken(tokenInfo.token);
      fetchTrivia = await fetchTriviaApi(tokenInfo.token);
    }
    setQuestions(fetchTrivia.results);
    setLoading(false);
  }

  function handleAnswers() {
    if (questions.length > 0) {
      const {
        correct_answer: correct,
        incorrect_answers: incorrect,
      } = questions[index];
      // https://flaviocopes.com/how-to-shuffle-array-javascript/
      let all = [correct, ...incorrect];
      all = all.sort(() => Math.random() - HALF);
      setAnswers({
        ...answers,
        correct,
        incorrect,
        all,
      });
    }
  }

  // https://stackoverflow.com/questions/71184843/how-to-update-state-using-setinterval-on-functional-components-in-react/71185514#71185514
  function handleTimer() { // interval useRef para funcionar
    function runTimer() {
      interval.current = setInterval(() => {
        setTimer((count) => count - 1);
      }, THOUSAND);
    }
    if (timer <= 0 && interval.current) {
      setDisabled(true);
      setTimeEnd(true);
      handlePlay(wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)]);
      clearInterval(interval.current);
    }
    if (timer === THIRTY) {
      runTimer();
    }
  }

  function calcScore() {
    const level = questions[index].difficulty;
    if (level === 'hard') return THREE;
    if (level === 'medium') return TWO;
    return ONE;
  }

  function handleClick({ target }) {
    const correct = target.getAttribute('data-testid').includes('correct');
    if (correct) {
      const player = {
        name,
        assertions: assertions + 1,
        score: TEN + (timer * calcScore()),
        total: total + (TEN + (timer * calcScore())),
        gravatarEmail,
      };
      handlePlay(rightAnswer[Math.floor(Math.random() * rightAnswer.length)]);
      dispatchPlayer(player);
      answerCorrect.current = true;
    } else {
      handlePlay(wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)]);
      answerIncorrect.current = true;
    }
    setDisabled(true);
    clearInterval(interval.current);
  }

  function handleNext() {
    setCountQuestions(countQuestions + 1);
    setIndex(index + 1);
    setDisabled(false);
    answerCorrect.current = false;
    answerIncorrect.current = false;
    setTimer(THIRTY);
    handleAnswers();
    if (countQuestions === FOUR) {
      setCountQuestions(0);
      history.push('/feedback');
    }
  }

  useEffect(() => { // did mount
    handleTrivia();
  }, []);

  useEffect(() => { // did update
    handleAnswers();
  }, [questions]);

  useEffect(() => { // did update
    handlePlay(entrada);
  }, [index]);

  useEffect(() => { // did update
    handleTimer();
    handleConversation(timer);
  }, [timer]);

  return (
    <div className="game">
      <div className="game__left">
        <header>
          <img src={ logo } alt="Logo" className="game__logo" />
          <div>
            <p className="game__score">{ `Pontos: ${score}` }</p>
            <p className="game__total">{ `Total: ${total}` }</p>
            { questions.length > 0 && (
              <span className="game__category">
                <p data-testid="question-category">
                  { decode(questions[index].category) }
                </p>
              </span>
            ) }
          </div>
          <div className="game__timer">
            <div className="game__circle">&nbsp;</div>
            <span>{ timer }</span>
          </div>
        </header>
        <main>
          { loading && <Loading />}
          { questions.length > 0 && (
            <div>
              <div className="game__question">
                <div data-testid="question-text" className="game__text">
                  {/* { setNewQuestionSound(1) } */}
                  { decode(questions[index].question) }
                </div>
              </div>
              <div className="game__answers" data-testid="answer-options">
                { /* // https://flaviocopes.com/how-to-shuffle-array-javascript/ */}
                { answers.all.map((answer, item) => (
                  <Button
                    className={ ((answer === answers.correct)
                      ? 'correct game__answer-txt'
                      : 'incorrect game__answer-txt') }
                    dataTestid={ (answer === answers.correct
                      ? 'correct-answer'
                      : `wrong-answer-${item}`) }
                    disabled={ disabled }
                    index={ item }
                    key={ item }
                    onClick={ (event) => handleClick(event) }
                    text={ decode(answer) }
                    type="button"
                  />
                )) }
              </div>
              <div className="game__messages">
                { (disabled && timeEnd)
                && <p className="msg__timeup">Tempo esgotado! Resposta inválida.</p>}
                { (disabled && answerIncorrect.current)
                  && <p className="msg__wrong">Infelizmente você errou!</p>}
                { (disabled && answerCorrect.current)
                && <p className="msg__right">Parabéns! Você acertou!</p>}
              </div>
            </div>
          )}
          <div className="game__footer">
            <TableApp
              className="game__profile-name"
              classPicture="game__profile-picture"
              classPictureImage="game__profile-image"
              classScore="game__profile-score"
              classTable="game__profile"
              name={ name }
              score={ score }
              gravatarEmail={ gravatarEmail }
            />
            { disabled && (
              <Button
                className="next"
                dataTestid="btn-next"
                onClick={ () => handleNext() }
                text="Next"
                type="button"
              />
            )}
          </div>
        </main>
      </div>
      <div className={ `game__right ${man[index]}` }>
        &nbsp;
      </div>
    </div>
  );
}

Game.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  token: PropTypes.string,
  history: PropTypes.instanceOf(Object),
}.isRequired;

const mapStateToProps = (state) => ({
  player: state.player,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: (tokenInfo) => dispatch(requestToken(tokenInfo)),
  dispatchPlayer: (player) => dispatch(setPlayer(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
