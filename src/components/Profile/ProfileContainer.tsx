import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {UserProfileType} from "../../Typing/typing";


type PropsTypeProfile = {
    profile: UserProfileType
    setUserProfile: (profile: UserProfileType) => void;
}

class ProfileContainer extends React.Component<PropsTypeProfile> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

export default ProfileContainer
