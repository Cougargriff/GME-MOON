const stocks = require('./stocks');

module.exports = {
	setup: (app) => {
		const routes = [
			{
				method: 'get',
				path: '/',
				actions: [stocks.get]
			}
		];
		
		routes.forEach( (route) => {
			app[route.method].apply(app, [route.path].concat(route.actions));
		});
	}
};
