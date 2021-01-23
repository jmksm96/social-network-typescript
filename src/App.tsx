import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {ActionsTypes, StoreType} from './Typing/typing';

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
    // addPostAC: (action: ActionsTypes) => void
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={state}/>}/>
                    <Route path='/profile' render={() => <Profile store={props.store} dispatch = {props.dispatch}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
