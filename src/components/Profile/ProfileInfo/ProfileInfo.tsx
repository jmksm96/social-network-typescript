import React from 'react'
import s from './PorifleInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;