# project_fideligard_spa
Buy low, sell high.

Portfolio is calculated from transactions

State: {
	transactions: [],
	stocks: {
		data: {
			code: [current, dayAgo, weekAgo, monthAgo]
		},
		isFetching: true,
		error: null
	}
}

API call:

`https://www.quandl.com/api/v3/datasets/WIKI/${STOCK_CODE}.json?api_key=${QUANDL_API_KEY}&start_date=2017-05-01&end_date=2017-05-18`
