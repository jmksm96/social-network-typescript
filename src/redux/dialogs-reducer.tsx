import {ActionsTypes, DialogPageType, MessagesType, stateType} from "../Typing/typing";

export type DialogsReducerType = {
    state: stateType
    action: ActionsTypes
    messages: Array<MessagesType>
    newMessageText: string
    type: string
}

const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
    if (action.type === "ADD-MESSAGE") {
        let newMessage = {
            id: 6,
            message: action.newMessageText
        };
        state.messages.push(newMessage)
        state.newMessageText = '';
    } else if (action.type === "UPDATE-NEW-MESSAGE") {
        state.newMessageText = action.newMessageText
    }

    return state
}

export default dialogsReducer