import React from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams(); // Get blog ID from URL

  // Sample blog data (replace with API or Redux data)
  const blogData = {
    1: {
      id: "1",
      title: "The Future of AI: What to Expect in 2025",
      excerpt: "Explore the latest advancements in artificial intelligence and how they're shaping our world.",
      content: `
        <p>Artificial Intelligence (AI) is rapidly transforming industries, from healthcare to finance, and 2025 is poised to be a landmark year. In this article, we dive deep into the trends, technologies, and ethical considerations shaping the future of AI.</p>
        <h2>Advancements in Machine Learning</h2>
        <p>Machine learning models are becoming more efficient, with breakthroughs in unsupervised learning and generative AI. Expect to see more personalized applications, from virtual assistants to recommendation systems.</p>
        <h2>Ethical AI and Governance</h2>
        <p>As AI becomes ubiquitous, ethical concerns around bias, privacy, and transparency are taking center stage. Governments and organizations are working on frameworks to ensure responsible AI development.</p>
        <p>Stay tuned as we explore how AI will continue to evolve, bringing both opportunities and challenges in the years ahead.</p>
      `,
      author: "John Doe",
      date: "September 25, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["AI", "Technology", "Future"],
    },
    2: {
      id: "2",
      title: "Mastering React: Tips for Building Scalable Apps",
      excerpt: "Learn expert tips for creating efficient and scalable React applications with modern practices.",
      content: `
        <p>React remains a powerhouse for building modern web applications. This article shares expert tips for creating scalable, maintainable React apps in 2025.</p>
        <h2>Component Architecture</h2>
        <p>Organize your components with a clear structure, using atomic design principles to ensure reusability and maintainability.</p>
        <h2>State Management</h2>
        <p>Leverage tools like Redux or Zustand for efficient state management in large-scale applications. Avoid prop drilling by using Context API where appropriate.</p>
        <p>With these strategies, you can build React apps that scale effortlessly and delight users.</p>
      `,
      author: "Jane Smith",
      date: "September 20, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1537432372469-45f3272b0065?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "Web Development", "Coding"],
    },
  };

  // Fetch blog based on ID (fallback to default if not found)
  const blog = blogData[id] || {
    id: "0",
    title: "Blog Not Found",
    excerpt: "Sorry, the blog you are looking for does not exist.",
    content: "<p>Sorry, the blog you are looking for does not exist. Please check the URL or return to the blog list.</p>",
    author: "Unknown",
    date: "N/A",
    readTime: "N/A",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: [],
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Blog Image */}
        <div className="relative overflow-hidden rounded-xl shadow-lg mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 sm:h-96 object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Blog Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {blog.readTime}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Back to Blogs Link */}
          <div className="mt-8">
            <a
              href="/blogs"
              className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-2 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Back to Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;