const OrderModel = require("../models/order.model");
const UserModel = require("../models/user.model");

/**
 * Get all orders
 */
const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Get by id
 */
const getOrderById = async (req, res) => {
    const orderId = req.params.id;

    try {
        const order = await OrderModel.findById(orderId);

        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: "Commande non trouvé !" });
        }
    } catch (error) {
        res.status(500).json({
            message:
                "Une erreur s'est produite lors de la récupération de la commande",
        });
    }
};

/**
 * Add an order on BDD
 */
const addOrder = async (req, res) => {
    try {
        const usersId = req.user ? req.user.id : null;
        if (!usersId) {
            return res.status(401).json({
                message: "Utilisateur non authentifié",
            });
        }

        const newOrder = new OrderModel({ ...req.body, usersID: usersId });

        let savedOrder = await newOrder.save();
        res.status(200).json({
            message: "Commande effectué avec succès",
            savedOrder,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

/**
 *
 */
const updateOrder = async (req, res) => {};

/**
 * Delete order
 */
const deleteOrder = async (req, res) => {};

module.exports = {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder,
};
