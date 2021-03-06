import React, {Dispatch} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/store';

type PropsType = {
    setAuthUserData: (id:number , email: string, login: string) => void
    isAuth: boolean,
    login: string
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id,email,login}  = response.data.data
                    this.props.setAuthUserData(id, email, login)
                    return id
                }
            });
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType):{isAuth: boolean, login: string} => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}


export default connect<{isAuth: boolean, login: string},{setAuthUserData: (id:number , email: string, login: string) => void
},{},AppStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer);