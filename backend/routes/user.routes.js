const express = require("express");
const {
    getAllUsers,
    updateUser,
    getUserById,
    deleteUserById,
} = require("../controllers/user.controller");
const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const router = express.Router();

// Get All Users
router.get("/all", verifyTokenAndAdmin, getAllUsers);
// Get User by ID
router.get("/find/:id", verifyTokenAndAdmin, getUserById);
// Update User
router.put("/update/:id", verifyTokenAndAuthorization, updateUser);
// Delete User
router.delete("/delete/:id", verifyTokenAndAuthorization, deleteUserById);

module.exports = router;
