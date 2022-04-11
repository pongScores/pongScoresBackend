// Dependencies

const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/home');
});

// Routes

// Controllers
// app.use('users', userController);

app.set('port', process.env.PORT || 3000);

app.listen(3000, () => {
	console.log('app now listening on port 3000 🏓');
});
