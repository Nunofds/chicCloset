const router = require("express").Router();
const category = require("./../models/Categories.models");

// GET all categories :
// Récuperer toutes les catégories
router.get("/", async (req, res, next) => {
    try {
        const AllCategories = await category.find();
        res.json(AllCategories);
    } catch (err) {
        next(err);
    }
});

// GET a category by ID :
// Récuperer une catégorie par son ID
router.get("/:id", async (req, res, next) => {
    try {
        const categoryById = await category.findById(req.params.id);
        if (!categoryById) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(categoryById);
    } catch (err) {
        next(err);
    }
});

// UPDATE a category
// Modifier une catégorie
router.put("/:id", async (req, res, next) => {
    try {
        const categoryById = await category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(categoryById);
    } catch (err) {
        next(err);
    }
});

// POST a category : Ajouter une catégorie
// Ajouter une catégorie en spéciafiant newcategory dans l'URL
router.post("/newcategory", async (req, res, next) => {
    try {
        const newCategory = await category.create(req.body);
        res.json(newCategory);
    } catch (err) {
        next(err);
    }
});

// DELETE a category : Supprimer une catégorie
// Supprimer une catégorie en spécifiant le ID de la catégorie dans l'URL
router.delete("/:id", async (req, res, next) => {
    try {
        const categoryById = await category.findByIdAndDelete(req.params.id);
        if (!categoryById) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(categoryById);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
