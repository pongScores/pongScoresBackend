const express = require('express');
const router = express.Router();
const Players = require('../models/Players');

// GET all players

router.get('/', async (req, res) => {
	try {
		await Players.find().then((players) => {
			res.json(players);
		});
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
