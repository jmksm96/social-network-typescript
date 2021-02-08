import React from 'react'
import styles from './users.module.css'
import {UsersType} from "../../Typing/typing";
import axios from "axios";
import userPhoto from '../../assets/images/users.png'

type PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UsersType>
    setUsers: (users: Array<UsersType>) => void
}

class Users extends React.Component<PropsType> {


    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log(response.data.items)
            });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div className={styles.users} key={u.id}>
                        <div><img className={styles.img} src={u.photos.small !=null ? u.photos : userPhoto}/></div>
                        <div>Name: {u.name}</div>
                        <div>Status: {u.status}</div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                )
            }
        </div>
    }
}

export default Users