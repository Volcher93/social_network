import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Ben</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Nuke</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Greenleaf</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Adgarh</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Niko</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hello</div>
                <div className={s.dialog}>When will we go hiking?</div>
                <div className={s.dialog}>We will go to Naroch?</div>
            </div>
        </div>
    )
}

export default Dialogs;