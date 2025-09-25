import React from 'react'
import Hero from '../components/Home/Hero';
import BlogContainer from '../components/BlogContainer';

const Home = () => {

  return (
    <div className='min-h-[80vh] mx-15'>
      {/* Hero Section */}
      <Hero/>

      {/* Blog Section */}
      <BlogContainer/>
    </div>
  )
}

export default Home