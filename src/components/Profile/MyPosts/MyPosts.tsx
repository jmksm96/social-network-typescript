import React from 'react';
import {PostsType, StoreType} from '../../../Typing/typing';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    store: StoreType

}

const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.store.getState().profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.store.addPost(newPostElement.current.value)
        }
    }

    let onPostChange = () => {
        debugger
        if (newPostElement.current) {
            props.store.updateNewPostText(newPostElement.current.value)
        }

    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div className='textArea'>
                    <textarea onChange = {onPostChange}
                    ref={newPostElement}
                        value={props.store.getState().profilePage.newPostText} />
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


