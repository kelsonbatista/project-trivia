import React, { useState, useEffect } from 'react';
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
  const { dispatchToken, player: { name, score, gravatarEmail }, token } = props;
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({
    correct: '',
    incorrect: [],
    all: [],
  });
  const NOT_FOUND = 3;
  const response = 3;
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const FIFTYCENT = 0.5;

  async function handleTrivia() {
    setLoading(true);
    let fetchTrivia = await fetchTriviaApi(token);
    console.log(fetchTrivia.response_code, 'response code');
    if (response === NOT_FOUND) {
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

  function handleClick() {
    console.log('click');
  }

  useEffect(() => {
    handleTrivia();
  }, []);

  useEffect(() => {
    handleAnswers();
  }, [questions]);

  console.log(questions, answers);

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
