import React from "react";
import p from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={p.nav}>
            <div className={`${p.item} ${p.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={p.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={p.item}>
                <a href="/news">News</a>
            </div>
            <div className={p.item}>
                <a href="/music" > Music</a>
            </div>
            <div className={p.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>)
}

export default Navbar;