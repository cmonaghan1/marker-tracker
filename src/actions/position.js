import * as actionTypes from '../constants/actionTypes';

function setPosition(position) {
  return {
    type: actionTypes.POSITION_SET,
    position
  };
};

export function onPosition(position) {
  return function(dispatch) {
    dispatch(setPosition(position));
  }
}
