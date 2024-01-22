import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * orders Schema
 */
const orderSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // (clé étrangère vers la table Utilisateurs)
        status: {
            type: String,
            enum: ["en_attente", "en_cours", "expediee", "livree"],
            required: true,
            default: ["en_attente"],
        },
        shoppingCart: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 0,
                    validate: {
                        validator: function (n) {
                            return n >= 0;
                        },
                        message: "La quantité ne peut pas être négative.",
                    },
                },
                total: { type: Number, required: true, default: null },
            },
        ],
        deliveryAddress: {
            country: { type: String, default: null },
            street1: { type: String, default: null },
            street2: String,
            city: { type: String, default: null },
            state: { type: String, default: null },
            zipCode: { type: String, default: null },
        },
        invoiceAddress: {
            country: { type: String, default: null },
            street1: { type: String, default: null },
            street2: { type: String },
            city: { type: String, default: null },
            state: { type: String, default: null },
            zipCode: { type: String, default: null },
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default { Order };
