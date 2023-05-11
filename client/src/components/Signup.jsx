import React, {useState} from 'react'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <div className="formContent">
        <div className="inputBox">
          <label>Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="inputBox">
          <label>Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='btn link' onClick={() => (
          alert(username + " " + password)
        )}>
          Create User
        </button>
      </div>
    </div>
  )
}

export default Signup