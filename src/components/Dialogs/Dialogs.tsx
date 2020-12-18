import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'


export type DialogsType = {
    name: string
    id: string
}

export type MessageType = {
    message: string
}

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

const Message: React.FC<MessageType> = (props) => {
    return (
            <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Max' id='1'/>
                <DialogItem name='Slava' id='2'/>
                <DialogItem name='Dimon' id='3'/>
                <DialogItem name='Danila' id='4'/>
                <DialogItem name='Edik' id='5'/>
                <DialogItem name='Mark' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message = 'React'/>
                <Message message = 'Typescript'/>
                <Message message = 'Angular'/>
                <Message message = 'Node.js'/>
                <Message message = 'Javascript'/>
                <Message message = 'Vue.js'/>
            </div>
        </div>
    )
}

export default Dialogs