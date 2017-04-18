import * as actionTypes from '../constants/actionTypes';

const initialState = { infoWindow: { windowPosition: null } };

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INFO_TOGGLE:
      return setInfoWindow(state, action);
  }
  return state;
}

function setInfoWindow(state, action) {
  const { infoWindow } = action;
  return { ...state, infoWindow };
}
