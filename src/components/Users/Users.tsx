import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.png";
import React from "react";
import {UsersType} from "../../Typing/typing";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {UsersAPI} from "../../api/api";


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

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={p === props.currentPage ? styles.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })
            }

        </div>
        {
            props.users.map(u => <div className={styles.users} key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={styles.img} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>Name: {u.name}</div>
                    <div>Status: {u.status}</div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingUsers.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                //     withCredentials: true,
                                //     headers:
                                //         {
                                //             "API-KEY": "7c107b4d-cd0a-4372-844b-6a20a61a6e27"
                                //         }
                                // })
                                //     .then(response => {
                                //         if (response.data.resultCode === 0) {
                                //             props.unfollow(u.id)
                                //         }
                                //     });

                            }}>Unfollow</button>
                            : <button disabled={props.followingUsers.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                //     withCredentials: true,
                                //     headers:
                                //         {
                                //             "API-KEY": "7c107b4d-cd0a-4372-844b-6a20a61a6e27"
                                //         }
                                // })
                                //     .then(response => {
                                //        if (response.data.resultCode === 0) {
                                //            props.follow(u.id)
                                //        }
                                //     });
                            }}>Follow</button>}

                    </div>
                </div>
            )
        }
    </div>
}
export default Users