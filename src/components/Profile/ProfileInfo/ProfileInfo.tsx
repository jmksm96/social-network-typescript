import React, {useState} from 'react'
import {UserProfileType} from '../../../Typing/typing'
import s from './PorifleInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from "./PofileStatus";
import profilePhoto from '../../../assets/images/userPhoto.png'
import {ProfileDataFormReduxForm} from './ProfileDataForm';
import {Button} from 'antd';
import {useSelector} from "react-redux";
import {getProfile} from "../../../redux/users-selectors";
import {cachedDataVersionTag} from "v8";


type PropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => void

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

    const onSubmit = (formData: any) => {
        props.saveProfile(formData)
        setEditMode(false)
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos && props.profile.photos.large ? props.profile.photos.large : profilePhoto}
                    className={s.profilePhoto} alt={'#'}/> <br/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={props.profile}/>
                    : <ProfileData isOwner={props.isOwner} goToEditMode={goToEditMode}/>}
                <div><b>Status:</b> <ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
            </div>
        </div>
    )
})

type ProfileDataT = {
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = (props: ProfileDataT) => {
    const profile = useSelector(getProfile)
    return <div>
        {props.isOwner && <div><Button onClick={props.goToEditMode}>Edit</Button></div>}
        <div style={{paddingLeft: '0px', marginLeft: '0px'}}>
            <div><
                b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>About Me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div>
                <b>My professional skills: </b>{profile.lookingForAJobDescription}
            </div>
        </div>
        <div>
            <b>Contacts: </b>
            {/*<b>Contacts:</b>*/}
            {/*{profile.contacts && Object.entries(profile.contacts).map(value => {*/}
            {/*    return value[1] && <div><a href={value[1]}>{value[0]}</a></div>*/}
            {/*})}*/}
        </div>
    </div>
}

type ContactType = {
    contactTitle: string
    contactValue: any
}

export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;



