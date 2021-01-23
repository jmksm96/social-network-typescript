import {addPostAC, updateNewPostTextAC} from "../redux/state";

export type MessagesType = {
    id: number
    message: string
};
export type DialogsType = {
    id: number
    name: string
};
export type PostsType = {
    id: number;
    message: string
    likesCount: number
};
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
};
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
};
// export type RootStateType = {
//   rootType: stateType
//   addPost: (postMessage: string) => void
//   updateNewPostText: (newPostText: string ) => void
// };
export type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
// export type AddPostActionType = {
//     type: "ADD-POST"
//     newPostText: string
// }
// export type UpdateNewPostTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT"
//     newPostText: string
// }

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
export type StoreType = {
    _state: stateType
    // updateNewPostText: (newPostText: string) => void
    // addPost: (postMessage: string) => void
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}
