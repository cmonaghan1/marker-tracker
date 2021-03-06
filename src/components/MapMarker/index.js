import React from 'react';
import { connect } from 'react-redux';
import MapMarker from './presenter';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

function mapStateToProps(state) {
  return { markers: state.markers }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetMarker: bindActionCreators(actions.addMarker, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapMarker);
