import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import {Button, Layout} from "antd";
import {useSelector} from "react-redux";
import {getUserId, selectCurrentUserLogin, selectIsAuth} from '../../redux/auth-selectors';


type HeaderPropsType = {
    logout: () => void
}


const Header = (props: HeaderPropsType) => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const id = useSelector(getUserId)

    const {Header} = Layout;
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => {
        setCollapsed(true)
    }

    return <Header className="site-layout-background" style={{padding: 0}}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
        })}
        <div>
            {isAuth
                ? <Link to={'/profile/' + id}>
                    <div>
                        <Avatar icon={<UserOutlined/>}/>
                        {login} - <Button onClick={props.logout}>Logout</Button>
                    </div>
                </Link>
                : <Link to={'/login'}>Login</Link>}

        </div>

    </Header>
}


export default Header;

