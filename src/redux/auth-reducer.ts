import {ThunkAction} from "redux-thunk";
import {authAPI} from "../api/api";
import {AppStateType} from "./store";
import {stopSubmit} from "redux-form";

export type authACType = {
    type: typeof SET_USER_DATA;
    data: UserDataType
};

type UserDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type UserReducerActionsType = authACType

type AuthReducerThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, UserReducerActionsType>


const SET_USER_DATA = "SET_USER_DATA";

type InitialStateType = {
    data: UserDataType
}

let initialState: InitialStateType = {
    data: {
        email: null,
        login: null,
        isAuth: false,
        id: null
    }
}

const authReducer = (state = initialState, action: UserReducerActionsType): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                data: {...action.data}
            }
        }

        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): authACType => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login, isAuth}
    }
}


export const getAuthUserData = (): AuthReducerThunkType => (dispatch ) => {
   return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email: string, password: any, rememberMe: boolean) : AuthReducerThunkType => (dispatch:any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
               let message = response.data.messages.length > 0 ? response.data.messages[0]: "Some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
        });
}


export const logout = ():AuthReducerThunkType => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer





