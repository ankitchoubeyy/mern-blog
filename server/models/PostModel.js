import mongoose from "mongoose";

// Comment schema
const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to User model
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Users who liked this comment
      },
    ],
  },
  { timestamps: true }
);

// Post schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Post created by which user
      required: true,
    },
    comments: [commentSchema], // Array of comments
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
