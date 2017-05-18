require('dotenv').config()
require("es6-promise").polyfill;
require("isomorphic-fetch");

const express = require('express');
const app = express();

const QUANDL_API_KEY = process.env.QUANDL_API_KEY
const baseUrl = 'https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json';

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

function checkStatus(response) {
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}


const {
  dateBuilder,
  datesStringBuilder
} = require('./lib/dateBuilder');

app.get('/api/stocks', (req, res, next) => {
  const date = req.query.date || Date.now();
  const dates = dateBuilder(date);
  const datesString = datesStringBuilder(dates);

  fetch(`${baseUrl}?date=${datesString}` +
        `&qopts.columns=ticker,date,close` +
        `&api_key=${QUANDL_API_KEY}`)
    .then(checkStatus)
    .then(response => response.json())
    .then(js => {
      let stocks = {};
      js.datatable.data.forEach(stock => {
        stocks[stock[0]] = stocks[stock[0]] || [];
        stocks[stock[0]].push(stock[2]);
      });
      console.log(JSON.stringify(stocks, null, 2));
      res.json(stocks);
    })
    .catch(next);
});

app.use((err, req, res, next) => {
  console.error(`Error: ${err.stack}`);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}/`);
});



// `https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?
// date=20160912,20160911&qopts.columns=ticker,date,close&
// api_key=${QUANDL_API_KEY}`
