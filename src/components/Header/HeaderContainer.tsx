import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {getAuthUserData, logout,} from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/store';


type PropsType = {
    getAuthUserData: () => void
    isAuth: boolean,
    login: string | null
    id: number | null
    logout: () => void
}

const HeaderContainer = (props: PropsType) => {
    useEffect(() => {
        props.getAuthUserData()
    })

    return <Header login={props.login} isAuth={props.isAuth} id = {props.id} logout={props.logout}/>
}

const mapStateToProps = (state: AppStateType):{isAuth: boolean, login: string | null, id: number | null} => {
    return {
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login,
        id: state.auth.data.id
    }
}



export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);