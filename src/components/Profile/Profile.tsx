import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import { StoreType} from '../../Typing/typing';


type PropsType = {

    store: StoreType

}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={props.store}/>
        </div>
    )
}

export default Profile;