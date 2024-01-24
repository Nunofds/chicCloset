const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

const saltRounds = 10;

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
 * Get user by ID
 */
const getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await UserModel.findById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }
    } catch (error) {
        res.status(500).json({
            message:
                "Une erreur s'est produite lors de la récupération de l'utilisateur",
        });
    }
};

/**
 * ADD user controller
 */
const createUser = async (req, res) => {
    if (
        !req.body.fname &&
        !req.body.lname &&
        !req.body.email &&
        !req.body.password
    ) {
        return res.status(400).json({
            message:
                "Les champs : prénom, nom, email et mot de passe son obligatoires !",
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = new UserModel({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

/**
 * Update User controller
 */
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { newFname, newLname, newEmail, newPassword } = req.body;

    try {
        const userToUpdate = {
            fname: newFname,
            lname: newLname,
            email: newEmail,
        };

        if (newPassword) {
            userToUpdate.password = await bcrypt.hash(newPassword, saltRounds);
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            userToUpdate,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        res.status(200).json({
            message: "Utilisateur mis à jour avec succès",
            user: updatedUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur lors de la mise à jour de l'utilisateur",
            error,
        });
    }
};

/**
 * Delete user by ID
 */
const deleteUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await UserModel.findByIdAndDelete(userId);
        if (user) {
            res.status(200).json({
                message: "Utilisateur supprimé avec succès",
            });
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }
    } catch (error) {
        res.status(500).json({
            message:
                "Une erreur s'est produite lors de la suppression de l'utilisateur",
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById,
};
