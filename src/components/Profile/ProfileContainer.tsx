import React, {useEffect} from 'react'
import Profile from "./Profile";
import {UserProfileType} from "../../Typing/typing";
import {RouteComponentProps} from 'react-router-dom';


type PropsTypeProfile = {
    profile: UserProfileType
    defaultUserId: number;
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    status: string
}

type RouteType = {
    userId: string;
};


const ProfileContainer: React.FC<PropsTypeProfile & RouteComponentProps<RouteType>> = (props) => {
    let userId = Number((props.match.params).userId);
    if (!userId) {
        userId = props.defaultUserId
    }

    useEffect(() => {
        props.getUserProfile(userId)
        props.getStatus(userId)
    })

    return (
        <div>
            <Profile {...props}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}/>
        </div>
    )
}


// class ProfileContainer extends React.Component<PropsTypeProfile & RouteComponentProps<RouteType>> {
//     componentDidMount() {
//         let userId = Number((this.props.match.params).userId);
//         if (!userId) {
//             userId = 2
//         }
//         this.props.getUserProfile(userId)
//         this.props.getStatus(userId)
//     }
//
//     render() {
//         return (
//             <div>
//                 <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus = {this.props.updateStatus}/>
//             </div>
//         )
//     }
//
// }

export default ProfileContainer
