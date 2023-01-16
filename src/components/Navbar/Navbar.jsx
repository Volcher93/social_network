import React from "react";
import p from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={p.nav}>
            <div className={p.item}>
                <NavLink to="/profile" activeClassName={p.activeLink}>Profile</NavLink>
            </div>
            <div className={p.item}>
                <NavLink to="/dialogs" activeClassName={p.activeLink}>Messages</NavLink>
            </div>
            <div className={p.item}>
                <NavLink to="/news" activeClassName={p.activeLink}>News</NavLink>
            </div>
            <div className={p.item}>
                <NavLink to="/music" activeClassName={p.activeLink}> Music</NavLink>
            </div>
            <div className={p.item}>
                <NavLink to="/settings" activeClassName={p.activeLink}>Settings</NavLink>
            </div>
        </nav>)
}

export default Navbar;