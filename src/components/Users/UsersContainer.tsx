import React from 'react'
import { connect } from 'react-redux'
import {
    ActionsTypes, DialogPageType, ProfilePageType,
    UsersType, UsersTypeContainer,
} from "../../Typing/typing";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";

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


type PropsTypeContainer = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UsersType>
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

class UsersContainer extends React.Component<PropsTypeContainer> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {


        return <Users onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      users={this.props.users}
        />

    }
}




export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer)
