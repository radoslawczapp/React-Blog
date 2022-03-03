import React from 'react'
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="./avatar.png" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Joe Doe" />
                    <label>Email</label>
                    <input type="email" placeholder="joedoe@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSumbit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings