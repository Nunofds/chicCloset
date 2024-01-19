import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * User Schema
 */
const userSchema = new Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        adress: {
            country: String,
            street1: String,
            street2: String,
            city: String,
            state: String,
            zipCode: String,
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
        },
        password: String,
        deliveryAddress: {
            country: String,
            street1: String,
            street2: String,
            city: String,
            state: String,
            zipCode: String,
        },
        invoiceAdress: {
            country: String,
            street1: String,
            street2: String,
            city: String,
            state: String,
            zipCode: String,
        },
        role: Array,
    },
    {
        timestamps: true,
    }
);

/**
 * categories Schema
 */
const categorySchema = new Schema(
    {
        name: String,
    },
    {
        timestamps: true,
    }
);

/**
 * products Schema
 */
const productSchema = new Schema(
    {
        categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
        name: String,
        image: [String],
        description: String,
        price: Number,
        currency: [String],
        slug: String,
        stock: Number,
        isOnSale: Boolean,
    },
    {
        timestamps: true,
    }
);

/**
 * orders Schema
 */
const ordersSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User" }, // (clé étrangère vers la table Utilisateurs)
        status: {
            type: String,
            enum: ["en_attente", "en_cours", "expediee", "livree"],
        },
        shoppingCart: [
            {
                productId: { type: Schema.Types.ObjectId, ref: "Product" },
                quantite: Number,
            },
        ],
    },
    {
        timestamps: true,
    }
);

/**
 * comments Schema
 */
const commentsSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        poductId: { type: Schema.Types.ObjectId, ref: "Product" },
        comment: String,
        note: Number,
    },
    {
        timestamps: true,
    }
);

/**
 * sales Schema
 */
const salesSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        poductId: { type: Schema.Types.ObjectId, ref: "Product" },
        salesCode: String,
        discount: Number,
        salesStartAt: { type: Date, default: Date.now },
        salesEndAt: { type: Date, default: null },
    },
    {
        timestamps: true,
    }
);

/**
 * ----- Modèles Mongoose basés sur les schémas -----
 */
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const Category = mongoose.model("Category", categorySchema);
const Order = mongoose.model("Order", ordersSchema);
const Comment = mongoose.model("Comment", commentsSchema);
const Sales = mongoose.model("Sale", salesSchema);

/**
 * --*****-- EXPORTS --*****--
 */
module.exports = { User, Product, Category, Order, Comment, Sales };
