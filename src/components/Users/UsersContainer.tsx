import React from 'react'
import { connect } from 'react-redux'
import {
    ActionsTypes, DialogPageType, ProfilePageType,
    UsersType, UsersTypeContainer,
} from "../../Typing/typing";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from './Users';

type PropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    usersPage: UsersTypeContainer
    totalUsersCount: number
}



let mapStateToProps = (state: PropsType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users)
