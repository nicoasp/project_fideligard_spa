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

const dateBuilder = (date) => {
  const dayOfWeek = Date.new(date).getDay();
  return {
    current:
  }
}

app.get('/api/stocks', (req, res, next) => {
  const date = req.query.date;
  const dates = dateBuilder(date);

  fetch(`${baseUrl}?date=${dates}&qopts.columns=ticker,date,close` +
        `&api_key=${QUANDL_API_KEY}`)
});


`https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?
date=20160912,20160911&qopts.columns=ticker,date,close&
api_key=${QUANDL_API_KEY}`
