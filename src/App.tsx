import React, {useEffect, useState} from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import Preloader from "./common/preloader/preloader";
import 'antd/dist/antd.css'
import {Layout, Menu} from 'antd';
import {
    LoadingOutlined,
    MailOutlined,
    PlaySquareOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import s from "./components/Navbar/Navbar.module.css";


type PropsType = {
    initialized: boolean
    initializeApp: () => void
}

const DialogsContainer = React.lazy(() => import( './components/Dialogs/DialogsContainer'))
const ProfileContainerAPI = React.lazy(() => import( './components/Profile/ProfileContainerAPI'))

const {Sider, Content} = Layout;


const App = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(true)
    }

    useEffect(() => {
        props.initializeApp()
    })


    if (!props.initialized) {
        return <Preloader/>
    }

    return (
        <BrowserRouter>
            <Layout>

                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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


                <Layout className="site-layout">
                    <div ><HeaderContainer/></div>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
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
            </Layout>

            {/*<div className='app-wrapper'>*/}
            {/*    <HeaderContainer/>*/}
            {/*    <Navbar/>*/}
            {/*    <div className='app-wrapper-content'>*/}
            {/*        <Route path='/dialogs' render={() => {*/}
            {/*            return <React.Suspense fallback={<div>Loading...</div>}>*/}
            {/*                <DialogsContainer/>*/}
            {/*            </React.Suspense>*/}

            {/*        }}/>*/}
            {/*        <Route path='/profile/:userId?' exact render={() => {*/}
            {/*            return <React.Suspense fallback={<div>Loading...</div>}> /!*В лоадинг добавить прогрессбар загрузки*!/*/}
            {/*                <ProfileContainerAPI/>*/}
            {/*            </React.Suspense>*/}
            {/*        }}/>*/}
            {/*        <Route path='/users' render={() => <UsersContainer/>}/>*/}
            {/*        <Route path='/login' render={() => <Login/>}/>*/}
            {/*        <Route path='/news' render={() => <News/>}/>*/}
            {/*        <Route path='/music' render={() => <Music/>}/>*/}
            {/*        <Route path='/settings' render={() => <Settings/>}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </BrowserRouter>
    )
}


const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App)
