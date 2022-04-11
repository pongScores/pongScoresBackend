const mongoose = require('../db/connection');

const PlayersSchema = new mongoose.Schema({
	name: String,
	rating: Number,
});

const Players = mongoose.model('Players', PlayersSchema);

module.exports = Players;
