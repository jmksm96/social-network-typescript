import React from 'react';
import { PostsType } from '../../../Typing/typing';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    posts: Array<PostsType>;
    addPost: (postMessage: string ) => void

}

const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div className='textArea'>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className='button'>
                    <button onClick={() => addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


