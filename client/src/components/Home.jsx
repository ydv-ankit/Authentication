import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="container">
      <h1>Welcome !!</h1>
      <div className="btn">
        <Link to="/signup" className='link'>Sign Up</Link>
        <Link to="/login" className='link'>Login</Link>
        <Link to="/admin" className='link'>Admin Panel</Link>
      </div>
    </div>
  )
}
