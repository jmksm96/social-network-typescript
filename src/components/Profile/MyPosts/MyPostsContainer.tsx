import React from 'react';
import {ActionsTypes, stateType} from '../../../Typing/typing';
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';
import {addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';

let mapStateToProps = (state: stateType) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewPostText: (text: string) => { dispatch(updateNewPostTextAC(text))},
        addPost: () => { dispatch(addPostAC())}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


