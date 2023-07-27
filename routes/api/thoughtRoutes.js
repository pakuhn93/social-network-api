// CRUD for our Thought models
// functions for CRUD are in controllers

const router = require('express').Router();
// import functions from controllers here
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// CRUD goes here

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


module.exports = router;