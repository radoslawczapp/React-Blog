import React from 'react'
import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="../bckg2.jpg" alt="Header Image" className="headerImg" />
        </div>
    )
}

export default Header