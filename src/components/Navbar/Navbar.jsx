import React from "react";
import p from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={p.nav}>
            <div className={`${p.item} ${p.active}`}>
                <a>Profile</a>
            </div>
            <div className={p.item}>
                <a>Messages</a>
            </div>
            <div className={p.item}>
                <a>News</a>
            </div>
            <div className={p.item}>
                <a>Music</a>
            </div>
            <div className={p.item}>
                <a>Settings</a>
            </div>
        </nav>)
}

export default Navbar;