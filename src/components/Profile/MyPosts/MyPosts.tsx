import React from 'react';
import { StoreType, ActionsTypes} from '../../../Typing/typing';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostAC, updateNewPostTextAC} from "../../../redux/state";

type MyPostsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void

}

const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.store.getState().profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC(newPostElement.current.value))
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch(updateNewPostTextAC(newPostElement.current.value))
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


