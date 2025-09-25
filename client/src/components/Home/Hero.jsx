import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Discover Stories That Inspire
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-lg">
              Dive into a world of ideas, insights, and creativity. Explore our blog for the latest articles and updates.
            </p>
            <div>
              <a
                href="/blogs"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-lg"
              >
                Read Now
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJsb2d8ZW58MHx8MHx8fDA%3D"
              alt="Hero"
              className="rounded-lg shadow-xl object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;