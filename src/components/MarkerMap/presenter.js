import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FABButton } from 'react-mdl';
import { Icon } from 'react-mdl';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const MarkerMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
  </GoogleMap>
));
// Then, render it:
// render(
//   <GettingStartedGoogleMap
//     containerElement={
//       <div style={{ height: `100%` }} />
//     }
//     mapElement={
//       <div style={{ height: `100%` }} />
//     }
//     onMapLoad={_.noop}
//     onMapClick={_.noop}
//     markers={markers}
//     onMarkerRightClick={_.noop}
//   />,
//   document.getElementById('root')
// );

export default MarkerMap;