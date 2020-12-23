import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from "../../../redux/state";


const MyPosts: React.FC<ProfilePageType> = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div className='textArea'>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className='button'>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


