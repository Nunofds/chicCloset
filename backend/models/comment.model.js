const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Comments Schema
 */
const commentSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        productId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        comment: { type: String, required: true, default: null },
        note: { type: Number, required: true, default: null },
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
