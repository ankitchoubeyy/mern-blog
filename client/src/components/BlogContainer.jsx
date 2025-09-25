import React from "react";
import BlogCard from "./BlogCcard";

const BlogContainer = () => {
  // Sample blog data (replace with dynamic data from API or state)
  const blogs = [
    {
      id: "1",
      title: "The Future of AI: What to Expect in 2025",
      excerpt: "Explore the latest advancements in artificial intelligence and how they're shaping our world.",
      author: "John Doe",
      date: "September 25, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Technology", "Future"],
    },
    {
      id: "2",
      title: "Mastering React: Tips for Building Scalable Apps",
      excerpt: "Learn expert tips for creating efficient and scalable React applications with modern practices.",
      author: "Jane Smith",
      date: "September 20, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1537432372469-45f3272b0065?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Web Development", "Coding"],
    },
    {
      id: "3",
      title: "The Rise of Web3: Decentralized Future",
      excerpt: "Dive into the world of Web3 and understand how blockchain is transforming the internet.",
      author: "Alex Johnson",
      date: "September 15, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web3", "Blockchain", "Tech"],
    },
  ];

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

        {/* Recent Pulished Blogs */}
        <h2 className="text-2xl font-bold pl-1 border-l-5 border-l-blue-500 mb-3">Recently Pulished</h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContainer;