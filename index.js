// Dependencies

const express = require('express');
const app = express();
const cors = require('cors');
const Players = require('./models/Players');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/players');
});

// Routes

// Controllers
const playersController = require('./controllers/playersController');
app.use('/players', playersController);

// Server Start
app.set('port', process.env.PORT || 3000);

app.listen(3000, () => {
	console.log('app now listening on port 3000 🏓');
});
