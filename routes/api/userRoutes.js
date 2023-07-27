// CRUD for our Route models
// functions for CRUD are in controllers

const router = require('express').Router();
// importing promise functions 
const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// CRUD goes here, use the router.route('endpoint').get().put() ... format

// endpoint: /api/users/
router.route('/').get(getUsers).post(createUser);

// endpoint: /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// endpoint: /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend);


module.exports = router;