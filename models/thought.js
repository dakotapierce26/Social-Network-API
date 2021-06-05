const {Schema, model, models} = require('mongoose');


const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    username: [{
        type: String,
        required: true,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
{
    toJSON: {
        getters: true
    }
});

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: [{
        type: String,
        required: true,
        ref: 'User'
    }],
    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true, 
        getters: true
    },
    id: false
});

const Thought = model('thought', ThoughtSchema);

module.exports = Thought;