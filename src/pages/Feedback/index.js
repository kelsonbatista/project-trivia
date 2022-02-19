import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableApp from '../../components/Table';
import { THREE } from '../../commons/constants';

function Feedback(props) {
  const { player: { name, assertions, score, gravatarEmail } } = props;

  function checkAssertions() {
    if (assertions < THREE) return 'Could be better...';
    return 'Well Done!';
  }

  return (
    <section className="feedback">
      <h1>Feedback</h1>
      <TableApp
        name={ name }
        score={ score }
        gravatarEmail={ gravatarEmail }
      />
      <h3 data-testid="feedback-text">{ checkAssertions() }</h3>
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
