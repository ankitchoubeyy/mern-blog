import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts"); // API endpoint
        setBlogs(response.data);
        console.log("Fetched blogs:", response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blogs. Please try again.", err);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl mb-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-500 sm:text-5xl">
            Explore Our Blogs
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insightful articles on technology, coding, and the future of innovation.
          </p>
          <div className="mt-6 flex justify-center">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Recent Published Blogs */}
        <h2 className="text-2xl font-bold pl-1 border-l-4 border-l-blue-500 mb-3">
          Recently Published
        </h2>

        {/* Loading/Error State */}
        {loading && <p className="text-center text-gray-500">Loading blogs...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Blog Cards Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                title={blog.title}
                author="Ankit Choubey"
                date={new Date(blog.createdAt).toLocaleDateString()}
                readTime="5 min read"
                image={blog.imageUrl}
                tags={blog.tags}
                id= {blog._id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogContainer;
