import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * User Schema
 */
const userSchema = new Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        address: {
            country: { type: String, required: true },
            street1: { type: String, required: true },
            street2: { type: String },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipCode: { type: String, required: true },
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
        },
        password: { type: String, required: true },
        deliveryAddress: {
            country: { type: String, required: true },
            street1: { type: String, required: true },
            street2: String,
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipCode: { type: String, required: true },
        },
        invoiceAddress: {
            country: { type: String, required: true },
            street1: { type: String, required: true },
            street2: { type: String },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipCode: { type: String, required: true },
        },
        role: {
            type: [String],
            required: true,
            default: ["USER"],
            enum: ["ADMIN", "USER", "GUEST"],
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
