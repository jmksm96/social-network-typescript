import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Typing/typing";


type PropsType = {
    profile: UserProfileType
    updateStatus: (status: string) => void
    status: string
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => void
}
const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile ={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;