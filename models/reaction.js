const { Schema, Types } = require('mongoose')

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default:() => new Types.ObjectId(),
        },
        reactionText: {
            type: String,
            required: true,
            length: (1-200),
        },
        username: {
            type: String,
            required: true,
        }
    }
);

module.exports = reactionSchema;