import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');
  if (message) {
    return (
      <div className="container">
        <h3>{message}</h3>
        <Link to="/" className='link'>Homepage</Link>
      </div>
    )
  }
  else {
    return (
      <div className="container">
        <h2>Login</h2>
        <div className="formContent">
          <div className="inputBox">
            <label>Username</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="inputBox">
            <label>Password</label>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type='submit'
            onClick={async (e) => {
              const response = await fetch(`http://localhost:8080/login`, {
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
              console.log(json)
              setMessage(json.msg)
            }}>
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default Login