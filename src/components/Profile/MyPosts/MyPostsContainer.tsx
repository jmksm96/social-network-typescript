import React from 'react';
import { StoreType, ActionsTypes} from '../../../Typing/typing';
import {addPostAC, updateNewPostTextAC} from "../../../redux/state";
import MyPosts from "./MyPosts";

type MyPostsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void

}

const MyPostsContainer: React.FC<MyPostsType> = (props) => {

    let postsElements = props.store.getState().profilePage.posts


    let addPost = () => {
            props.dispatch(addPostAC())
    }

    let onPostChange = (text: string) => {
            props.dispatch(updateNewPostTextAC(text))

    }

    return (
            <MyPosts postsElements = {postsElements}
                     addPost = {addPost}
                     updateNewPostText = {onPostChange}

            />
    )
}

export default MyPostsContainer;


