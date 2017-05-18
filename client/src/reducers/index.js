import {combineReducers} from 'redux';

import {stocks} from './stocks';
import {selectedDate} from './selectedDate';
// import {transactions} from './transactions';

export default combineReducers({
  stocks,
  selectedDate
});
