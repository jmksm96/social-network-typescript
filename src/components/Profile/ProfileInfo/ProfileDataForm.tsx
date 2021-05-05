import React from "react";
import {createField, Input, Textarea} from "../../../common/forms-controls/FormsControls";
import {reduxForm} from "redux-form";
import {useSelector} from "react-redux";
import {getProfile} from "../../../redux/users-selectors";
import {Contact} from "./ProfileInfo";


const ProfileDataForm = (props: any) => {

    const profile = useSelector(getProfile)
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>Save</button>
        </div>

        <div style={{listStyleType: "none", paddingLeft: '0px', marginLeft: '0px'}}>
            <div><b>Full name:</b>
                {createField('textarea', "Full  name", "fullName", Input, [])} </div>
            <div><b>About Me: </b>{profile.aboutMe}
                {createField('textarea', "About Me", "aboutMe", Textarea, [])}
            </div>
            <div><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
                {createField('checkbox', "", "lookingForAJob", Input, [])}</div>
        </div>
        <div>
            <b>My professional skills</b> : {profile.lookingForAJobDescription}
            {createField('textarea', 'My professional skills', "lookingForAJobDescription", Textarea, [])}
        </div>

        <div>

            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div className="contact">
                <b>{key}: {createField(key, 'textarea', "contacts." + key, Input, [])} </b>
            </div>
        })}
            {/*<b>Contacts</b>*/}
            {/*Contacts:*/}
            {/*{profile.contacts && Object.entries(profile.contacts).map(value => {*/}
            {/*    return value[1] && <div><a href={value[1]}>{value[0]}</a></div>*/}
            {/*})}*/}
        </div>
    </form>

}
export const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

