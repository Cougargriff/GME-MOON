module.exports = {
	log: (text) => {
		var date = new Date();
		console.log(`[SERVER @ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] --> ${text}`);
	}
}
