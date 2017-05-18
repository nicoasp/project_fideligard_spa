
require('dotenv').config()
const QUANDL_API_KEY = process.env.QUANDL_API_KEY



`https://www.quandl.com/api/v3/datasets/WIKI/${STOCK_CODE}
.json?
api_key=${QUANDL_API_KEY}
&start_date=2017-05-01&end_date=2017-05-18`

`https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?
date=20160912&qopts.columns=ticker,date,close&
api_key=${QUANDL_API_KEY}`


Displaying stocks for 1 day 
requires same stocks for 1day, 7days, 30days before