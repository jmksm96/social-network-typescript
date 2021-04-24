import styles from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";
import React from "react";
import {UsersType} from "../../Typing/typing";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";


type PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingInProgress: (followingInProgress: boolean, userId: number) => void
    users: Array<UsersType>
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingUsers: Array<number>
}


const Users = (props: PropsType) => {

    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   pageSize={props.pageSize} totalUsersCount={props.totalUsersCount}/>
        {
             props.users.map (u=> <User followingUsers={props.followingUsers}
                                        user={u}
                                        follow={props.follow}
                                        toggleFollowingInProgress={props.toggleFollowingInProgress}
                                        unfollow={props.unfollow}
                                        key={u.id}/>)
        }
    </div>
}
export default Users


