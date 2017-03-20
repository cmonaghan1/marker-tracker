import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.MARKER_SET:
      return setMarker(state, action);
    case actionTypes.STATE_SET:
      return setState(state, action)
  }
  return state;
}

function setMarker(state, action) {
  const { marker } = action;
  return [ ...state, marker ];
}

function setState(state, action) {
  return JSON.parse(action.state);
}
