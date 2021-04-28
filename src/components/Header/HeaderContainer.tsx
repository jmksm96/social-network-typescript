import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import { logout,} from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/store';


type PropsType = {
    isAuth: boolean,
    login: string | null
    id: number | null
    logout: () => void
}

const HeaderContainer = (props: PropsType) => {


    return <Header logout={props.logout}/>
}

const mapStateToProps = (state: AppStateType):{isAuth: boolean, login: string | null, id: number | null} => {
    return {
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login,
        id: state.auth.data.id
    }
}



export default connect(mapStateToProps, { logout})(HeaderContainer);