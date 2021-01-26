import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ActionsTypes, StoreType} from '../../Typing/typing';
import MyPostsContainer from "./MyPosts/MyPostsContainer";



type PropsType = {
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                     dispatch={props.dispatch}/>

                     {/*<MyPosts store={props.store}*/}
                     {/*dispatch={props.dispatch}/>*/}
        </div>
    )
}

export default Profile;