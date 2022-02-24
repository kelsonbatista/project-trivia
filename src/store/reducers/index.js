import { combineReducers } from 'redux';
import game from './gameReducer';
import player from './playerReducer';
import token from './tokenReducer';

const rootReducer = combineReducers({
  game,
  player,
  token,
});

export default rootReducer;
