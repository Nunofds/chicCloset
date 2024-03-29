const express = require("express");
const router = express.Router();
const {
    addComment,
    getComments,
    getCommentById,
    deleteComment,
} = require("../controllers/comment.controller");
const {
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");

//add comment
router.post("/add/:userId", verifyTokenAndAuthorization, addComment);
// Get all comments
router.get("/", verifyTokenAndAdmin, getComments);
// Get comment by ID
router.get("/find/:id", verifyTokenAndAuthorization, getCommentById);
// delete comment
router.delete("/delete/:id", verifyTokenAndAdmin, deleteComment);

module.exports = router;
