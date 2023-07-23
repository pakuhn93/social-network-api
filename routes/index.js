// central hub for exporting ALL routes (endpoints)
const router = require('express').Router();
const apiRoutes = require('./api');

// navigates user to /api endpoint
router.use('/api', apiRoutes);

// if the correct route is not listed above this, sends the user a message that the route does not exist
router.use((req, res) => {
    return res.send('Route does not exist.');
});

module.exports = router;