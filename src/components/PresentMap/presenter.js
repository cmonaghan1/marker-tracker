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
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapLoad={_.noop}
        onMapClick={_.noop}
        onMarkerRightClick={_.noop}
      />
    );
  }
}

export default PresentMap;
