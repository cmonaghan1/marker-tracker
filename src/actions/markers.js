import * as actionTypes from '../constants/actionTypes';

function setMarker(marker) {
  return {
    meta: { remote: true },
    type: actionTypes.MARKER_SET,
    marker
  };
};

export function addMarker(marker) {
  return function(dispatch) {
    dispatch(setMarker({ lat: 123, lon: 456 }));
  }
}

export function setState(state) {
  return {
    type: actionTypes.STATE_SET,
    state
  };
};
