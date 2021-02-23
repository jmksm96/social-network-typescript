import {addMessageAC, updateNewMessageTextAC} from "../redux/dialogs-reducer";
import {addPostAC, updateNewPostTextAC} from "../redux/profile-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,

} from "../redux/users-reducer";

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
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}

type UsersLocationType = {
    city: string,
    country: string
}


export type UsersType = {
    name: string
    id: number
    photos: {
    small: string | undefined
    large: string | undefined
}
    status: string
    location: UsersLocationType
    followed: boolean
}

export type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    usersPage: UsersTypeContainer
    totalUsersCount: number
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof follow> | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching>
export type StoreType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}
