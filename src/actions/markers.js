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
    dispatch(setMarker({
        position: marker.latLng,
        defaultAnimation: 3,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      }));
  }
}

export function setState(state) {
  return {
    type: actionTypes.STATE_SET,
    state
  };
};
