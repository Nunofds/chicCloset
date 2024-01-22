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
            validate: {
                // Fonction qui permet de vérifier que le stock ne peut pas être négatif avec message d'erreur.
                validator: function (n) {
                    return n >= 0;
                },
                message: "Le stock ne peut pas être négatif.",
            },
        },
        // Variants est un tableau d'objets qui contient les couleurs et les tailles disponibles pour chaque produit. a agrémenter si besoin. Voir avec Nuno.
        variants: [
            {
                color: {
                    type: String,
                    required: true,
                },
                size: {
                    type: String,
                    required: true,
                },
            },
        ],
        brand: {
            type: String,
            required: true,
        },
        isOnSales: {
            type: Boolean,
            required: true,
        },
        dateAdded: {
            type: Date,
            required: false,
            default: Date.now,
        },
        dateModified: {
            type: Date,
        },
        // Catégorie du produit : Si les produits appartiennent à des catégories.
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
    },

    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
