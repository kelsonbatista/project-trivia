import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addToken from '../store/actions';

const requestToken = (props) => {
  const { dispatchToken } = props;
  const tokenRequestUrl = 'https://opentdb.com/api_token.php?command=request';
  fetch(tokenRequestUrl)
    .then((result) => result.json())
    .then((data) => dispatchToken(data))
    .catch((error) => `Error found: ${error}`);
};

requestToken.propTypes = {
  dispatchToken: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: (tokenInfo) => dispatch(addToken(tokenInfo)),
});

export default connect(null, mapDispatchToProps)(requestToken);
