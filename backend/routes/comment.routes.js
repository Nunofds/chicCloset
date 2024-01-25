const express = require("express");
const router = express.Router();
const {
    getComments,
    getCommentById,
    deleteComment,
} = require("../controllers/comment.controller");

// Get all comments
router.get("/", getComments);
// Get comment by ID
router.get("/:id", getCommentById);
// delete comment
router.delete("/delete/:id", deleteComment);

module.exports = router;
