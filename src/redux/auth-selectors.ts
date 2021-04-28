import {AppStateType} from "./store";

export const selectIsAuth = (state: AppStateType) => {
    return state.auth.data.isAuth
}

export const selectCurrentUserLogin = (state: AppStateType) => {
    return state.auth.data.login
}
export const getUserId = (state: AppStateType) => {
    return state.auth.data.id
}

