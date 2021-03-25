import React from 'react';
import s from './MyPosts.module.css';
import {PostsType, ProfilePageType} from "../../../Typing/typing";
import Post from "./Post/Post";
import { Field } from 'redux-form';

type MyPostsPropsType = {
    addPost: () => void
    updateNewPostText: (NewPostText: string) => void
    profilePage: ProfilePageType
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const myPostsRender = (p: PostsType) => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div className='textArea'>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                               />
                </div>
                <div className='button'>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.profilePage.posts.map(myPostsRender)}
            </div>
        </div>
    )
}

const MyPostsReduxForm = () => {

}

export default MyPosts;


