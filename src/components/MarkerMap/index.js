import React from 'react';
import { connect } from 'react-redux';
import MarkerMap from './presenter';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

function mapStateToProps(state) {
  return {
    markers: state.markers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerMap);
