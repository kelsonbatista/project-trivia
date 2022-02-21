import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import './style.css';
import TableRanking from '../../components/TableRanking';

function Ranking(props) {
  const { history } = props;
  const ranking = JSON.parse(localStorage.getItem('ranking'));

  return (
    <div className="ranking">
      <section className="ranking__left">
        <div className="ranking__header">
          <h1 data-testid="ranking-title">Ranking</h1>
          <Button
            className="login__btn"
            dataTestid="btn-go-home"
            onClick={ () => history.push('/') }
            text="Home"
            type="button"
          />
        </div>
        <TableRanking
          ranking={ ranking }
        />
      </section>
      <section className="ranking__right">
        &nbsp;
      </section>
    </div>
  );
}

Ranking.propTypes = {
  history: PropTypes.instanceOf(Object),
}.isRequired;

export default Ranking;
