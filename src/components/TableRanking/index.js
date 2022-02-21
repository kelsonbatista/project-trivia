import React from 'react';
import PropTypes from 'prop-types';
import { MINUS_ONE } from '../../commons/constants';

function TableRanking(props) {
  const { ranking } = props;
  return (
    <table className="ranking__profile">
      <thead>
        <tr className="ranking__color2">
          <th className="ranking__profile-position">#</th>
          <th className="ranking__profile-picture">Avatar</th>
          <th className="ranking__profile-name">Name</th>
          <th className="ranking__profile-score">Score</th>
        </tr>
      </thead>
      <tbody>
        { ranking.sort((a, b) => a.score > b.score && MINUS_ONE)
          .map(({ picture, name, score }, index) => (
            <tr
              key={ index }
              className={ (index % 2 === 0)
                ? 'ranking__color1'
                : 'ranking__color2' }
            >
              <td className="ranking__profile-position">
                { index + 1 }
              </td>
              <td className="ranking__profile-picture">
                <img src={ picture } alt="Player" className="ranking__profile-image" />
              </td>
              <td
                className="ranking__profile-name"
                data-testid={ `player-name-${index}` }
              >
                { name }
              </td>
              <td
                className="ranking__profile-score"
                data-testid={ `player-score-${index}` }
              >
                { score }
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

TableRanking.propTypes = {
  ranking: PropTypes.array,
}.isRequired;

export default TableRanking;
