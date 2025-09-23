import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} codeblog. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact" 
              className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/privacy" 
              className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
