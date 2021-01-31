import React from 'react';
import {ActionsTypes, stateType} from '../../../Typing/typing';
import {addPostAC, updateNewPostTextAC} from "../../../redux/state";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

let mapStateToProps = (state: stateType) => {
    return {
        profilePage: state.profilePage
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


