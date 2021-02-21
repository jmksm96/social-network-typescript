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
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount:(totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

class Users extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 0; i <= pagesCount; i++) {
            pages.push(i)
        }

            return <div>
                <div>
                    {pages.map(p => {
                        return <span className={p === this.props.currentPage ? styles.selectedPage : ""}
                                     onClick={(e) => {
                                         this.onPageChanged(p)
                                     }}>{p}</span>
                    })
                    }

                </div>
                {
                    this.props.users.map(u => <div className={styles.users} key={u.id}>
                            <div><img className={styles.img} src={u.photos.small != null ? u.photos.small: userPhoto}/></div>
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