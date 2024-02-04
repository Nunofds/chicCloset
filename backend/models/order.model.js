const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * orders Schema
 */
const orderSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        products: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    default: 0,
                    validate: {
                        validator: function (n) {
                            return n >= 0;
                        },
                        message: "La quantité ne peut pas être négative.",
                    },
                },
            },
        ],
        ammount: { type: Number, required: true },

        deliveryAddress: {
            country: { type: String, required: true, default: null },
            street1: { type: String, required: true, default: null },
            street2: { type: String, default: null },
            city: { type: String, required: true, default: null },
            state: { type: String, required: true, default: null },
            zipCode: { type: String, required: true, default: null },
        },
        invoiceAddress: {
            country: { type: String, default: null },
            street1: { type: String, default: null },
            street2: { type: String, default: null },
            city: { type: String, default: null },
            state: { type: String, default: null },
            zipCode: { type: String, default: null },
        },
        status: {
            type: String,
            enum: ["en_attente", "en_cours", "expediee", "livree"],
            default: "en_attente",
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
