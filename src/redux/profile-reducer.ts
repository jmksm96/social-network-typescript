import {PhotosType, ProfilePageType, UserProfileType} from "../Typing/typing";
import {ProfileAPI, UsersAPI} from "../api/api";
import {AppStateType} from "./store";
import {stopSubmit} from "redux-form";


//START TYPE

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE;
    profile: UserProfileType;
};

type DeletePostType = {
    type: typeof DELETE_POST
    postId: number;

};

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: any; /*поправить типизацию*/

};
type SetStatusProfileType = {
    type: typeof SET_STATUS;
    status: string;
};

//END
export type ProfileReducerActionsType =
    AddPostActionType
    | SetUserProfileType
    | SetStatusProfileType
    | DeletePostType
    | SavePhotoSuccessType

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Message one", likesCount: 1},
        {id: 2, message: "Message two", likesCount: 12},
        {id: 3, message: "Message three", likesCount: 5},
        {id: 4, message: "Message four", likesCount: 10},
    ],
    newPostText: "",
    profile: {} as UserProfileType,
    defaultUserId: 12063,
    status: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_STATUS: {
            return {...state, status: action.status}
        }

        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }

        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }

        default:
            return state
    }
}
export const addPostAC = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        newPostText
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

export const deletePostAC = (postId: number): DeletePostType => {
    return {
        type: DELETE_POST,
        postId
    }
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await UsersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await ProfileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: any) => {
    let response = await ProfileAPI.savePhoto(file)

    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}



export const saveProfile = (profile: UserProfileType) => async (dispatch: any, getState: any) => {

   const userId = getState().auth.userId

    const response = await ProfileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
       dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
    }
}


export default profileReducer




