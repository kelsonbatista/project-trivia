import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import './style.css';

function TableApp(props) {
  const { name, score, gravatarEmail } = props;
  return (
    <Table striped bordered hover variant="dark" size="sm">
      <tbody>
        <tr>
          <td>
            <img
              alt="Profile"
              data-testid="header-profile-picture"
              src={ gravatarEmail }
            />
            <span data-testid="input-gravatar-email">&nbsp;</span>
          </td>
          <td><span data-testid="header-player-name">{ name }</span></td>
          <td><span data-testid="header-score">{ score }</span></td>
        </tr>
      </tbody>
    </Table>
  );
}

TableApp.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  gravatarEmail: PropTypes.string,
}.isRequired;

export default TableApp;
