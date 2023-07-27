// all of the route functions for Thought will go here

// import the models that will be used here
const { User, Thought } = require('../models');

const thoughtController = {

    // get all thoughts independent of User
    async getThoughts(req, res){
        try {
            const thoughtData = await Thought.find();
            res.status(200).json(thoughtData);
        } catch (err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    async getSingleThought(req, res){
        try {
            const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });
            res.status(200).json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // create a thought, ***needs to have userId in the request body to assign it to a user***
    async createThought(req, res){
        try {
            const thoughtData = await Thought.create(req.body);
            const userData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                // we use $push for arrays, instead of $set
                { $push: { thoughts: thoughtData._id } }
                );
            res.status(200).json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // update a thought based on the passed thoughtId endpoint
    async updateThought(req, res){
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { 
                    _id: req.params.thoughtId
                },
                {
                    $set: req.body
                }); // ===== might need more code here =====
        } catch (err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    // deletes a thought based on its id
    async deleteThought(req, res){
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            const userData = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } }
            ); // ===== might need to add some code here =====
            res.status(200).json({ message: 'Thought successfully deleted and removed from the associated user.' });
        } catch (err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports = thoughtController;