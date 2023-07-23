// blueprints for our Thought model
const {Schema, model } = require('mongoose');

// formats the date with the parameter Date object and returns a string mm/dd/yyyy
const formatDate = (Timestamp) => {
    return `${Timestamp.getMonth()}/${Timestamp.getDate()}/${Timestamp.getFullYear()} at ${Timestamp.getHours()}:${Timestamp.getMinutes()}`;
}

// blueprints for our Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            minLength: 1,
            maxLength: 280,
            required: true
        },
        createdAt: {
            type: Date, // type Date object
            default: Date.now, // sets the default value to date when created
            get: formatDate // formats date into something more readable when a Thought is gotten
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reaction'
            }
        ]
    }
);

// initializing our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;