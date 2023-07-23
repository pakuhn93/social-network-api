// central hub for exporting all 'api' routes (endpoints)
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// creates the /users endpoint for our /api
router.use('/users', userRoutes);

// creates the /thoughts endpoint for our /api
router.use('/thoughts', thoughtRoutes);

module.exports = router;