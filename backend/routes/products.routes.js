const router = require("express").Router();
const product = require("./../models/Products.models");

// GET /products : Tous les produits.
// Récupérer tous les produits.
router.get("/", async (req, res, next) => {
    try {
        const allProducts = await product.find();
        res.json(allProducts);
    } catch (error) {
        next(error);
    }
});

// GET /products/:id : Un produit par son id.
// Récupérer un produit en spécifiant le ID du produit dans l'URL.
router.get("/:id", async (req, res, next) => {
    try {
        if (!req.params.id) {
            return res
                .status(400)
                .json({ message: "Identifiant du produit manquant" });
        }

        const productById = await product.findById(req.params.id);

        if (!productById) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }
        res.json(productById);
    } catch (error) {
        next(error);
    }
});

// UPDATE /products/:id : Modifier un produit par son id.
// Modifier un produit en spécifiant le ID du produit dans l'URL.
router.put("/:id", async (req, res, next) => {
    try {
        const productById = await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(productById);
    } catch (error) {
        next(error);
    }
});

// POST /newproducts : Ajouter un produit.
// Ajouter un produit en spécifiant le ID du produit dans l'URL.
// router.post("/newproduct", async (req, res, next) => {
//     try {
//         const newProduct = await product.create(req.body);
//         res.json(newProduct);
//     } catch (error) {
//         next(error);
//     }
// });
// router.post("/newproduct", async (req, res, next) => {
//     try {
//         const newProduct = new product({
//             name: req.body.name,
//             description: req.body.description,
//             price: {
//                 value: req.body.price.value,
//                 currency: req.body.price.currency,
//             },
//             slug: req.body.slug,
//             stock: req.body.stock,
//             variants: req.body.variants,
//             brand: req.body.brand,
//             isOnSales: req.body.isOnSales,
//             // dateAdded est facultatif car il a une valeur par défaut.
//             // Si vous ne le fournissez pas dans la requête, il prendra la valeur par défaut (Date.now).
//             dateAdded: req.body.dateAdded,
//             // dateModified peut être laissé vide car il sera mis à jour automatiquement par les horodatages.
//             dateModified: req.body.dateModified,
//             category: req.body.category,
//         });

//         const savedProduct = await newProduct.save();
//         res.json(savedProduct);
//     } catch (error) {
//         if (error.name === "ValidationError") {
//             // Gestion explicite des erreurs de validation.
//             res.status(400).json({ error: error.message });
//         } else {
//             // Gestion des autres types d'erreurs.
//             next(error);
//         }
//     }
// });

router.post("/newproduct", async (req, res, next) => {
    try {
        const {
            name,
            description,
            price,
            slug,
            stock,
            variants,
            brand,
            isOnSales,
            category,
        } = req.body;

        const newProduct = await product.create({
            name,
            description,
            price,
            slug,
            stock,
            variants,
            brand,
            isOnSales,
            categoryId: category,
        });

        res.json(newProduct);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ error: error.message });
        } else {
            next(error);
        }
    }
});

// DELETE /:id : Supprimer un produit par son id.
// Supprimer un produit en spécifiant le ID du produit dans l'URL.
router.delete("/:id", async (req, res, next) => {
    try {
        const productById = await product.findByIdAndDelete(req.params.id);
        if (!productById) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }
        res.json(productById);
    } catch (error) {
        next(error);
    }
});

// Consultation des produits par catégorie
// GET /products/category/:id : Tous les produits par catégorie.
// populate permet de récupérer les données de la catégorie associée au produit.
// router.get("/category/:name", async (req, res, next) => {
//     try {
//         const productsByCategory = await product.find({ "category.name": req.params.name }).populate("category");
//         res.json(productsByCategory);
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = router;

// NB
// création des routes
// dans server.js : app.use("/products", require("./routes/products.routes"));
