const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
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
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
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
        // categories: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Category",
        //     },
        // ],
        sales: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Sales",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
