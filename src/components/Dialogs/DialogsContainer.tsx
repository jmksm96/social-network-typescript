import React from "react";
import {ActionsTypes, stateType} from "../../Typing/typing";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageAC, updateNewMessageTextAC } from "../../redux/dialogs-reducer";

let mapStateToProps = (state: stateType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
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