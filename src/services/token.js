import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import requestToken from '../store/actions/tokenActions';

export const fetchToken = (props) => {
  const tokenRequestUrl = 'https://opentdb.com/api_token.php?command=request';
  const { dispatchToken } = props;
  console.log('entrou fetchToken');
  return fetch(tokenRequestUrl)
    .then((result) => result.json())
    .then((data) => dispatchToken(data))
    .catch((error) => `Error found: ${error}`);
};

// export const fetchToken = async () => {
//   const tokenRequestUrl = 'https://opentdb.com/api_token.php?command=request';
//   const response = await fetch(tokenRequestUrl);
//   const data = await response.json();
//   return data;
// };

fetchToken.propTypes = {
  dispatchToken: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchToken: (tokenInfo) => dispatch(requestToken(tokenInfo)),
});

export default connect(null, mapDispatchToProps)(fetchToken);
