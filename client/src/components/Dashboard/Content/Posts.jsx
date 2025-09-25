import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Trash2 } from "lucide-react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editPost, setEditPost] = useState(null);
  const [formData, setFormData] = useState({ title: "", excerpt: "", content: "", author: "" });

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts");
        console.log(response)
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts. Please try again.", err);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Handle edit post
  const handleEdit = (post) => {
    setEditPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      author: post.author,
    });
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle update post
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/posts/${editPost.id}`, formData);
      setPosts(posts.map((post) => (post.id === editPost.id ? { ...post, ...formData } : post)));
      setEditPost(null);
    } catch (err) {
      setError("Failed to update post. Please try again.",err);
    }
  };

  // Handle delete post
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`http://localhost:3000/api/posts/${id}`);
        setPosts(posts.filter((post) => post.id !== id));
      } catch (err) {
        setError("Failed to delete post. Please try again.", err);
      }
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
          Post Management
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Create, edit, or delete blog posts.
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-gray-600">Loading posts...</div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Posts Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#1e2939] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Author</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {posts.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                        No posts found.
                      </td>
                    </tr>
                  ) : (
                    posts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {post.title}
                        </td>
                  
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.authorAvatar || `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQPREvPprCnFOjFEO-j9-3P1xM-ipMus1hQ&s`}
                              alt={`${post.author}'s avatar`}
                              className="w-8 h-8 rounded-full object-cover border border-blue-500"
                            />
                            <span>{post.author || `Ankit Choubey`}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{post.updatedAt}</td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex space-x-4">
                            <button
                              onClick={() => handleEdit(post)}
                              className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                              title="Edit Post"
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(post.id)}
                              className="text-red-500 hover:text-red-600 transition-colors duration-200"
                              title="Delete Post"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Edit Post Modal */}
        {editPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-lg max-h-[80vh] overflow-y-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Edit Post</h3>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-gray-50 text-gray-900 placeholder-gray-400"
                    placeholder="Enter post title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-gray-50 text-gray-900 placeholder-gray-400"
                    placeholder="Enter post excerpt"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-gray-50 text-gray-900 placeholder-gray-400"
                    placeholder="Enter post content"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-gray-50 text-gray-900 placeholder-gray-400"
                    placeholder="Enter author name"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setEditPost(null)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Posts;