import { REQUEST_TOKEN } from '../actions/tokenActions';

const INITIAL_STATE = '';

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TOKEN:
    return action.payload;
  default:
    return state;
  }
};

export default tokenReducer;
