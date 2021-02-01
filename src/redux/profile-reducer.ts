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

    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newPostText,
            }
        }
        default:
            return state
    }
}
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

export default profileReducer