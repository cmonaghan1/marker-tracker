import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FABButton } from 'react-mdl';
import { Icon } from 'react-mdl';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from 'lodash';

const MarkerMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={16}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
    onClick={props.onMapClick}
  >
  </GoogleMap>
));

export default MarkerMap;
