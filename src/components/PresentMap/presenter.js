import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkerMap from '../MarkerMap';
import _ from 'lodash';

class PresentMap extends Component {

  componentDidMount() {
    const { onSetPosition } = this.props;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        onSetPosition(position.coords);
      }
    )
  }

  render() {
    const { position } = this.props;
    const { onSetMarker } = this.props;
    const { markers } = this.props;
    const { infoWindow } = this.props;
    const { toggleInfo } = this.props;

    return (<div>
      {position ? <MarkerMap
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
        onMapClick={onSetMarker}
        onMarkerClick={toggleInfo}
        markers={markers}
        latitude={position.latitude}
        longitude={position.longitude}
        infoWindow={infoWindow}
      /> : null}
      </div>
    );
  }
}

export default PresentMap;
