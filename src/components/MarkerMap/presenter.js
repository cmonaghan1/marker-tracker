import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FABButton } from 'react-mdl';
import { Icon } from 'react-mdl';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import _ from 'lodash';

const MarkerMap = withGoogleMap(props => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={16}
      defaultCenter={{ lat: props.latitude, lng: props.longitude }}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
        <Marker
          {...marker}
          onClick={() => props.onMarkerClick(marker)}
        />
      ))}
      {
        props.infoWindow.infoWindow.windowPosition ?
          <InfoWindow
              position={props.infoWindow.infoWindow.windowPosition}
              onCloseClick={() => props.onMarkerClick(null)}
              options={{pixelOffset: new google.maps.Size(0,-30)}} >
            <p>Test</p>
          </InfoWindow> : null
      }

    </GoogleMap>
  )});

export default MarkerMap;
