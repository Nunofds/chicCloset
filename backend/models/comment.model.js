import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * Comments Schema
 */
const commentSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        poductId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        comment: { type: String, required: true, default: null },
        note: { type: Number, required: true, default: null },
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default { Comment };
