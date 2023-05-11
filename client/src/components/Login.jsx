import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
        <button className='btn link' onClick={()=>(
          alert(username + " " + password)
        )}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login