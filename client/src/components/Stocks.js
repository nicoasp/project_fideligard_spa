import React from 'react';

import Spinner from './elements/Spinner';

const stocksRow = (symbol, prices) => {
  // const symbol = Object.keys(stock)[0];
  const price = prices.current;
  const one = Number(prices.current) - Number(prices.dayAgo);
  const seven = Number(prices.current) - Number(prices.weekAgo);
  const thirty = Number(prices.current) - Number(prices.monthAgo);

  return (
    <tr>
      <td>{symbol}</td>
      <td>{price}</td>
      <td>{one}</td>
      <td>{seven}</td>
      <td>{thirty}</td>
    </tr>
  );
};

const stocksContent = stocks => {
  let stocksRows = [];
  for (let symbol in stocks) {
    stocksRows.push(stocksRow(symbol, stocks[symbol]));
  }

  return (
    <table className="table">
      <thead className="thead-inverse">
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>1d</th>
          <th>7d</th>
          <th>30d</th>
        </tr>
      </thead>
      <tbody>
        {stocksRows}
      </tbody>
    </table>
  );
};

const Stocks = ({stocks, isFetching}) => (
  <div>
    {!Object.keys(stocks).length || isFetching ?
      <Spinner /> :
      stocksContent(stocks)}
  </div>
);

export default Stocks;
