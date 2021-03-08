import React from 'react'
import {connect} from 'react-redux'
import {
    DialogPageType, ProfilePageType,
    UsersType, UsersTypeContainer,
} from "../../Typing/typing";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";
import {UsersAPI} from "../../api/api";

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
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (followingInProgress: boolean, userId: number) => void
    followingUsers: Array<number>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

class UsersContainer extends React.Component<PropsTypeContainer> {

    componentDidMount() {
        this.props.toggleIsFetching(true)


        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false)
            });
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
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
})(UsersContainer)


