import styles from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";
import React from "react";
import {UsersType} from "../../Typing/typing";
import {NavLink} from "react-router-dom";


type PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingInProgress: (followingInProgress: boolean, userId: number) => void
    followingUsers: Array<number>
    user: UsersType
}

const User = (props: PropsType) => {

    let user = props.user

    return <div>
        <div className={styles.users}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={styles.img} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div>Name: {user.name}</div>
            <div>Status: {user.status}</div>
            <div>
                {user.followed
                    ? <button disabled={props.followingUsers.some(id => id === user.id)} onClick={() => {
                        props.unfollow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={props.followingUsers.some(id => id === user.id)} onClick={() => {
                        props.follow(user.id)
                    }}>Follow</button>}

            </div>
        </div>

    </div>
}
export default User