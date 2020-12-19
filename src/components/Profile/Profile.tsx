import React from 'react'
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';

const Profile:React.FC<ProfilePageType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}/>
        </div>
    )
}

export default Profile;