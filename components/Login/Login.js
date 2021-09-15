import React, { useState } from 'react';
import './Login.css';
import { NavLink, } from 'reactstrap';

export default function App() {

  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
    const [Message, setMessage] = useState('');
    const [SuccessMessage, setSuccessMessage] = useState('');
    const [Token, setToken] = useState('');

    const API_URL = "http://131.181.190.87:3000"

    function Login(Email, Password){
    const url = API_URL + "/user/login"

    return fetch(url, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({ email: Email, password: Password })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setMessage(res.message)
        if (res.token){
          setSuccessMessage("Logged in Successfully")
        }
        localStorage.setItem("token", res.token)
      })
    }



  return(
<div className ="body">
  <div className="parent-div">
<div className="test-site col-4">
<div className="top-spacing bottom-spacing centre">
      <h1>Login</h1>
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
          <button onClick={() => Login(Email, Password)}>Login</button>
        </div>
        <label className = "col-12 centre">
        <NavLink color="light" href="/Register">Register</NavLink>
</label>
        {Message ? <p> {Message}</p> : null}
<div className="Success-Message">
        {SuccessMessage ? <p> {SuccessMessage}</p> : null}
        </div>
    </div>
</div>
</div>
  )
}
