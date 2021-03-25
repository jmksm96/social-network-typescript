import React from 'react';
import {  stateType} from '../../../Typing/typing';
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';
import {addPostAC, ProfileReducerActionsType} from '../../../redux/profile-reducer';

let mapStateToProps = (state: stateType) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ProfileReducerActionsType) => void) => {
    return {
        addPost: (newPostText: string) => { dispatch(addPostAC(newPostText))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


