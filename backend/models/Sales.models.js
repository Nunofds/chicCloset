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
            min: 0,
            max: 100,
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
            // Fonction qui permet de vérifier que la date de fin est supérieure à la date de début avec message d'erreur.
            validate: function (value) {
                return value >= this.startDate;
            },
            message: "La date de fin doit être supérieure à la date de début",
        },
        /** endDate: {
                type: Date,
                required: true,
                default: Date.now
            },
         */
    },
    // Voir si add pre-save hook pour mettre à jour le stock. Ask Nuno.

    { timestamps: true }
);

const Sales = model("Sales", salesSchema);

module.exports = Sales;
