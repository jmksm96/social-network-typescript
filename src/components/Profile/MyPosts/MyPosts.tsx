import React from 'react';
import s from './MyPosts.module.css';
import { PostsType} from "../../../Typing/typing";
import Post from "./Post/Post";



type MyPostsPropsType = {
    addPost: () => void
    updateNewPostText: (NewPostText: string) => void
    postsElements: Array<PostsType>
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const myPostsRender = (p: PostsType) =>  <Post message={p.message} likesCount={p.likesCount}/>
    let newPostElement = React.createRef<HTMLTextAreaElement>()

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
                {props.postsElements.map(myPostsRender)}
            </div>
        </div>
    )
}

export default MyPosts;


