import React, {Component} from 'react';
import {connect} from 'react-redux';

import Slider from '../components/Slider';
import {selectDate} from '../actions';

const mapStateToProps = state => {
  return {
    selectedDate: Number(state.selectedDate)
  };
};

export default connect(
  mapStateToProps,
  {selectDate}
)(Slider);
