import React from 'react'
import { UserProfileType} from "../../Typing/typing";
import {connect} from 'react-redux';
import ProfileContainer from './ProfileContainer';
import { AppStateType } from '../../redux/store';
import {getUserProfile} from "../../redux/profile-reducer";
import { withRouter } from 'react-router';



type MapStateToPropsType = {
    profile: UserProfileType;
    defaultUserId: string;
    isAuth: boolean;
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        defaultUserId: state.profilePage.defaultUserId,
        isAuth: state.auth.isAuth
    }
}

const withRouterProfileContainer = withRouter(ProfileContainer)

const ProfileContainerAPI = connect(mapStateToProps , {getUserProfile})(withRouterProfileContainer);
export default ProfileContainerAPI