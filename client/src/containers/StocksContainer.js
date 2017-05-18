import React, {Component} from 'react';
import {connect} from 'react-redux';

import Stocks from '../components/Stocks';
import {getStocks} from '../actions';

class StocksContainer extends Component {

  componentDidMount() {
    this.props.getStocks(Date.now() - 24 * 60 * 60 * 1000);
  }

  render() {
    return (
      <Stocks {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    stocks: state.stocks.data,
    isFetching: state.stocks.isFetching
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getStocks: (date) => {
//       dispatch(getStocks(date));
//     }
//   }
// };

export default connect(
  mapStateToProps,
  {getStocks}
)(StocksContainer);
