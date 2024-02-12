const router = require("express").Router();
const CarouselImage = require("./../models/caroussel");

// GET /caroussel : Toutes les images du caroussel.
router.get("/", async (req, res, next) => {
    try {
        const allImages = await CarouselImage.find();
        res.json(allImages);
    } catch (error) {
        next(error);
    }
});

router.post("/newimage", async (req, res, next) => {
    try {
        const { description, url } = req.body;

        const newImage = await CarouselImage.create({
            description,
            url,
        });

        res.json(newImage);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
