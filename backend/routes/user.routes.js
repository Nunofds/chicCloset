const express = require("express");
const { getAllUsers, createUser } = require("../controllers/user.controller");
const router = express.Router();

// Get All Users
router.get("/all", getAllUsers);

// Get User by ID
router.get("/:id", (req, res) => {
    id = req.params.id;
    res.json({ message: `Voici l'user ${id}` });
});

// Add User
router.post("/add", createUser);

// Update User
router.put("/update/:id", (req, res) => {
    id = req.params.id;
    res.json({ message: `voici l'utilisateur mis à jour : ${id}` });
});

// Delete User
router.delete("/delete/:id", (req, res) => {
    res.json({ message: `utilisateur supprimé : ${req.params.id}` });
});

module.exports = router;
