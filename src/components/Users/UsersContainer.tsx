import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {ActionsTypes, stateType, UsersType, UsersTypeContainer,} from "../../Typing/typing";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";




let mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users)
