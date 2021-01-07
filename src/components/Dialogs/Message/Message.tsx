import React from "react";
import { MessagesType } from "../../../Typing/typing";
import s from "../Dialogs.module.css";


const Message: React.FC<MessagesType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message