import Post from "../models/PostModel.js";

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { title, content, imageUrl, author } = req.body;

        if (!author) {
            return res.status(400).json({ message: "Author is required" });
        }

        const post = new Post({
            title,
            content,
            imageUrl,
            author,
        });

        await post.save();
        res.status(201).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating post", error });
    }
};


// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("author", "username email")
            .populate("comments.user", "username email")
            .sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error });
    }
};

// Get single post by ID
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate("author", "username email")
            .populate("comments.user", "username email");

        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error fetching post", error });
    }
};

// Update post
export const updatePost = async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    // Author check abhi hata do jab tak JWT implement nahi karte
    // if (post.author.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({ message: "Unauthorized" });
    // }

    post.title = title || post.title;
    post.content = content || post.content;
    post.imageUrl = imageUrl || post.imageUrl;

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
};


// Delete post
export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        // if (post.author.toString() !== req.user._id.toString()) {
        //     return res.status(403).json({ message: "Unauthorized" });
        // }

        await post.deleteOne();
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting post", error });
    }
};

// Add comment
export const addComment = async (req, res) => {
    try {
        const { text } = req.body;
        const post = await Post.findById(req.params.id);

        if (!post) return res.status(404).json({ message: "Post not found" });

        const comment = { user: req.user._id, text };
        post.comments.push(comment);

        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error adding comment", error });
    }
};

// Like/Unlike comment
export const toggleLikeComment = async (req, res) => {
    try {
        const { postId, commentId } = req.params;
        const post = await Post.findById(postId);

        if (!post) return res.status(404).json({ message: "Post not found" });

        const comment = post.comments.id(commentId);
        if (!comment) return res.status(404).json({ message: "Comment not found" });

        const userId = req.user._id.toString();
        const likeIndex = comment.likes.findIndex(
            (id) => id.toString() === userId
        );

        if (likeIndex === -1) {
            comment.likes.push(req.user._id); // like
        } else {
            comment.likes.splice(likeIndex, 1); // unlike
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error liking comment", error });
    }
};
