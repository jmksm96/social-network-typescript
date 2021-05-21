import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {UserOutlined} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import {Button, Col, Layout, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getUserId, selectCurrentUserLogin, selectIsAuth} from '../../redux/auth-selectors';
import {logout} from "../../redux/auth-reducer";
import s from './Header.module.css'


const Header = () => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const id = useSelector(getUserId)
    const dispatch = useDispatch()

    const logoutHandler = useCallback(() => {
        dispatch(logout());
    }, []);

    const {Header} = Layout

    return ( <Header className = 'header'>
        <div className={s.headerBlock}>
            <Row>
                <Col span={20}>

                </Col>
                {/*<Col span ={4}>*/}
                    <div>
                        {isAuth
                            ? <Link to={'/profile/' + id}>
                                <div>
                                    <span>  <Avatar icon={<UserOutlined/>}/> </span>
                                    {login} - <Button onClick={logoutHandler}>Logout</Button>
                                </div>
                            </Link>
                            : <Link to={'/login'}>Login</Link>}
                    </div>
                {/*</Col>*/}
            </Row>

        </div>

    </Header>
    )
}

export default Header;

