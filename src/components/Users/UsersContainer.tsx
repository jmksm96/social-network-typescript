import React from 'react'
import {connect} from 'react-redux'
import {
    DialogPageType, ProfilePageType,
    UsersType, UsersTypeContainer,
} from "../../Typing/typing";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";


type PropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    usersPage: UsersTypeContainer
}

let mapStateToProps = (state: PropsType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        followingUsers: state.usersPage.followingUsers
    }
}

type PropsTypeContainer = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UsersType>
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingInProgress: (followingInProgress: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followingUsers: Array<number>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

class UsersContainer extends React.Component<PropsTypeContainer> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingUsers={this.props.followingUsers}
            />
        </>
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingInProgress, getUsers: getUsersThunkCreator
})(UsersContainer)




