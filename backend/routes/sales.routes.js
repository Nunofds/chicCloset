const router = require("express").Router();
const sales = require("./../models/Sales.models");

// GET all sales :
router.get("/", async (req, res, next) => {
    try {
        const ALLSALES = await sales.find();
        res.json(ALLSALES);
    } catch (err) {
        next(err);
    }
});

// GET a sale by ID :
router.get("/:id", async (req, res, next) => {
    try {
        const saleById = await sales.findById(req.params.id);
        if (!saleById) {
            return res.status(404).json({ message: "Sale not found" });
        }
        res.json(saleById);
    } catch (err) {
        next(err);
    }
});

// UPDATE a sale
router.put("/:id", async (req, res, next) => {
    try {
        const saleById = await sales.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(saleById);
    } catch (err) {
        next(err);
    }
});

// Create a new sale
router.post("/newsale", async (req, res, next) => {
    try {
        const newSale = await sales.create(req.body);
        res.json(newSale);
    } catch (err) {
        next(err);
    }
});

// DELETE a sale
router.delete("/:id", async (req, res, next) => {
    try {
        const saleById = await sales.findByIdAndDelete(req.params.id);
        if (!saleById) {
            return res.status(404).json({ message: "Sale not found" });
        }
        res.json(saleById);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
