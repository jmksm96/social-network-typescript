import {addMessageAC, updateNewMessageTextAC} from "../redux/dialogs-reducer";
import {addPostAC, updateNewPostTextAC} from "../redux/profile-reducer";
import {followAC, setUsersAC, unfollowAC} from "../redux/users-reducer";
import * as url from "url";

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
    newMessageText: string
};

export type UsersTypeContainer = {
    users: Array<UsersType>
}

type UsersLocationType = {
    city: string,
    country: string
}

export type UsersType = {
    id: number
    photos: string
    name: string
    status: string
    location: UsersLocationType
    followed: boolean
}

export type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    usersPage: UsersTypeContainer
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
export type StoreType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}
