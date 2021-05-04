import React, {useEffect} from 'react'
import Profile from "./Profile";
import {UserProfileType} from "../../Typing/typing";
import {RouteComponentProps} from 'react-router-dom';


type PropsTypeProfile = {
    profile: UserProfileType
    defaultUserId: number;
    authorizedUID: number
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => void
    status: string
}

type RouteType = {
    userId: string;
};


const ProfileContainer: React.FC<PropsTypeProfile & RouteComponentProps<RouteType>> = (props) => {
    let userId = Number((props.match.params).userId);
    if (!userId) {
        userId = props.defaultUserId
        if (!userId) {
            props.history.push('/login/')
        }
    }

    useEffect(() => {
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])



    return (
        <div>
            <Profile {...props}
                     isOwner={!props.match.params.userId}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     savePhoto = {props.savePhoto}
                     saveProfile={props.saveProfile}/>
        </div>
    )
}



export default ProfileContainer
