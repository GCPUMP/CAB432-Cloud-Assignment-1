import React, { useState } from 'react';
import './Login.css';
import { NavLink, } from 'reactstrap';

export default function App() {

  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
    const [Message, setMessage] = useState('');

    const API_URL = "http://131.181.190.87:3000"

    function Register(Email, Password){
    const url = API_URL + "/user/register"

    return fetch(url, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({ email: Email, password: Password })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setMessage(res.message)
      })
    }

  return(
<div className ="body">
  <div className="parent-div">
<div className="test-site col-4">
<div className="top-spacing bottom-spacing centre">
      <h1>Register</h1>
</div>
        <label className = "col-12 small-bottom-spacing">
          <p>Email</p>
          <input className="forms" type="Email" placeholder="Email.." onChange={e => setEmail(e.target.value)}/>
        </label>
         <label className = "col-12">
          <p>Password</p>
          <input className="forms" type="Password" placeholder="Password.." onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className = "col-12 top-spacing bottom-spacing centre">
          <button onClick={() => Register(Email, Password)}>Register</button>
        </div>
        <label className = "col-12 centre">
        <NavLink color="light" href="/Login">Login</NavLink>
    </label>
        {Message ? <p> {Message}</p> : null}
    </div>

</div>
</div>
  )
}
