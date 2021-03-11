import React from "react";
import {DialogPageType} from "../../Typing/typing";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageAC, DialogsReducerActionsType, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/store";


type MapStatePropsType = {
    dialogsPage: DialogPageType;
    newMessageText: string
    isAuth: boolean
};

// type MapDispatchPropsType = {
//     updateNewMessageTextAC: (text: string) => void;
//     addMessage: () => void;
// };

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: (action: DialogsReducerActionsType) => void) => {
    return {
        updateNewMessageText: (text: string) => { dispatch(updateNewMessageTextAC(text))},
        addMessage: () => { dispatch(addMessageAC())}
    }
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer