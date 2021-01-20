import React from 'react';
import {AddPostActionType, PostsType, StoreType, UpdateNewPostTextActionType} from '../../../Typing/typing';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    store: StoreType
    dispatch: (action: AddPostActionType| UpdateNewPostTextActionType) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.store.getState().profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {

        if (newPostElement.current) {
            props.dispatch({type:"ADD-POST", newPostText: newPostElement.current.value })
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch({type:"UPDATE-NEW-POST-TEXT", newPostText: newPostElement.current?.value})
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


