import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="email" placeholder="Enter you email..." />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter you password..." />
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">
                    <Link className="link" to="/register">Register</Link>
                </button>

            </form>
        </div>
    )
}

export default Login