const { Schema, model} = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        },
        reaction: [reactionSchema],
    }
);

thoughtsSchema.virtual('reactionCount').get(function() {
    return reactionSchema.length;
});

const Thoughts = model('thoughts', thoughtsSchema);
module.exports = Thoughts;