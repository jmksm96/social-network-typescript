import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType, DialogsType, MessagesType} from "../../Typing/typing";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

type PropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
    dialogsPage: DialogPageType
    newMessageText: string
    isAuth: boolean
}

const  Dialogs: React.FC<PropsType> = (props) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let dialogsElementsRender = (d: DialogsType) => <DialogItem name={d.name} id={d.id} key={d.id}/>
    let messagesElementsRender = (m: MessagesType) => <Message message={m.message} id={m.id}/>

    const addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        if (newMessageElement.current) {
            props.updateNewMessageText(newMessageElement.current.value)
        }

    }

    if (!props.isAuth) {
        return <Redirect to = {'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(dialogsElementsRender)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(messagesElementsRender)}
            </div>
            <div>
                <textarea ref={newMessageElement}
                          onChange={onMessageChange}
                          value={props.newMessageText}
                />
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )

}

export default Dialogs