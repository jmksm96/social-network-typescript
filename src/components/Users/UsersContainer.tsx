import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {ActionsTypes, stateType } from "../../Typing/typing";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import axios from "axios";


axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    console.log(response.data.items)
})


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
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users)
