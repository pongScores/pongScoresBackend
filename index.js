// Dependencies

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
// const Players = require('./models/Players');
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/players');
});

// Routes

// Controllers
const playersController = require('./controllers/playersController');
app.use('/players', playersController);

// Server Start
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
	console.log(`app now listening on: ${app.get('port')} 🏓'`);
});
