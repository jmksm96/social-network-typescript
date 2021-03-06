import React from "react";
import {DialogPageType} from "../../Typing/typing";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageAC, DialogsReducerActionsType} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/store";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";



type MapStatePropsType = {
    dialogsPage: DialogPageType;
    newMessageText: string

};


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch: (action: DialogsReducerActionsType) => void) => {
    return {
        addMessage: (newMessageText: string) => { dispatch(addMessageAC(newMessageText))}
    }
}

export default compose<React.ComponentType>
(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)

