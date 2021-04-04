import React, {useEffect} from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainerAPI from './components/Profile/ProfileContainerAPI';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import Preloader from "./common/preloader/preloader";




type PropsType = {
    initialized: boolean
    initializeApp: () => void
}

const App = (props: PropsType) => {
    useEffect(() => {
        props.initializeApp()
    })


    if(!props.initialized) {
        return <Preloader/>
    }

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' exact render={() => <ProfileContainerAPI/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


const mapStateToProps = (state:AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect (mapStateToProps, {initializeApp})(App)
// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp}))(App);