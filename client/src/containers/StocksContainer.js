import React, {Component} from 'react';
import {connect} from 'react-redux';

import Stocks from '../components/Stocks';
import {getStocks} from '../actions';

class StocksContainer extends Component {

  componentDidMount() {
    console.log("in componentDidMount")
    this.props.getStocks(this.props.selectedDate);
  }

  componentWillReceiveProps(newProps) {
    console.log("in componentWillReceiveProps")
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

const mapStateToProps = state => {
  console.log(state);
  return {
    stocks: state.stocks.data,
    isFetching: state.stocks.isFetching,
    selectedDate: Number(state.selectedDate),
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
