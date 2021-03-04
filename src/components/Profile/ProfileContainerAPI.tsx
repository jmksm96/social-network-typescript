import React from 'react'
import { UserProfileType} from "../../Typing/typing";
import {connect} from 'react-redux';
import ProfileContainer from './ProfileContainer';
import { AppStateType } from '../../redux/store';
import {setUserProfile} from "../../redux/profile-reducer";


type MapStateToPropsType = {
    profile: UserProfileType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);