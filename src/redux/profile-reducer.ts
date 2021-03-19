import {ProfilePageType, UserProfileType} from "../Typing/typing";
import {ProfileAPI, UsersAPI} from "../api/api";

//START TYPE

type AddPostActionType = {
    type: typeof ADD_POST
}

type UpdateNewPostActionType = {
    type: typeof UPDATE_NEW_POST_TEXT;
    newPostText: string;
};
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE;
    profile: UserProfileType;
};
type SetStatusProfileType = {
    type: typeof SET_STATUS;
    status: string;
};

//END
export type ProfileReducerActionsType =
    AddPostActionType
    | UpdateNewPostActionType
    | SetUserProfileType
    | SetStatusProfileType;

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Message one", likesCount: 1},
        {id: 2, message: "Message two", likesCount: 12},
        {id: 3, message: "Message three", likesCount: 5},
        {id: 4, message: "Message four", likesCount: 10},
    ],
    newPostText: "",
    profile: {} as UserProfileType,
    defaultUserId: "2",
    status: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
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
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newPostText,}

        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_STATUS: {
            return {...state, status: action.status}
        }

        default:
            return state
    }
}
export const addPostAC = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextAC = (NewPostText: string): UpdateNewPostActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: NewPostText
    }
}

export const setUserProfile = (profile: UserProfileType): SetUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setStatus = (status: string): SetStatusProfileType => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getUserProfile = (userId: number) => (dispatch: any) => {
    UsersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getStatus = (userId: number) => (dispatch: any) => {
    ProfileAPI.getProfile(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status: string) => (dispatch: any) => {
    ProfileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
}
// export const profileThunk = (userId: number) => {
//     return (dispatch: any) => {
//         UsersAPI.profile(userId)
//             .then(response => {
//                 dispatch(setUserProfile(response.data))
//             })
//     }
// }


export default profileReducer




