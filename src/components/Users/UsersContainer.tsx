import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {UsersType} from "../../Typing/typing";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";
import {compose} from 'redux';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {getCurrentPage, getFollowingProgress,
    getFollowingUsers,
    getIsFetching, getPageSize, getTotalUsersCount, getUsersSuper} from '../../redux/users-selectors';
import {AppStateType} from "../../redux/store";


let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state),
        followingUsers: getFollowingUsers(state)
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


// const UsersContainer:React.FC<PropsTypeContainer> = (props) => {
//     useEffect(() => {
//         props.getUsers(props.currentPage, props.pageSize)
//     })
//
//    const onPageChanged = (pageNumber: number) => {
//         props.getUsers(pageNumber, props.pageSize)
//     }
//     return (
//         <>
//                  {props.isFetching ? <Preloader/> : null}
//                  <Users onPageChanged={onPageChanged}
//                        follow={props.follow}
//                        unfollow={props.unfollow}
//                        currentPage={props.currentPage}
//                        pageSize={props.pageSize}
//                        totalUsersCount={props.totalUsersCount}
//                        users={props.users}
//                        toggleFollowingInProgress={props.toggleFollowingInProgress}
//                        followingUsers={props.followingUsers}
//                 />
//             </>
//     )
// }

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



export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingInProgress, getUsers: getUsersThunkCreator
    }),
)
(UsersContainer)


