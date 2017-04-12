import React from 'react';
import { connect } from 'react-redux';
import PresentMap from './presenter';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

function mapStateToProps(state) {
  return {
    position: state.position.position,
    markers: state.markers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetPosition: bindActionCreators(actions.onPosition, dispatch),
    onSetMarker: bindActionCreators(actions.addMarker, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentMap);
