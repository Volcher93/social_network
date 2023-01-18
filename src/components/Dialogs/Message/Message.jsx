import React from "react";
import s from './../Dialogs.module.css'


function Message(props) {
    return (
        <div className={s.messageItem}>{props.message}</div>
    )
}

export default Message;