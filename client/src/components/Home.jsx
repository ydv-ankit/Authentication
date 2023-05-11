import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div className="container">
      <h1>Welcome !!</h1>
      <div className="btn">
        <Button innerText="Sign Up" />
        <Button innerText="Login" />
      </div>
    </div>
  )
}

const Button = ({ innerText }) => {
  return (
      <button>
        {innerText}
      </button>
  );
}