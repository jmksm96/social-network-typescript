import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://image.flaticon.com/icons/png/512/64/64572.png' />

      post 1
          <div>
        <span>like</span>
      </div>
    </div>
  )

}

export default Post;