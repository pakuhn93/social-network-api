// blueprints for our Thought model
const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate');
// need to import reactionSchema because it will be a subdocument to Thought
const reactionSchema = require('./Reaction');

// blueprints for our Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date, // type Date object
            default: Date.now, // sets the default value to date when created
            get: (timestamp) => formatDate(timestamp) // formats date into something more readable when a Thought is retrieved
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema] // reactionSchema is a subdocument that is held by thoughtSchema
    },
    {   // toJSON sets special parameters to be performed when outputting into JSON format
        toJSON: {
            getters: true // when outputting to JSON format, uses the getters as the output
        },
        id: false
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length
    });

// initializing our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;