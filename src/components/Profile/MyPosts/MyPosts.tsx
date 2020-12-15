import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type MessageType = {
    message: string
}


const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message = 'Hey one'/>
        <Post message = 'Message two'/>
      </div>
    </div>
  )

}

export default MyPosts;