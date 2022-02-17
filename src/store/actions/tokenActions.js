export const ADD_TOKEN = 'ADD_TOKEN';

const addToken = (payload) => ({
  type: ADD_TOKEN,
  payload,
});

export default addToken;
