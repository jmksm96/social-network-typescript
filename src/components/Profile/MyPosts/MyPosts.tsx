import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type MessageType = {
    message: string,
    likesCount: number
}

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hey one', likesCount: 1},
        {id: 2, message: 'Message two', likesCount: 12},
        {id: 2, message: 'Message three', likesCount: 5},
        {id: 2, message: 'Message four', likesCount: 10},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount = {p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
           <h3> My posts</h3>
            <div>
                <div className='textArea'>
                    <textarea></textarea>
                </div>
                <div className='button'>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


