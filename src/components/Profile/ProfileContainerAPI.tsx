import React from 'react'
import {UserProfileType} from "../../Typing/typing";
import {connect} from 'react-redux';
import ProfileContainer from './ProfileContainer';
import {AppStateType} from '../../redux/store';
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from 'react-router';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type MapStateToPropsType = {
    profile: UserProfileType;
    defaultUserId: string;
    status: string
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        defaultUserId: state.profilePage.defaultUserId,
        status: state.profilePage.status
    }
}


 withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer)))

export default compose<React.ComponentType>(
    connect(mapStateToProps,  {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


