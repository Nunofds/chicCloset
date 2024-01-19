/**
 * products Schema
 */
const productSchema = new Schema(
    {
        categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
        name: { type: String, requied: true },
        image: { type: [String], requied: true },
        description: { type: String, requied: true },
        price: {
            value: { type: Number, required: true },
            currency: {
                type: [String],
                requied: true,
                default: "EUR",
                enum: ["USD", "EUR", "GBP", "JPY"],
            },
        },
        slug: { type: String, required: true },
        stock: { type: Number, required: true },
        isOnSale: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
    }
);
