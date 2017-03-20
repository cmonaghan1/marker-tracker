import { combineReducers } from 'redux';
import markers from './markers';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  markers,
  routing: routerReducer
});
