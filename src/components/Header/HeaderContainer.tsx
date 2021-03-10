import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/store';


type PropsType = {
    getAuthUserData: () => void
    isAuth: boolean,
    login: string
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
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



export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);