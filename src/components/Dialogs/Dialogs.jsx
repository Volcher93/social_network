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

    let dialogs = [
        {id: 1, name: 'Ben'},
        {id: 2, name: 'Nuke'},
        {id: 3, name: 'Adgarh'},
        {id: 4, name: 'Niko'},
        {id: 5, name: 'Greenleaf'},
        {id: 6, name: 'Frost'}
    ];
    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'When will we go hiking?'},
        {id: 3, message: 'We will go to Naroch?'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;