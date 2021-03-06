import {UsersType} from "../Typing/typing";
import {UsersAPI} from "../api/api";


type FollowACType = {
    type: typeof FOLLOW;
    userId: number;
};
type UnFollowACType = {
    type: typeof UNFOLLOW;
    userId: number;
};
type SetUsersACType = {
    type: typeof SET_USERS;
    users: Array<UsersType>;
};
type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE;
    currentPage: number;
};
type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT;
    totalUsersCount: number;
};
type ToggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING;
    isFetching: boolean;
};
type ToggleFollowingProgressACType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
    followingInProgress: boolean;
    userId: number
};

export type UserReducerActionsType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | ToggleFollowingProgressACType

const FOLLOW: "FOLLOW" = "FOLLOW";
const UNFOLLOW: "UNFOLLOW" = "UNFOLLOW";
const SET_USERS: "SET-USERS" = "SET-USERS";
const SET_CURRENT_PAGE: "SET-CURRENT-PAGE" = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT: "SET-TOTAL-USERS-COUNT" = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING: "TOGGLE-IS-FETCHING" = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS: "TOGGLE_IS_FOLLOWING_PROGRESS" = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type UsersStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
    followingUsers: Array<number>
}

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
    followingUsers: []
}

const usersReducer = (state = initialState, action: UserReducerActionsType) => {
    switch (action.type) {
        case FOLLOW :
            debugger
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingUsers: action.followingInProgress
                    ? [...state.followingUsers, action.userId]
                    : state.followingUsers.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export const followSuccess = (userId: number): FollowACType => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowSuccess = (userId: number): UnFollowACType => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsers = (users: any): SetUsersACType => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}
export const toggleFollowingInProgress = (followingInProgress: boolean, userId: number): ToggleFollowingProgressACType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await UsersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        let apiMethod = UsersAPI.follow.bind(userId)
        let actionCreator = followSuccess
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        let apiMethod = UsersAPI.unfollow.bind(userId)
        let actionCreator = unfollowSuccess
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}


export default usersReducer





