
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
    profile: UserProfileType
    defaultUserId: string;
    status: string
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
    followingInProgress: boolean
    followingUsers: Array<number>
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
}

export type UserProfileType = {
    aboutMe: string;
    contacts: {
        facebook: string;
        website: string | null;
        vk: string;
        twitter: string;
        instagram: string;
        youtube: string | null;
        github: string;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    status: string
    photos: {
        small: string;
        large: string;
    };
}