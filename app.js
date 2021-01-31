const express = require('express'),
	routes = require('./routes/routes'),
	logger = require('./utils/logger');

require('dotenv').config();
const app = express();
const port = 3000;

routes.setup(app);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './public/templates');

app.listen(port, () => {
	logger.log('Listening on port ' + port);
});

