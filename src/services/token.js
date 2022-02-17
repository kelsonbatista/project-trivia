import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import requestToken from '../store/actions';

// export const fetchToken = (props) => {
//   const { dispatchToken } = props;
//   const tokenRequestUrl = 'https://opentdb.com/api_token.php?command=request';
//   fetch(tokenRequestUrl)
//     .then((result) => result.json())
//     .then((data) => dispatchToken(JSON.stringify(data)))
//     .catch((error) => `Error found: ${error}`);
// };

export const fetchToken = async (props) => {
  const { dispatchToken } = props;
  const tokenRequestUrl = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(tokenRequestUrl);
  const data = await response.json();
  dispatchToken(data);
};

fetchToken.propTypes = {
  dispatchToken: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: (tokenInfo) => dispatch(requestToken(tokenInfo)),
});

export default connect(null, mapDispatchToProps)(fetchToken);
