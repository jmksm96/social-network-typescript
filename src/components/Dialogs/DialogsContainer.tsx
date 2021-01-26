import React from "react";
import {ActionsTypes, stateType, StoreType} from "../../Typing/typing";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/state";
import Dialogs from "./Dialogs";

type PropsType = {
    state: stateType
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const DialogsConatiner:React.FC<PropsType> = (props) => {

    let dialogsElements = props.state.dialogsPage.dialogs
    let messagesElements = props.state.dialogsPage.messages


    const addMessage = () => {
            props.dispatch(addMessageAC())

    }

    let onMessageChange = (text:string) => {
            props.dispatch(updateNewMessageTextAC(text))


    }

    return (
        <Dialogs addMessage={addMessage}
                 updateNewMessageText={onMessageChange}
                 dialogsElements={dialogsElements}
                 messagesElements={messagesElements}/>

    )
}


export default DialogsConatiner