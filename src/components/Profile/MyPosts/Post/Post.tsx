import React from 'react';
import s from './Post.module.css';

export type Type = {
    likesCount: number
    message: string
}

const Post: React.FC<Type> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://image.flaticon.com/icons/png/512/64/64572.png'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )

}

export default Post;