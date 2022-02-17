import { ADD_TOKEN } from '../actions/tokenActions';

const INITIAL_STATE = {
  tokenInfo: {},
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TOKEN:
    return {
      ...state,
      tokenInfo: action.payload,
    };
  default:
    return state;
  }
};

export default tokenReducer;
