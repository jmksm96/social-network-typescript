import React from 'react'
import styles from './users.module.css'
import { UsersType} from "../../Typing/typing";


type PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UsersType>
}

let Users = (props: PropsType) => {

    return <div>
        {
           props.users.map(u => <div className={styles.users}  key={u.id}>
              <div><img className={styles.img} src = {u.photos}/></div>
               <div>Name: {u.name}</div>
               <div>Status: {u.status}</div>
               <div>
                   <button
                   onClick={() => (u.followed ? props.unfollow(u.id) : props.follow(u.id))}>{u.followed ? 'UnFollowed' : 'Followed'}</button>
               </div>
            </div>)
        }
    </div>
}

export default Users
