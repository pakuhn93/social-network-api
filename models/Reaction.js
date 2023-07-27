// blueprints for our Reaction model
// need to import Types instead of model because we want to manually create an ObjectId
const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/formatDate');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            // might need to edit this line of code to be () => new...
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => formatDate(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

// not a model, need to export the schema so it can be used by Thought as a subdocument
module.exports = reactionSchema;