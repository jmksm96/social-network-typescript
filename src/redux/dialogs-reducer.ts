import {DialogPageType} from "../Typing/typing";

//START TYPE

type AddMessageType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}


export type DialogsReducerActionsType = AddMessageType

//END TYPE
const ADD_MESSAGE = "ADD-MESSAGE";


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

const dialogsReducer = (state: DialogPageType = initialState, action: DialogsReducerActionsType):DialogPageType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = action.newMessageText
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 6, message: newMessage}]
            };
        }
        default:
            return state
    }
}


export const addMessageAC = (newMessageText: string): AddMessageType => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
}

export default dialogsReducer