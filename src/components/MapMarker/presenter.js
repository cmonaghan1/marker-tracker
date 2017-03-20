import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FABButton } from 'react-mdl';
import { Icon } from 'react-mdl';

class MapMarker extends Component {

  render () {
    const { onSetMarker } = this.props;
    const { markers } = this.props;
    const marker = { lat: 123, lon: 456 };

    return (
        <div>
          <div>Dispatch a marker</div>
          <FABButton onClick={() => onSetMarker(marker)}>
            <Icon name="lock"/>
          </FABButton>
          {
            markers !== null? markers.map((marker, index) =>
              (
                <div>
                  <div>{marker.lat}</div>
                  <div>{marker.lon}</div>
                </div>
              )
            ) : null
          }
        </div>
    );
  }
}

export default MapMarker;
