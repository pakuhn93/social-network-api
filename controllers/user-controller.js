// all of the route functions for User will go here

// import models that we will be using
const User = require('../models');

const userControllers = () => {

    // gets all users
    const getUsers = async(req, res) => {
        try {
            const userData = await User.find();
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // gets a single user based on the parameter passed via the endpoint
    const getSingleUser = async(req, res) => {
        try {
            const userData = await User.findOne({ _id: req.params.userId });
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // finds a user based on the parameter passed via the endpoint and updates them based on the body passed through the request
    const updateUser = async(req, res) => {
        try {
            const userData = await User.findOneAndUpdate(
                { 
                    _id: req.params.userId 
                },
                { // using an aggregate, native to mongoose, to update the contents of the user that was found via its _id
                    $set: req.body
                }); // ===== might need to add more code here =====
                res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // deletes a single user based on the parameter passed via the endpoint and deletes them
    const deleteUser = async(req, res) => {
        try {
            const userData = await findOneAndDelete({ _id: req.params.userId });
            res.status(200).json({ message: 'User Deleted!'});
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // updates a user's friends property to contain the userId of the added friend
    const addFriend = async(req, res) => {
        try {
            const userData = await findOneAndUpdate(
                { 
                    _id: req.params.userId 
                },
                {
                    // appends the friendId to the user's friends array
                    $addToSet: req.params.friendId
                }); // ===== might need to add more code here =====
            
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = userControllers;