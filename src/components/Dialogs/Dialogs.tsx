import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../Typing/typing";
import Message from "./Message/Message";

type PropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
    dialogsElements: Array<DialogsType>
    messagesElements: Array<MessagesType>
}

const Dialogs: React.FC<PropsType> = (props) => {


    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let dialogsElementsRender = (d: DialogsType) => <DialogItem name={d.name} id={d.id}/>
    let messagesElementsRender = (m: MessagesType) => <Message message={m.message} id={m.id}/>

    const addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        if(newMessageElement.current) {
            props.updateNewMessageText(newMessageElement.current.value)
        }

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsElements.map(dialogsElementsRender)}
            </div>
            <div className={s.messages}>
                {props.messagesElements.map(messagesElementsRender)}
            </div>
            <div>
                <textarea ref={newMessageElement}
                          onChange={onMessageChange}
                          // value={props.store.getState().dialogsPage.newMessageText}
                />
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )

}

export default Dialogs