const stocksModel = require('../models/stocks'),
	logger = require('../utils/logger');

let stocks = {};

stocks.get = (req, res) => {
	stocksModel.get('GME', (data) => {
		if (data.error !== undefined) {
			logger.log('Error getting stock...')
		}
		logger.log(data);
		res.render('index', {
			title: "TEST GME TO THE MOOOON  :)",
			stockData: data,
		});
	});

};

module.exports = stocks;
