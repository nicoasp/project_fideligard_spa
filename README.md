# project_fideligard_spa
Buy low, sell high.


Portfolio is calculated from transactions

State: {
	transactions: [],
	stocks: {
		code1: {
			name,
			historical_data: {
				date1: { eod_price },
				date2: {}
			}
		} 
	}
}



API call:

`https://www.quandl.com/api/v3/datasets/WIKI/${STOCK_CODE}.json?api_key=${API_KEY}&start_date=2017-05-01&end_date=2017-05-18`