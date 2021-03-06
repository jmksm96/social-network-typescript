import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import { DialogsType } from "../../../Typing/typing";


const DialogItem: React.FC<DialogsType> = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem