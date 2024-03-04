const {Schema, model, Types} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            required: true,
            type: String,
            trim: true,
            unique: true,
        },

        email: {
            required: true,
            type: String,
            unique: true,
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

userSchema.virtual('friendList').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;