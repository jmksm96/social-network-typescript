import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType, DialogsType, MessagesType} from "../../Typing/typing";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    addMessage: (newMessageText: string) => void
    updateNewMessageText: (text: string) => void
    dialogsPage: DialogPageType
    newMessageText: string

}

const Dialogs: React.FC<PropsType> = (props) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let dialogsElementsRender = (d: DialogsType) => <DialogItem name={d.name} id={d.id} key={d.id}/>
    let messagesElementsRender = (m: MessagesType) => <Message message={m.message} id={m.id}/>



    let onMessageChange = () => {
        if (newMessageElement.current) {
            props.updateNewMessageText(newMessageElement.current.value)
        }

    }

    let addNewMessage = (values: any) => {
        props.addMessage(values.newMessageText)
    }
    //
    // if (!props.isAuth) {
    //     return <Redirect to = {'/login'}/>
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(dialogsElementsRender)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(messagesElementsRender)}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )

}


const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name='newMessageText' placeholder={'Enter your message'}/>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs