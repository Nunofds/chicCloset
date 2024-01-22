const { Schema, model } = require("mongoose");

const salesSchema = new Schema(
    {
        salesCode: {
            type: String,
            // type: [String],
            required: true,
        },
        discount: {
            type: Number,
            required: true,
        },
        startDate: {
            type: String,
            required: true,
        },
        /** startDate: {
                type: Date,
                required: true,
                default: Date.now
            },
         */
        endDate: {
            type: String,
            required: true,
        },
        /** endDate: {
                type: Date,
                required: true,
                default: Date.now
            },
         */
    },

    { timestamps: true }
);

const Sales = model("Sales", salesSchema);

module.exports = Sales;
