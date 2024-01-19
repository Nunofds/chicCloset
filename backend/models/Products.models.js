const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        salesId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Sales",
            },
        ],
        name: {
            type: String,
            required: true,
        },
        Images: {
            type: Array,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            value: { type: Number, required: true },
            currency: {
                type: [String],
                requied: true,
                default: "EUR",
                enum: ["USD", "EUR", "GBP", "JPY"],
            },
        },
        slug: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        isOnSales: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
