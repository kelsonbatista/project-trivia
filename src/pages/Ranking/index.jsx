import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

function Ranking(props) {
  const { history } = props;
  return (
    <section className="ranking">
      <h1 data-testid="ranking-title">Ranking</h1>
      <Button
        className="login__btn"
        dataTestid="btn-go-home"
        onClick={ () => history.push('/') }
        text="Logout"
        type="button"
      />
    </section>
  );
}

Ranking.propTypes = {
  history: PropTypes.instanceOf(Object),
}.isRequired;

export default Ranking;
