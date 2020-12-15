import React from 'react';
import { MessageType } from '../MyPosts';
import s from './Post.module.css';

const Post: React.FC<MessageType> = (props) => {
  return (
    <div className={s.item}>
      <img src='https://image.flaticon.com/icons/png/512/64/64572.png' />
        {props.message}
          <div>
        <span>like</span>
      </div>
    </div>
  )

}

export default Post;