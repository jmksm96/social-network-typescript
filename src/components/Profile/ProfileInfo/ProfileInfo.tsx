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
    savePhoto: (file: string) => void

}
const ProfileInfo = React.memo ((props:PropsType ) => {
    console.log('rendered')
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e:any) => {   /* поправить типизацию*/
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img src='https://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg'/>
            </div>
            <div className={s.descriptionBlock }>
                <img src={props.profile.photos ? props.profile.photos.large : profilePhoto } className={s.profilePhoto} onChange={onMainPhotoSelected}/> <br/>
                {props.isOwner && <input type="file"/>}
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