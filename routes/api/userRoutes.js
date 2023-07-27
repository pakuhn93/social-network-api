// CRUD for our Route models
// functions for CRUD are in controllers

const router = require('express').Router();
// importing promise functions 
const {
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// CRUD goes here, use the router.route('endpoint').get().put() ... format
router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend);


module.exports = router;