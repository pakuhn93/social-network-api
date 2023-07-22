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