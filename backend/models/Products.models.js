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
            // type: [String],
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
            validate: {
                validator: function (n) {
                    return n >= 0;
                },
                message: "Le stock ne peut pas être négatif.",
            },
        },
        isOnSales: {
            type: Boolean,
            required: true,
        },

        /**
         * On peut supprimer car il y a le timestamp qui ajoute la date et l'heure
         */
        // dateAdded: {
        //     type: Date,
        //     required: false,
        //     default: Date.now,
        // },
        // dateModified: {
        //     type: Date,
        // },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
