const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
    {
        // Vous pouvez définir des champs supplémentaires pour les images si nécessaire
        description: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: true,
        },
        // Ajoutez d'autres champs selon vos besoins (par exemple, titre, auteur, etc.)
    },
    {
        timestamps: true,
    }
);

const CarouselImage = mongoose.model("CarouselImage", imageSchema);

module.exports = CarouselImage;
