import React, { useState } from 'react'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <div className="formContent">
        <div className="inputBox">
          <label>Username</label>
          <input type="text" name='username' onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
        </div>
        <div className="inputBox">
          <label>Password</label>
          <input type="text" name='password' onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        </div>
        <button
          type='submit'
          onClick={async (e) => {
            const response = await fetch(`http://localhost:8080/signup`, {
              method: "POST" ,
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user: username,
                pass: password,
              }),
            });
            console.log(response);
            const json = await response.json();
            console.log(json);
          }}>
          Sign Up
        </button>
    </div>
    </div >
  )
}

export default Signup