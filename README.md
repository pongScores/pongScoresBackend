# pongScores-Backend

This is the Backend to the pongScores App. See the Frontend readme for more information:
https://github.com/pongScores/pongScoresFrontEnd

## Description

pongScores is a website designed for Table Tennis Players and Tournament, and League Organizers. The website keeps track of players' match results. Players, coaches, and tournament organizers will be able to keep track of players' match records with an easy to access database. Rating tracker and automatic rating calculator coming in the future. Stay tuned!

This backend fetches data here:

> https://fierce-shelf-71912.herokuapp.com/players

and communicates with the frontend stored data at:

> https://pongscores.netlify.app/

## Sample Backend Data:

```
{
"_id": "625ce82c35bad4c2d7dfbd2b",
"name": "Krenko",
"rating": 1400,
"wins": 2,
"losses": 2,
"__v": 0
},
{
"_id": "625ceb62768919d3150bdf42",
"name": "Cloudy",
"wins": 2,
"losses": 1,
"__v": 0
}
```

## Features

- Backend has the CRUD functionality with GET, POST, PUT, and DELETE routes. The Frontend has functionality to access these CRUD functions.
- The data is stored in a live server with continuous deployment.

## Technologies Used

- Mongoose
- Express
- Node.js
- Cors
- Whimsical.com for Wireframes

## Request and Response Diagram

Coming Soon!
