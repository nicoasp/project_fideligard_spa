import {combineReducers} from 'redux';

import {stocks} from './stocks';
import {selectedDate} from './selectedDate';
import {stocksFilter} from './stocksFilter';
// import {transactions} from './transactions';

export default combineReducers({
  stocks,
  selectedDate,
  stocksFilter
});
