import {ActionsTypes, ProfilePageType} from "../Typing/typing";

let initialState = {
        posts: [
            {id: 1, message: "Message one", likesCount: 1},
            {id: 2, message: "Message two", likesCount: 12},
            {id: 3, message: "Message three", likesCount: 5},
            {id: 4, message: "Message four", likesCount: 10},
        ],
        newPostText: "",
    }


const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    if (action.type === "ADD-POST") {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newPostText;
    }
    return state
}


export default profileReducer