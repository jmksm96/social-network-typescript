import React from 'react'
import { UserProfileType } from '../../../Typing/typing'
import s from './PorifleInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./PofileStatus";
import profilePhoto from '../../../assets/images/userPhoto.png'



type PropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void

}
const ProfileInfo = React.memo ((props:PropsType ) => {
    // console.log(props.profile.photos.large)
    if (!props.profile) {
        return <Preloader/>
    }

     const onMainPhotoSelected= (e:any) => {   /* поправить типизацию*/
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock }>
                <img src={ props.profile.photos && props.profile.photos.large ? props.profile.photos.large : profilePhoto } className={s.profilePhoto} /> <br/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <ul style={{ listStyleType: "none", paddingLeft: '0px', marginLeft: '0px' }}>
                    <li> {props.profile.fullName} </li>
                    <li> {props.profile.aboutMe}</li>
                    <li> {props.profile.lookingForAJob ? "Yes" : "No"}</li>
                </ul>
                <div>
                    Contacts:
                    {props.profile.contacts && Object.entries(props.profile.contacts).map(value => {
                        return value[1] && <div><a href={value[1]}>{value[0]}</a></div>
                    })}
                </div>
            </div>
        </div>
    )
})

export default ProfileInfo;