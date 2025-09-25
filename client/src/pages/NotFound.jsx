import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Icon and Header */}
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-16 h-16 text-blue-500 animate-pulse" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Call to Action */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
          >
            Back to Home
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 relative">
          <div className="absolute inset-0 w-full h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl opacity-20"></div>
          <p className="text-sm text-gray-500">
            Explore our <Link to="/blogs" className="text-blue-500 hover:underline">blog posts</Link> for more content!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;