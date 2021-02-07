import React from 'react'
import styles from './users.module.css'
import {UsersType, UsersTypeContainer} from "../../Typing/typing";
import axios from "axios";


type PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UsersType>
    setUsers: (users: Array<UsersType>) => void
}

let Users = (props: PropsType) => {
    let getUsers = () =>
    {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }


    return (<div>
            <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div className={styles.users} key={u.id}>
                    <div><img className={styles.img} src={u.photos}/></div>
                    <div>Name: {u.name}</div>
                    <div>Status: {u.status}</div>
                    <div>
                        <button
                            onClick={() => (u.followed ? props.unfollow(u.id) : props.follow(u.id))}>{u.followed ? 'UnFollowed' : 'Followed'}</button>
                    </div>
                </div>
            )
        }
    </div>
    )
}

export default Users
