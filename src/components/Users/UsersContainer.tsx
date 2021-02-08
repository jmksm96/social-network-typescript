import React from 'react'
import { connect } from 'react-redux'
import {ActionsTypes, stateType, UsersType} from "../../Typing/typing";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from './Users';




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
