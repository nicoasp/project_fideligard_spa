import React, {Component} from 'react';
import {connect} from 'react-redux';

import Stocks from '../Stocks';
import {getStocks} from '../../actions';

class StocksContainer extends Component {

  componentDidMount() {
    this.props.getStocks(Date.now());
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
    stocks: state.data,
    isFetching: state.isFetching
  }
};

export default connect(
  mapStateToProps,
  {getStocks}
)(StocksContainer);
