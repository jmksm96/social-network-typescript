import {ActionsTypes, DialogPageType} from "../Typing/typing";

let initialState = {
    dialogs: [
        {id: 1, name: "Max"},
        {id: 2, name: "Slava"},
        {id: 3, name: "Dimon"},
        {id: 4, name: "Danila"},
        {id: 5, name: "Edik"},
        {id: 6, name: "Mark"},
    ],
    messages: [
        {id: 1, message: "React"},
        {id: 2, message: "Typescript"},
        {id: 3, message: "Angular"},
        {id: 4, message: "Node.js"},
        {id: 5, message: "Javascript"},
        {id: 6, message: "Vue.js"},
    ],
    newMessageText: "",
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 6, message: newMessage}]
            };
        }
        case "UPDATE-NEW-MESSAGE": {
            return  {
                ...state,
               newMessageText: action.newMessageText
            }
        }
        default:
            return state
    }
}


export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const updateNewMessageTextAC = (NewMessageText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE",
        newMessageText: NewMessageText
    } as const
}

export default dialogsReducer