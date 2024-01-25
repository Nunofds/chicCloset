const express = require("express");
const router = express.Router();
const {
    getAllOrders,
    getOrderById,
    addOrder,
    deleteOrder,
} = require("../controllers/order.controller");

// Get all orders
router.get("/all", getAllOrders);
// Get order by ID
router.get("/:id", getOrderById);
// add an order on BDD
router.post("/user/addorder/", addOrder);
// delete order
router.delete("/delete/:id", deleteOrder);

module.exports = router;
