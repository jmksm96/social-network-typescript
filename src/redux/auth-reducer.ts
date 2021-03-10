import {authAPI} from "../api/api";

export type authACType = {
    type: typeof SET_USER_DATA;
    data: UserDataType
};

type UserDataType = {
    id: number | null
    email: string
    login: string
}

export type UserReducerActionsType = authACType

const SET_USER_DATA = "SET_USER_DATA";


// export type AuthType = {
//     id: number | null
//     email: string
//     login: string
//     isAuth: boolean
// }

type InitialStateType = {
    data: UserDataType,
    isAuth: boolean
}

let initialState: InitialStateType = {
    data: {
        id: null,
        email: "",
        login: "",
    },
    isAuth: false,
}

const authReducer = (state = initialState, action: UserReducerActionsType): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        }

        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string): authACType => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login
        }
    }

}

export const getAuthUserData = () => (dispatch: any) =>{
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id,email,login}  = response.data.data
                dispatch(setAuthUserData(id, email, login))
                return id
            }
        });
}

export default authReducer





