import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Email</label>
                <input className="registerInput" type="email" placeholder="Enter you email..." />
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter you username..." />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter you password..." />
                <button className="registerButton">register</button>
                <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
                
            </form>
        </div>
    )
}

export default Register