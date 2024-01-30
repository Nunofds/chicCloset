const router = require("express").Router();
const product = require("../models/Products.models");

// GET /product : Tous les produits.
router.get("/products", async (req, res, next) => {
    try {
        const AllProducts = await product.find();
        res.json(AllProducts);
    } catch (error) {
        next(error);
    }
});

// GET /products/:id : Un produit par son id.
// récupéerer un produit en spécifiant le ID du produit dans l'URL.
router.get("/product/:id", async (req, res, next) => {
    try {
        const ProductById = await product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }
        res.json(ProductById);
    } catch (error) {
        next(error);
    }
});

// UPDATE /products/:id : Modifier un produit par son id.
router.put("/product/:id", async (req, res, next) => {
    try {
        const ProductById = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(ProductById);
    } catch (error) {
        next(error);
    }
});

// DELETE /products/:id : Supprimer un produit par son id.
router.delete("/product/:id", async (req, res, next) => {
    try {
        const ProductById = await product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json[{ message: "Produit non trouvé" }];
        }
        res.json(ProductById);
    } catch (error) {
        next(error);
    }
});
