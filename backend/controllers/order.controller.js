const OrderModel = require("../models/order.model");

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
 * Get order by id
 */
const getOrderById = async (req, res) => {
    try {
        const orders = await OrderModel.find({ userId: req.params.userdId });

        if (orders) {
            res.status(200).json(orders);
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
 * Update order
 */
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await OrderModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Delete order
 */
const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await OrderModel.findOneAndDelete({
            _id: req.params.id,
        });

        if (deletedOrder) {
            res.status(200).json({ message: "Commande supprimé avec succès!" });
        } else {
            res.status(404).json({
                message: "Commande non trouvé!",
                error: error.message,
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
                "Un erreur est survenu lors de la suppression de la commande.",
        });
    }
};

module.exports = {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder,
};
