import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');

  if (message) {
    return (
      <div className="container">
        <h4>{message}</h4>
        <Link to="/login" className='link'>Login</Link>
      </div>
    )
  }
  else {
    return (
      <div className="container">
        <h2>Sign Up</h2>
        <div className="formContent">
          <div className="inputBox">
            <label>Username</label>
            <input type="text" name='username' onChange={(e) => { setUsername(e.target.value); setMessage('') }} placeholder='username' />
          </div>
          <div className="inputBox">
            <label>Password</label>
            <input type="text" name='password' onChange={(e) => { setPassword(e.target.value); setMessage('') }} placeholder='password' />
          </div>
          <button
            type='submit'
            onClick={async (e) => {
              const response = await fetch(`http://localhost:8080/signup`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  user: username,
                  pass: password,
                }),
              });
              const json = await response.json();
              console.log(json.msg)
              setMessage(json.msg)
            }}>
            Sign Up
          </button>
        </div>
      </div >
    )
  }
}

export default Signup