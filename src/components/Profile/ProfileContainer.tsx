import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {UserProfileType} from "../../Typing/typing";
import { RouteComponentProps } from 'react-router-dom';


type PropsTypeProfile = {
    setUserProfile: (profile: UserProfileType) => void;
    profile: UserProfileType
    defaultUserId: string;
}

type RouteType = {
    userId: string;
};

class ProfileContainer extends React.Component<PropsTypeProfile & RouteComponentProps<RouteType>> {
    componentDidMount() {
        let userId = Number((this.props.match.params).userId);


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
