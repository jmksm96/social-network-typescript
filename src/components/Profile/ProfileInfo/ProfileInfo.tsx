import React from 'react'
import { UserProfileType } from '../../../Typing/typing'
import s from './PorifleInfo.module.css'
import Preloader from "../../../common/preloader/preloader";


type PropsType = {
    profile: UserProfileType
}
const ProfileInfo = (props:PropsType ) => {
    // if (!props.profile) {
    //     return <Preloader/>
    // }
    return (
        <div>
            <div>
                <img src='https://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos
                    ?(props.profile.photos.large ? props.profile.photos.large : "") : "" }/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;