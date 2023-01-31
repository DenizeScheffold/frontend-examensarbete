import * as React from "react";
import {useState} from 'react';
import './Login.css';

export default function Login() {

	const[username, setUsername] = useState('username')
	const[password, setPassword] = useState('password')
	const[showSuccessMessage, setShowSuccessMessage] = useState(false)
	const[showErrorMessage, setShowErrorMessage] = useState(false)

	function handleUsernameChange(event){
		console.log(event.target.value);
		setUsername(event.target.value);
	}

	function handlePasswordChange(event){
		console.log(event.target.value);
		setPassword(event.target.value);
	}

	function handleSubmit(){
		if(username==='stina' && password==='123'){
			setShowSuccessMessage(true)
			setShowErrorMessage(false)
		} else {
			setShowErrorMessage(true)
			setShowSuccessMessage(false)
		}
	}

	function SuccessMessageComponent(){
		if(showSuccessMessage)
			return <div className="successMessage">Authenticated Successfully</div>
		return null
		}

	function ErrorMessageComponent(){
			if(showErrorMessage)
				return <div className="errorMessage">Authentication Failed. Please check credentials</div>
			return null
	}


  return (

    <div className="Login">
		<SuccessMessageComponent/>
		<ErrorMessageComponent/>
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
        <button type="button" name="login" onClick={handleSubmit}>login</button>
      </div>
    </div>
  );
}

