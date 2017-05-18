
require('dotenv').config()
const QUANDL_API_KEY = process.env.QUANDL_API_KEY



`https://www.quandl.com/api/v3/datasets/WIKI/${STOCK_CODE}
.json?
api_key=${QUANDL_API_KEY}
&start_date=2017-05-01&end_date=2017-05-18`