const express = require("express");
const {
    getAllUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUserById,
} = require("../controllers/user.controller");
const router = express.Router();

// Get All Users
router.get("/all", getAllUsers);
// Get User by ID
router.get("/:id", getUserById);
// Add User
router.post("/add", createUser);

// Update User
router.put("/update/:id", updateUser);

// Delete User
router.delete("/delete/:id", deleteUserById);

module.exports = router;
