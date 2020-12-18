import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Max</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Mark</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Slava</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Dimon</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Danila</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Edik</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>React</div>
                <div className={s.message}>Typescript</div>
                <div className={s.message}>Javascript</div>
                <div className={s.message}>Angular</div>
                <div className={s.message}>Node</div>
            </div>
        </div>
    )
}

export default Dialogs