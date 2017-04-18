import { combineReducers } from 'redux';
import markers from './markers';
import position from './position';
import info from './info';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  markers,
  position,
  info,
  routing: routerReducer
});
