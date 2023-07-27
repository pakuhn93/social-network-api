// all of the route functions for Thought will go here

// import the models that will be used here
const { User, Thought } = require('../models');
const { create, findOneAndUpdate, findOneAndDelete } = require('../models/User');

const thoughtController = {

    // get all thoughts independent of 
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

    async createThought(req, res){
        try {
            console.log('RUNNING...');
            const thoughtData = await Thought.create(req.body);
            // const userData = await findOneAndUpdate()
            res.status(200).json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async updateThought(){
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

    async deleteThought(){
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            res.status(200).json({ message: 'Thought successfully deleted' });
        } catch (err){
            console.log(err);
            res.status(500).json(err);
        }
    }

}


module.exports = thoughtController;