import React, {Component} from 'react';
import {connect} from 'react-redux';

import Stocks from '../components/Stocks';
import {getStocks, setStocksFilter} from '../actions';

class StocksContainer extends Component {

  componentDidMount() {
    console.log("in componentDidMount");
    this.props.getStocks(this.props.selectedDate);
  }

  componentWillReceiveProps(newProps) {
    console.log("in componentWillReceiveProps");
    if (this.props.selectedDate !== newProps.selectedDate) {
      console.log("inside if, new date: ", new Date(newProps.selectedDate));
      this.props.getStocks(this.props.selectedDate);
    }
  }

  render() {
    return (
      <Stocks {...this.props} />
    );
  }
}

const filterStocks = (stocks, filter) => {
  let filteredStocks = {};
  let regex = new RegExp(filter, 'i');
  for (let symbol in stocks) {
    if (regex.exec(symbol)) {
      filteredStocks[symbol] = stocks[symbol];
    }
  }
  return filteredStocks;
}

const mapStateToProps = state => {
  console.log(state);
  return {
    stocks: filterStocks(state.stocks.data, state.stocksFilter),
    isFetching: state.stocks.isFetching,
    selectedDate: Number(state.selectedDate)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getStocks: (date) => {
      dispatch(getStocks(date));
    },
    setStocksFilter: (event) => {
      const filter = event.target.value;
      console.log(filter);
      dispatch(setStocksFilter(filter));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksContainer);
