import React from 'react';
import s from './MyPosts.module.css';
import {PostsType, ProfilePageType} from "../../../Typing/typing";
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required } from '../../../utils/validators/validator';
import { Input } from '../../../common/forms-controls/FormsControls';


type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    profilePage: ProfilePageType
    newPostText: string
}

const MyPostsForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='textArea'>
                <Field component={Input}
                       name={'newPostText'}
                       placeholder={'Enter your post'}
                       validate={[required, maxLength10]}/>
                <div className='button'>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const MyPosts: React.FC<MyPostsPropsType> = React.memo((props: MyPostsPropsType) => {
    const myPostsRender = (p: PostsType) => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>

    let addNewPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <MyPostsReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {props.profilePage.posts.map(myPostsRender)}
            </div>
        </div>
    )
})

    const maxLength10 = maxLengthCreator(10)


const MyPostsReduxForm = reduxForm({form: 'myPostsAddPostForm'})(MyPostsForm)

export default MyPosts;


