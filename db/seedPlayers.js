const Players = require('../models/Players');
const playersData = require('./players.json');

Players.deleteMany({})
	.then(() => Players.insertMany(playersData))
	.then(console.log(playersData))
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
