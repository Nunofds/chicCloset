const router = require("express").Router();
const Products = require("../models/Products.models");

// GET /products : Tous les produits.
router.get("/", async (req, res, next) => {
    try {
        const AllProducts = await Products.find();
        res.json(AllProducts);
    } catch (error) {
        next(error);
    }
});
