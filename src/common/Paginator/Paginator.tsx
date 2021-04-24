import styles from "./Paginator.module.css"
import React from "react";


type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div >
        {pages.map(p => {
            return <span className={p === props.currentPage ? styles.selectedPage : ""}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
    </div>
}
export default Paginator