const CommentModel = require("../models/comment.model");
const mongoose = require("mongoose");

/**
 * Add Comment
 */
const addComment = async (req, res) => {};

/**
 * Get all comments
 */
const getComments = async (req, res) => {
    try {
        const comments = await CommentModel.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Get comment by ID
 */
const getCommentById = async (req, res) => {
    const commentId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).json({
            message: "L'ID du commentaire fourni n'est pas au bon format.",
        });
    }

    try {
        const comment = await CommentModel.findById(commentId);

        if (!comment) {
            res.status(404).json({ message: "Aucun commentaire trouvé!" });
        } else {
            res.status(200).json(comment);
        }
    } catch (error) {
        res.status(500).json(
            {
                message:
                    "Une erreur interne du serveur s'est produite. Veuillez réessayer ultérieurement.",
            },
            { error: error.message }
        );
    }
};

/**
 * Delete comment
 */
const deleteComment = async (req, res) => {
    const commentId = req.params.id;
    try {
        const comment = await CommentModel.findByIdAndDelete(commentId);
        if (comment) {
            res.status(200).json({
                message: "Commentaire supprimé avec succès.",
            });
        } else {
            res.status(404).json({ message: "Commentaire non trouvé!" });
        }
    } catch (error) {
        res.status(500).json({
            message:
                "Une erreur s'est produite lors de la suppression du commentaire.",
            error: error.message,
        });
    }
};

module.exports = { addComment, getComments, getCommentById, deleteComment };
