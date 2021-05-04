import React from 'react'
import {UserProfileType} from "../../Typing/typing";
import {connect} from 'react-redux';
import ProfileContainer from './ProfileContainer';
import {AppStateType} from '../../redux/store';
import {getStatus, getUserProfile, updateStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type MapStateToPropsType = {
    profile: UserProfileType;
    defaultUserId: number;
    status: string
    isAuth: boolean

}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        defaultUserId: state.profilePage.defaultUserId,
        isAuth: state.auth.data.isAuth,

    }
}


 withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer)))

export default compose<React.ComponentType>(
    connect(mapStateToProps,  {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


