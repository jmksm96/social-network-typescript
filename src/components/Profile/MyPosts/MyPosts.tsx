import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type MessageType = {
    message: string,
    likesCount: number
}

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hey one', likesCount: 1},
        {id: 2, message: 'Message two', likesCount: 12},
    ]
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
                <Post message={postsData[0].message} likesCount = {postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount = {postsData[0].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;