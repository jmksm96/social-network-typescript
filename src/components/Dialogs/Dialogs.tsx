import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'


export type DialogsType = {
    name: string
    id: number
}

export type MessageType = {
    message: string
}


let dialogs = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Slava'},
    {id: 3, name: 'Dimon'},
    {id: 4, name: 'Danila'},
    {id: 5, name: 'Edik'},
    {id: 6, name: 'Mark'}
]

let messages = [
    {id: 1, message: 'React'},
    {id: 2, message: 'Typescript'},
    {id: 3, message: 'Angular'},
    {id: 4, message: 'Node.js'},
    {id: 5, message: 'Javascript'},
    {id: 6, message: 'Vue.js'},

]

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

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )

}

export default Dialogs