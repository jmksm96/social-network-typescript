import React, {useEffect, useState} from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import Preloader from "./common/preloader/preloader";
import 'antd/dist/antd.css'

import Header2 from "./components/Header/Header";
import {Layout, Menu} from 'antd';
import {
    LoadingOutlined,
    MailOutlined,
    PlaySquareOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout

type PropsType = {
    initialized: boolean
    initializeApp: () => void
}

const DialogsContainer = React.lazy(() => import( './components/Dialogs/DialogsContainer'))
const ProfileContainerAPI = React.lazy(() => import( './components/Profile/ProfileContainerAPI'))


const App = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState(false)

    useEffect(() => {
        props.initializeApp()
    })


    if (!props.initialized) {
        return <Preloader/>
    }

    return (

        <BrowserRouter>
            <Layout>
                <Header2/>
                <Content style={{padding: '0 50px'}}>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >

                                <Menu.Item key="1" icon={<UserOutlined/>}>
                                    <Link to='/profile'>My Profile</Link>
                                </Menu.Item>

                                <Menu.Item key="2" icon={<TeamOutlined/>}>
                                    <Link to='/users'>Users</Link>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<MailOutlined/>}>
                                    <Link to='/dialogs'>Messages</Link>
                                </Menu.Item>
                                <Menu.Item key="4" icon={<PlaySquareOutlined/>}>
                                    <Link to='/music'>Music</Link>
                                </Menu.Item>
                                <Menu.Item key="5" icon={<SettingOutlined/>}>
                                    <Link to='/settings'>Settings</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Route path='/dialogs' render={() => {
                                return <React.Suspense fallback={<div><LoadingOutlined/></div>}>
                                    <DialogsContainer/>
                                </React.Suspense>

                            }}/>
                            <Route path='/profile/:userId?' exact render={() => {
                                return <React.Suspense
                                    fallback={<div><LoadingOutlined/></div>}>
                                    <ProfileContainerAPI/>
                                </React.Suspense>
                            }}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>

                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Created by Maxim Yarosh</Footer>
            </Layout>,
        </BrowserRouter>
    )
}


const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App)
