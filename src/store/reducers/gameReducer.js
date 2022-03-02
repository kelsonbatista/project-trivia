import { SET_GAME } from '../actions/gameActions';

const INITIAL_STATE = {
  timer: 0,
  finalAnswer: '',
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_GAME:
    return action.payload;
  default:
    return state;
  }
};

export default gameReducer;
