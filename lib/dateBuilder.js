const moment = require("moment");

const dayMillSec = 24 * 60 * 60 * 1000;

const adjustDay = (date) => {
  if (new Date(date).getDay() === 6) {
    return date - dayMillSec;
  }
  if (new Date(date).getDay() === 7) {
    return date - 2 * dayMillSec;
  }
  return date;
}

const dateBuilder = (date) => {  
  let current = adjustDay(date);
  let dayAgo = adjustDay(date - dayMillSec);
  let weekAgo = adjustDay(date - 7 * dayMillSec);
  let monthAgo = adjustDay(date - 30 * dayMillSec);

  return {
    current: moment(current).format("YYYYMMDD"),
    dayAgo: moment(dayAgo).format("YYYYMMDD"),
    weekAgo: moment(weekAgo).format("YYYYMMDD"),
    monthAgo: moment(monthAgo).format("YYYYMMDD")
  }
}

const datesStringBuilder = (datesObject) => {
	const datesArr = [datesObject.current, datesObject.dayAgo, datesObject.weekAgo, datesObject.monthAgo];
	return datesArr.join(",");
}

module.exports = {
	dateBuilder,
	datesStringBuilder
}
