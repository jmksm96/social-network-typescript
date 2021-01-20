import {StoreType} from "../Typing/typing";


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
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    addPost(postMessage: string) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newPostText: string) {
        debugger
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}
export default store;

