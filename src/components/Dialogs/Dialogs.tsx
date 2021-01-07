import React from "react";
import { stateType } from "../../Typing/typing";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";



const Dialogs:React.FC<stateType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        let message = newMessageElement.current?.value
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
                <textarea ref ={newMessageElement}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )

}

export default Dialogs