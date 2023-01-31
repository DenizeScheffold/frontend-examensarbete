import * as React from "react";
import {useState} from 'react';
import './Login.css';

export default function Login() {

	const[username, setUsername] = useState('username')
	const[password, setPassword] = useState('password')

	function handleUsernameChange(event){
		console.log(event.target.value);
		setUsername(event.target.value);
	}

	function handlePasswordChange(event){
		console.log(event.target.value);
		setPassword(event.target.value);
	}


  return (
    <div className="Login">
      <div className="LoginForm">
        <div>
          <label>User name</label>
          <input type="text" name="username" value={username} onChange={handleUsernameChange} />
        </div>
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button type="button" name="login" >login</button>
      </div>
    </div>
  );
}
