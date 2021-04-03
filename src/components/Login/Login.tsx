import React from 'react';
import {connect} from 'react-redux';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../common/forms-controls/FormsControls';
import {login} from '../../redux/auth-reducer';
import {required} from "../../utils/validators/validator";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required]}
                       type={'password'}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type PropsType = {
    login: (email: string, password: any, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile/'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.data.isAuth
})
export default connect(mapStateToProps, {login})(Login)