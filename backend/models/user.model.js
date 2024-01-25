const mongoose = require("mongoose");

/**
 * User Schema
 */
const userSchema = new mongoose.Schema(
    {
        id: { type: String, unique: true, required: true },
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
        },
        password: { type: String, required: true },
        role: {
            type: [String],
            required: true,
            default: ["USER"],
            enum: ["ADMIN", "USER", "GUEST"],
        },
        isAsmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
