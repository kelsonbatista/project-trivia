import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import { MINUS_ONE } from '../../commons/constants';

function Ranking(props) {
  const { history } = props;
  const ranking = JSON.parse(localStorage.getItem('ranking'));

  return (
    <section className="ranking">
      <h1 data-testid="ranking-title">Ranking</h1>
      <Button
        className="login__btn"
        dataTestid="btn-go-home"
        onClick={ () => history.push('/') }
        text="Home"
        type="button"
      />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          { ranking.sort((a, b) => a.score > b.score && MINUS_ONE)
            .map(({ picture, name, score }, index) => (
              <tr key={ index }>
                <td>{ index + 1 }</td>
                <td><img src={ picture } alt="Player" /></td>
                <td data-testid={ `player-name-${index}` }>{ name }</td>
                <td data-testid={ `player-score-${index}` }>{ score }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

Ranking.propTypes = {
  history: PropTypes.instanceOf(Object),
}.isRequired;

export default Ranking;
