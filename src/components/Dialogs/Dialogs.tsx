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

    let dialogsData = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Slava'},
        {id: 3, name: 'Dimon'},
        {id: 4, name: 'Danila'},
        {id: 5, name: 'Edik'},
        {id: 6, name: 'Mark'}
    ]

    let messageData = [
        {id: 1, message: 'React'},
        {id: 2, message: 'Typescript'},
        {id: 3, message: 'Angular'},
        {id: 4, message: 'Node.js'},
        {id: 5, message: 'Javascript'},
        {id: 6, message: 'Vue.js'},

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>

            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
            </div>
        </div>
    )
}

export default Dialogs