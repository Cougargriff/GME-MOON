require('dotenv').config();
const alpha = require('alphavantage')({key: process.env.STOCK_API_KEY});
let stocks = {};

stocks.get = (symbol, cb) => {
	alpha.data.intraday(symbol).then( (data) => {
		if (data) {
			cb(alpha.util.polish(data));
		} else {
			cb({error: true});
		}
	});
};

module.exports = stocks;

