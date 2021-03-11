import React from 'react'
import Profile from "./Profile";
import {UserProfileType} from "../../Typing/typing";
import {Redirect, RouteComponentProps} from 'react-router-dom';




type PropsTypeProfile = {
    profile: UserProfileType
    defaultUserId: string;
    isAuth: boolean
    getUserProfile: (userId: number) => void
}

type RouteType = {
    userId: string;
};

class ProfileContainer extends React.Component<PropsTypeProfile & RouteComponentProps<RouteType>> {
    componentDidMount() {
        let userId = Number((this.props.match.params).userId);
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

export default ProfileContainer
