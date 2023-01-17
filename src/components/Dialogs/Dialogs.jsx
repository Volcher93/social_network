import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import p from "../Navbar/Navbar.module.css";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={s.messageItem}>{props.message}</div>
    )
}

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Ben' id='1'/>
                {/*<div className={s.dialog + ' ' + s.active}>*/}
                {/*    <NavLink to="/dialogs/1">Ben</NavLink>*/}
                {/*</div>*/}
                <DialogItem name='Nuke' id='2'/>
                <DialogItem name='Adgarh' id='3'/>
                <DialogItem name='Niko' id='4'/>
                <DialogItem name='Greenleaf' id='5'/>
                <DialogItem name='Frost' id='6'/>

            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="When will we go hiking?"/>
                <Message message="We will go to Naroch"/>

            </div>
        </div>
    )
}

export default Dialogs;