const express = require("express");
const router = express.Router();
const {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder,
} = require("../controllers/order.controller");
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");

// Get all orders
router.get("/all", verifyTokenAndAuthorization, getAllOrders);
// Get order by ID
router.get("/:id", verifyTokenAndAuthorization, getOrderById);
// add an order on BDD
router.post("/add", verifyTokenAndAuthorization, addOrder);
// update an order on BDD
router.put("/update/:id", verifyTokenAndAuthorization, updateOrder);
// delete order
router.delete("/delete/:id", verifyTokenAndAuthorization, deleteOrder);

module.exports = router;
