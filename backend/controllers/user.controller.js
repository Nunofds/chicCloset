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
        if (
            !req.body.fname &&
            !req.body.lname &&
            !req.body.email &&
            !req.body.password
        ) {
            return res
                .status(400)
                .json({
                    message:
                        "Les champs : prénom, nom, email et mot de passe son obligatoire!",
                });
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
