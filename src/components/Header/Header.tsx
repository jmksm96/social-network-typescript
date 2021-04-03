import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
    id: number | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />

        <div className={s.loginBlock}>
            {props.isAuth
                ? <NavLink to = {'/profile/' + props.id}>
                    <div>
                        {props.login}
                        <button onClick={props.logout}>Logout</button>
                    </div>
                   </NavLink>
                :<NavLink to = {'/login'}> Login</NavLink> }

        </div>
    </header>
}

export default Header;