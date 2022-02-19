import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableApp from '../../components/Table';

function Feedback(props) {
  const { player: { name, score, gravatarEmail } } = props;
  return (
    <section className="feedback">
      <h1>Feedback</h1>
      <TableApp
        name={ name }
        score={ score }
        gravatarEmail={ gravatarEmail }
      />
      <h3 data-testid="feedback-text">Message</h3>
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
