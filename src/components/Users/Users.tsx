import React from 'react'
import styles from './users.module.css'
import { UsersType} from "../../Typing/typing";

type PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    users: UsersType
}

let Users = (props: PropsType) => {

    if (props.users.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://www.knack.com/_images/live/users.png",
                followed: true,
                fullName: "Man1",
                status: 'Typescript',
                location: {city: "New-York", country: "USA"}
            },
            {
                id: 2,
                photoUrl: "https://www.knack.com/_images/live/users.png",
                followed: false,
                fullName: "Man2",
                status: 'Redux',
                location: {city: "London", country: "United Kingdom"}
            },
            {
                id: 3,
                photoUrl: "https://www.knack.com/_images/live/users.png",
                followed: true,
                fullName: "Man3",
                status: 'Javascript',
                location: {city: "Boston", country: "USA"}
            },
            {
                id: 4,
                photoUrl: "https://www.knack.com/_images/live/users.png",
                followed: false,
                fullName: "Man4",
                status: 'NodeJS',
                location: {city: "San-Francisco", country: "USA"}
            },
        ])
    }



    return <div>
        {
            props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                (props.follow(u.id))
                            }}>Follow</button>
                            : <button onClick={() => {
                                (props.unfollow(u.id))
                            }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users
