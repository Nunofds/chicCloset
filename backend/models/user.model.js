const mongoose = require("mongoose");

/**
 * User Schema
 */
const userSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
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
        address: {
            country: { type: String, default: null },
            street1: { type: String, default: null },
            street2: { type: String },
            city: { type: String, default: null },
            state: { type: String, default: null },
            zipCode: { type: String, default: null },
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
