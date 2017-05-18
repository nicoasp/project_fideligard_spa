import React from 'react';
import RCSlider, {Range} from 'rc-slider';
import moment from 'moment';
import 'rc-slider/assets/index.css';

const dailyMilliseconds = 1000 * 60 * 60 * 24;
const maxDate = Date.now() - dailyMilliseconds;
const minDate = maxDate - 31 * dailyMilliseconds;



const momentize = dateInMs => {
  return moment(new Date(dateInMs)).format('MMM Do YYYY')
};

const Slider = ({selectedDate, selectDate}) => {

  return (
    <div>
      <RCSlider
        min={minDate}
        max={maxDate}
        step={dailyMilliseconds}
        marks={{[selectedDate]: momentize(selectedDate)}}
        onChange={selectDate}
      />
    </div>
  );
};

export default Slider;
