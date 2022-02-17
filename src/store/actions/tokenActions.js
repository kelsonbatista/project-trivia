export const REQUEST_TOKEN = 'REQUEST_TOKEN';

const requestToken = (payload) => ({
  type: REQUEST_TOKEN,
  payload,
});

export default requestToken;
