const UserModel = require("../models/user.model");

/**
 * GET all users controller
 */
const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * ADD user controller
 */
const createUser = async (req, res) => {
    try {
        if (!req.body.fname) {
            return res
                .status(400)
                .json({ message: "Merci d'ajouter un prénom!" });
        }

        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = { getAllUsers, createUser };
