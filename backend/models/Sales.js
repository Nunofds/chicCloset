const { Schema, model } = require("mongoose");

const salesSchema = new Schema(
    {
        salesCode: {
            type: String,
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
        endDate: {
            type: String,
            required: true,
        },
    },

    { timestamps: true }
);

const Sales = model("Sales", salesSchema);

module.exports = Sales;
