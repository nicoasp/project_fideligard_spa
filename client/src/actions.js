export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const SELECT_DATE = 'SELECT_DATE';
export const SET_STOCKS_FILTER = 'SET_STOCKS_FILTER';

export function requestStart() {
  return {
    type: REQUEST_START
  };
}

export function requestSuccess(data) {
  return {
    type: REQUEST_SUCCESS,
    data
  };
}

export function requestFailure(error) {
  return {
    type: REQUEST_FAILURE,
    error
  };
}

export function getStocks(date) {
  return (dispatch) => {
    dispatch(requestStart());

    fetch(`api/stocks?date=${date}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(results => {
        dispatch(requestSuccess(results));
      })
      .catch(error => {
        console.log(error);
        dispatch(requestFailure(error));
      });
  }
}

export function selectDate(data) {
  return {
    type: SELECT_DATE,
    data
  }
}

export function setStocksFilter(data) {
  return {
    type: SET_STOCKS_FILTER,
    data
  }
}
