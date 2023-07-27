// blueprints for our User model
// start by importing Schema and model from our mongoose module
const { Schema, model } = require('mongoose');

// create a new Schema (blueprint) for our User objects
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, // makes index unique
            trim: true // cuts out white space
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            // strings have a match validator that takes in a Regular Expression (regex)
            match: /.+.@+.+\..+/ // using RegEx to match the format of an email
        },
        // an array of Thought objects, populated by referencing a Thought object with its ObjectId
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    { // need this to enable virtuals
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// virtual property for how many friends a user has
// this property is not stored, only referenced
// the property title will be friendCount
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

// initialize User model
const User = model('user', userSchema);

// export the model, not the Schema
module.exports = User;