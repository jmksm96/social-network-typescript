import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Profile from "./components/Profile/Profile";
import {ActionsTypes, StoreType} from './Typing/typing';
import DialogsConatiner from "./components/Dialogs/DialogsContainer";

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsConatiner messagesElements = {state.dialogsPage.messages}
                                                                           dialogsElements = {state.dialogsPage.dialogs}/>}/>
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
