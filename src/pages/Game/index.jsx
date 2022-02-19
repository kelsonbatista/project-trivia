import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchTriviaApi from '../../services/triviaApi';
import TableApp from '../../components/Table';
import Button from '../../components/Button';
import { requestToken } from '../../store/actions';
import fetchToken from '../../services/token';
import Loading from '../../components/Loading';
import './style.css';

function Game(props) {
  const NOT_FOUND = 3;
  const ONE_SECOND = 1000;
  const THIRTY = 30;
  const FIFTYCENT = 0.5;
  const interval = useRef();
  const { dispatchToken, player: { name, score, gravatarEmail }, token } = props;
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(THIRTY);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({
    correct: '',
    incorrect: [],
    all: [],
  });

  async function handleTrivia() {
    setLoading(true);
    let fetchTrivia = await fetchTriviaApi(token);
    if (fetchTrivia.response_code === NOT_FOUND) {
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
      all = all.sort(() => Math.random() - FIFTYCENT);
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
      }, ONE_SECOND);
    }
    if (timer <= 0 && interval.current) {
      setDisabled(true);
      clearInterval(interval.current);
    }
    if (timer === THIRTY) {
      runTimer();
    }
  }

  function handleClick() {
    console.log('click');
  }

  useEffect(() => { // did mount
    handleTrivia();
  }, []);

  useEffect(() => { // did update
    handleAnswers();
  }, [questions]);

  useEffect(() => { // did update
    handleTimer();
  }, [timer]);

  return (
    <div className="App">
      <header>
        <h1>TRIVIA</h1>
        <TableApp
          name={ name }
          score={ score }
          gravatarEmail={ gravatarEmail }
        />
      </header>
      <main>
        { loading && <Loading />}
        { questions.length > 0 && (
          <div>
            <p data-testid="question-category">
              { `Category: ${questions[index].category}` }
            </p>
            <p>{ `Time: ${timer}` }</p>
            <p data-testid="question-text">
              { questions[index].question }
            </p>
            <div data-testid="answer-options">
              { /* // https://flaviocopes.com/how-to-shuffle-array-javascript/ */}
              { answers.all.map((answer, item) => {
                if (answer === answers.correct) {
                  return (
                    <div key={ item }>
                      <Button
                        className="correct"
                        dataTestid="correct-answer"
                        disabled={ disabled }
                        onClick={ () => handleClick() }
                        text={ answers.correct }
                        type="button"
                      />
                    </div>
                  );
                }
                return (
                  <div key={ item }>
                    <Button
                      className="incorrect"
                      dataTestid={ `wrong-answer-${item}` }
                      disabled={ disabled }
                      onClick={ () => handleClick() }
                      text={ answer }
                      type="button"
                    />
                  </div>
                );
              })}
            </div>
            <div>{ disabled && <p className="msg__wrong">Resposta errada :(</p> }</div>
          </div>
        )}
      </main>
    </div>
  );
}

Game.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  token: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  player: state.player,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: (tokenInfo) => dispatch(requestToken(tokenInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
