const router = require("express").Router();
const sales = require("./../models/Sales.model");

// GET all sales :
router.get("/", async (req, res, next) => {
    try {
        const ALLSALES = await sales.find();
        res.json(ALLSALES);
    } catch (err) {
        next(err);
    }
});

// Create a new sale

// Update a sale with id

// Delete a sale with id

// Update a sale

module.exports = router;
