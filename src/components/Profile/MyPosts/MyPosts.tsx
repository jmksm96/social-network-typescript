import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type MessageType = {
    message: string
}

const MyPosts = () => {
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
                <Post message='Hey one'/>
                <Post message='Message two'/>
            </div>
        </div>
    )
}

export default MyPosts;