import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import {ActionsTypes, StoreType} from '../../Typing/typing';



type PropsType = {
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={props.store}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;