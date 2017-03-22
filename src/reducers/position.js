import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.POSITION_SET:
      return setPosition(state, action);
  }
  return state;
}

function setPosition(state, action) {
  const { position } = action;
  return { ...state, position };
}
