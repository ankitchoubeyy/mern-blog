import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className='min-h-[80vh] mx-15'>
      <h2>Welcome</h2>
      {currentUser ? currentUser.username : "Please login"}
      <br />
      {currentUser ? `Your role is : ${currentUser.role}` : ""}
    </div>
  )
}

export default Home