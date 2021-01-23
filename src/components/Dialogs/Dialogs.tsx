import React from "react";
import {ActionsTypes, stateType, StoreType} from "../../Typing/typing";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/state";

type PropsType = {
    state: stateType
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs:React.FC<PropsType> = (props) => {

    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()


    const addMessage = () => {
        if (newMessageElement.current) {
            props.dispatch(addMessageAC(newMessageElement.current.value))
        }
    }

    let onMessageChange = () => {
        debugger
        if (newMessageElement.current) {
            props.dispatch(updateNewMessageTextAC(newMessageElement.current.value))
        }

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
                <textarea ref ={newMessageElement}
                onChange={onMessageChange}
                value = {props.store.getState().dialogsPage.newMessageText}/>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )

}

export default Dialogs