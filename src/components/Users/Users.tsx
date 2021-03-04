import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.png";
import React from "react";
import {UsersType} from "../../Typing/typing";
import { NavLink } from "react-router-dom";


type PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UsersType>
    onPageChanged:(pageNumber: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const Users = (props:PropsType ) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

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
                        <NavLink to ={'/profile/' + u.id}>
                        <img className={styles.img} src={u.photos.small != null ? u.photos.small: userPhoto}/>
                        </NavLink>
                    </div>
                    <div>Name: {u.name}</div>
                    <div>Status: {u.status}</div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
            )
        }
    </div>
}
export default Users