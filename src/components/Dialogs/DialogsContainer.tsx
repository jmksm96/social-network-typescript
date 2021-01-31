import React from "react";
import {ActionsTypes, stateType} from "../../Typing/typing";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// type PropsType = {
//     state: stateType
//     store: StoreType
//     dispatch: (action: ActionsTypes) => void
// }


// const DialogsConatiner: React.FC<PropsType> = (props) => {
//
//
//     let dialogsElements = props.state.dialogsPage.dialogs
//     let messagesElements = props.state.dialogsPage.messages
//
//     let addMessage = () => {
//         props.store.dispatch(addMessageAC())
//     }
//
//     let onMessageChange = (text: string) => {
//         props.dispatch(updateNewMessageTextAC(text))
//     }
//
//     return (
//         <Dialogs addMessage={addMessage}
//                  updateNewMessageText={onMessageChange}
//                  dialogsElements={dialogsElements}
//                  messagesElements={messagesElements}/>
//
//     )
// }


let mapStateToProps = (state: stateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageText: (text: string) => { dispatch(updateNewMessageTextAC(text))},
        addMessage: () => { dispatch(addMessageAC())}
    }
}



const DialogsConatiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsConatiner