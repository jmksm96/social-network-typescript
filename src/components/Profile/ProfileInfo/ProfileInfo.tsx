import React, {useState} from 'react'
import {UserProfileType} from '../../../Typing/typing'
import s from './PorifleInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./PofileStatus";
import profilePhoto from '../../../assets/images/userPhoto.png'
import {Button} from 'antd';
import ProfileDataForm from './ProfileDataForm';


type PropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void

}
const ProfileInfo = React.memo((props: PropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {   /* поправить типизацию*/
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos && props.profile.photos.large ? props.profile.photos.large : profilePhoto}
                    className={s.profilePhoto}/> <br/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataForm /> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
                <div> Status: <ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
                {/*<ProfileData profile = {props.profile} />*/}
            </div>
        </div>
    )
})

type ProfileDataT = {
    profile: UserProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = (props: ProfileDataT) => {
    return <div>

        {props.isOwner && <div><Button type="primary" onClick={props.goToEditMode}>Edit</Button></div>}

        <ul style={{listStyleType: "none", paddingLeft: '0px', marginLeft: '0px'}}>
            <li> Name: {props.profile.fullName} </li>
            <li> About Me: {props.profile.aboutMe}</li>
            <li>Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}</li>
        </ul>
        <div>
            Contacts:
            {props.profile.contacts && Object.entries(props.profile.contacts).map(value => {
                return value[1] && <div><a href={value[1]}>{value[0]}</a></div>
            })}
        </div>
    </div>
}


export default ProfileInfo;



