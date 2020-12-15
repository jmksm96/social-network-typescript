import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Max
                </div>
                <div className={s.dialog}>
                    Mark
                </div>
                <div className={s.dialog}>
                    Slava
                </div>
                <div className={s.dialog}>
                    Dimon
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>React</div>
                <div className={s.message}>Typescript</div>
                <div className={s.message}>Javascript</div>
            </div>
        </div>
    )
}

export default Dialogs