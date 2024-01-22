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
            country: { type: String, required: true, default: null },
            street1: { type: String, required: true, default: null },
            street2: { type: String, default: null },
            city: { type: String, required: true, default: null },
            state: { type: String, required: true, default: null },
            zipCode: { type: String, required: true, default: null },
        },
        invoiceAddress: {
            country: { type: String, default: deliveryAddress.country },
            street1: { type: String, default: deliveryAddress.street1 },
            street2: { type: String, default: deliveryAddress.street2 },
            city: { type: String, default: deliveryAddress.city },
            state: { type: String, default: deliveryAddress.state },
            zipCode: { type: String, default: deliveryAddress.zipCode },
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default { Order };
