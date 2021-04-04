import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {getAuthUserData} from "./auth-reducer";

export type appACType = {
    type: typeof INITIALIZATION_SUCCESS;

};

export type  AppReducerActionsType = appACType

type AppReducerThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppReducerActionsType>


const INITIALIZATION_SUCCESS = "INITIALIZATION_SUCCESS";

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: AppReducerActionsType): InitialStateType => {

    switch (action.type) {
        case INITIALIZATION_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state
    }
}

export const initializedSuccess = (): appACType => {
    return {
        type: INITIALIZATION_SUCCESS
    }
}


export const initializeApp = (): AppReducerThunkType => (dispatch:any) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer





