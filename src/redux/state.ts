import {StoreType} from "../Typing/typing";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostTextAC = (NewPostText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: NewPostText
    } as const
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


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Message one", likesCount: 1},
                {id: 2, message: "Message two", likesCount: 12},
                {id: 3, message: "Message three", likesCount: 5},
                {id: 4, message: "Message four", likesCount: 10},
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
        console.log('state is changed');
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }

}
export default store;

