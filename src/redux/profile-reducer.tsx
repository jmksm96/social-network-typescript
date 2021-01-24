import {ActionsTypes, MessagesType, PostsType, ProfilePageType, stateType} from "../Typing/typing";

export type ProfileReducerType = {
    state: stateType
    action: ActionsTypes
    messages: Array<MessagesType>
    posts: Array<PostsType>


}

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    if (action.type === "ADD-POST") {
        let newPost = {
            id: 5,
            message: action.newPostText,
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