const bcrypt = require("bcrypt");
const saltRounds = 10;
const { v4: uuidv4 } = require("uuid");

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
 * Get user by ID
 */
const getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await UserModel.findById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé !" });
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
        let newUser = new UserModel({
            id: uuidv4(),
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPassword,
        });
        let savedUser = await newUser.save();
        res.status(200).json({
            message: "Utilisateur ajouté avec succès",
            user: savedUser,
        });
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
    let { fname, lname, email, password } = req.body;

    try {
        // get fields
        let updateFields = {};
        if (fname) updateFields.fname = fname;
        if (lname) updateFields.lname = lname;
        if (email) updateFields.email = email;
        if (password) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            updateFields.password = hashedPassword;
        }

        // Update user
        let updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            updateFields,
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
            error: error.message,
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
