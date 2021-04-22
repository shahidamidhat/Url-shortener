import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../App.css';

function Registration() {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const[username,setusername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
		e.preventDefault();
		const registration = { email, username, password, links : [] }
		async function postRegistrationData(){
			await axios.post('https://url-shortener-ak.herokuapp.com/register', registration)
		}
		postRegistrationData();		
		setEmail('');
        setPassword('');
        setusername('');
	}

    return (
        <div className="registration">
            <div className="registration_container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label><br/>
                    <input id='email' required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" type="email"/>
                    <label htmlFor="username">User Name</label><br/>
                    <input id='username' required value={username} onChange={(e) => setusername(e.target.value)} placeholder="Enter your Name" type="text"/>
                    <label htmlFor="password">Password</label>
                    <input id='password' required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" type="password"/>
                    <button className="btn btn-primary">Sign Up</button>
                </form>
                <h4>Already have an account?</h4>
                <button className="btn btn-primary" onClick={() => {history.push('/login')}}>Login</button>
            </div>
        </div>
    )
}

export default Registration