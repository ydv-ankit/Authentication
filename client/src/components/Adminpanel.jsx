import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Adminpanel = () => {
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState('');

    if (data.length !== 0 || msg.length !== 0) {
        if (data.length === 0) {
            return (
                <div className="container">
                    <h2>{msg}</h2>
                    <h5>No data</h5>
                    <Link to="/" className='link'>Logout</Link>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <h2>{msg}</h2>
                    <div className="table-scroll">
                        <table className="table">
                            <thead style={{ fontSize: 20 }}>
                                <tr>
                                    <td><b>Username</b></td>
                                    <td><b>Password</b></td>
                                </tr>
                                {Object.entries(data).map(([key, value]) => (
                                    <tr>
                                        <td>{value.user}</td>
                                        <td>{value.pass}</td>
                                    </tr>
                                ))}
                            </thead>
                        </table>
                    </div>
                    <Link to="/" className='link'>Logout</Link>
                </div>
            );
        }
    } else {
        return (
            <div className="container">
                <h2>Administrator</h2>
                <div className="formContent">
                    <div className="inputBox">
                        <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit'
                        onClick={async (e) => {
                            const response = await fetch(`http://localhost:8080/admin`, {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    pass: password,
                                }),
                            });
                            const json = await response.json();
                            console.log(json)
                            setData(json.data)
                            setMsg(json.msg)
                        }}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}