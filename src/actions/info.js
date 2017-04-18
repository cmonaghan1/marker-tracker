import * as actionTypes from '../constants/actionTypes';

function setInfoWindow(infoWindow) {
  return {
    meta: { remote: false },
    type: actionTypes.INFO_TOGGLE,
    infoWindow
  };
};

export function toggleInfo(marker) {
  return function(dispatch) {
    const infoWindow = marker === null ? { windowPosition: null } : { windowPosition: { lat: marker.position.lat(), lng: marker.position.lng() }};
    dispatch(setInfoWindow(infoWindow));
  }
}
