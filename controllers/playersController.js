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

// Get one player
router.get('/:id', async (req, res, next) => {
	try {
		const player = await Players.findById(req.params.id);
		res.json(player);
	} catch (error) {
		next(error);
	}
});

// CREATE a player
router.post('/', async (req, res, next) => {
	try {
		await Player.create(req.body);
		const allPlayers = await Players.find({});
		res.status(201).json(allPlayers);
	} catch (error) {
		next(error);
	}
});

// Update a player
router.put('/:id', async (req, res, next) => {
	try {
		await Players.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			overwrite: true,
		});
		const allPlayers = await Players.find({});
		res.json(allPlayers);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
