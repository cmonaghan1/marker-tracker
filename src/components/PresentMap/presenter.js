import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkerMap from '../MarkerMap';
import _ from 'lodash';

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
class PresentMap extends Component {
  render() {
    return (<MarkerMap
      containerElement={
                 <div style={{    position: 'absolute',
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                     justifyContent: 'flex-end',
                     alignItems: 'center',}} />
             }
             mapElement={
                 <div style={{    position: 'absolute',
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                }} />
             }
        onMapLoad={_.noop}
        onMapClick={_.noop}
        onMarkerRightClick={_.noop}
      />
    );
  }
}

export default PresentMap;
