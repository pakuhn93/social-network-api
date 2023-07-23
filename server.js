// main server module
const express = require('express'); 

// main database module
const db = require('./config/connection'); 

// routes for our server
const routes = require('./routes'); 

// which port to run the server on
const PORT = process.env.PORT || 3001; 
// initializes the express app
const app = express();

// express boiler plate
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// starting up the actual server
// outer part is for our database (mongodb); inner is for express
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}!`);
    })
});