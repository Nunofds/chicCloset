const express = require("express");
const router = express.Router();
const {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder,
} = require("../controllers/order.controller");
const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
    verifyToken,
} = require("../middlewares/verifyToken");

// Get all orders
router.get("/all", verifyTokenAndAuthorization, getAllOrders);
// Get order by ID
router.get("/find/:userId", verifyTokenAndAuthorization, getOrderById);
// add an order on BDD
router.post("/add/", verifyToken, addOrder);
// update an order on BDD
router.put("/update/:id", verifyTokenAndAdmin, updateOrder);
// delete order
router.delete("/delete/:id", verifyTokenAndAdmin, deleteOrder);

module.exports = router;
