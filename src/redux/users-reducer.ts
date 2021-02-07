import {ActionsTypes} from "../Typing/typing";


let initialState = {
    users: [
        {
            id: 1,
            photos: "https://www.knack.com/_images/live/users.png",
            followed: true,
            name: "Man1",
            status: 'Typescript',
            location: {city: "New-York", country: "USA"}
        },
        {
            id: 2,
            photos: "https://www.knack.com/_images/live/users.png",
            followed: false,
            name: "Man2",
            status: 'Redux',
            location: {city: "London", country: "United Kingdom"}
        },
        {
            id: 3,
            photos: "https://www.knack.com/_images/live/users.png",
            followed: true,
            name: "Man3",
            status: 'Javascript',
            location: {city: "Boston", country: "USA"}
        },
        {
            id: 4,
            photos: "https://www.knack.com/_images/live/users.png",
            followed: false,
            name: "Man4",
            status: 'NodeJS',
            location: {city: "San-Francisco", country: "USA"}
        },
    ]
}

const usersReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}

export const setUsersAC = (users: any) => {
    return {
        type: "SET_USERS",
        users
    } as const
}


export default usersReducer

