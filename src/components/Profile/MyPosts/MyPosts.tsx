import React from 'react';
import s from './MyPosts.module.css';
import {PostsType, ProfilePageType} from "../../../Typing/typing";
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    profilePage: ProfilePageType
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const myPostsRender = (p: PostsType) => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    let addNewPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <MyPostsReduxForm onSubmit = {addNewPost }/>
            <div className={s.posts}>
                {props.profilePage.posts.map(myPostsRender)}
            </div>
        </div>
    )
}

const MyPostsForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='textArea'>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your post'}/>
            </div>
            <div className='button'>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'myPostsAddPostForm'})(MyPostsForm)

export default MyPosts;


