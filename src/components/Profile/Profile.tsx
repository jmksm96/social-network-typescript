import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost, updateNewPostText } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import { ProfilePageType } from '../../Typing/typing';

const Profile: React.FC<ProfilePageType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                addPost={addPost}
                newPostText={props.newPostText}
                updateNewPostText={updateNewPostText} />
        </div>
    )
}

export default Profile;