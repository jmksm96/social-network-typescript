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
        case "UPDATE-NEW-MESSAGE":
            state.newMessageText = action.newMessageText
            return state

        case "ADD-MESSAGE":
            let newMessage = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, message: newMessage})
            return state
        default:
            return state
    }


    // if (action.type === "ADD-MESSAGE") {
    //     let newMessage = {
    //         id: 6,
    //         message: action.newMessageText
    //     };
    //     state.messages.push(newMessage)
    //     state.newMessageText = '';
    // } else if (action.type === "UPDATE-NEW-MESSAGE") {
    //     state.newMessageText = action.newMessageText
    // }
    //
    // return state
}

export default dialogsReducer