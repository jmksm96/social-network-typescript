import React, {ChangeEvent, useEffect, useState} from 'react'


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatus = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    useEffect(() => {setStatus(props.status)}, [props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange = {onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>

    )
}

export default ProfileStatus;