import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  addComment,
  toggleLikeComment,
} from "../controllers/PostController.js";

const postRouter = express.Router();

// Post routes
postRouter.post("/", createPost);
postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

// Comment routes
postRouter.post("/:id/comments", addComment);
postRouter.put("/:postId/comments/:commentId/like", toggleLikeComment);

export default postRouter;
