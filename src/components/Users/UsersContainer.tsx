import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {ActionsTypes, stateType} from "../../Typing/typing";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


let mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage
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
        setUsers: (userId: number) => {
            dispatch(setUsersAC(userId))
        },

    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users)
