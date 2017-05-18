import React from 'react';

import Spinner from './elements/Spinner';

const stocksRow = stock => {
  console.log(stock);
  const symbol = Object.keys(stock)[0];
  const price = stock[symbol][0];
  const one = stock[symbol][1];
  const seven = stock[symbol][2];
  const thirty = stock[symbol][3];

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
    const stock = {
      [symbol]: stocks[symbol]
    };
    stocksRows.push(stocksRow(stock));
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
