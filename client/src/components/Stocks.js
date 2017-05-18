import React from "react";

import Spinner from "./elements/Spinner";

const stocksRow = (symbol, prices) => {
  const current = prices.current;
  const dayAgo = (prices.current - prices.dayAgo).toFixed(2);
  const weekAgo = (prices.current - prices.weekAgo).toFixed(2);
  const monthAgo = (prices.current - prices.monthAgo).toFixed(2);

  return (
    <tr>
      <td>{symbol}</td>
      <td>{current}</td>
      <td>{dayAgo}</td>
      <td>{weekAgo}</td>
      <td>{monthAgo}</td>
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

const Stocks = ({ stocks, isFetching }) => {
  return (
    <div>
      {!Object.keys(stocks).length || isFetching
        ? <Spinner />
        : stocksContent(stocks)}
    </div>
  );
};

export default Stocks;
