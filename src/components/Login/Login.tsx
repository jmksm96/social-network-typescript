import React from 'react';
import {connect} from 'react-redux';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
// import {createField, Input} from '../../common/forms-controls/FormsControls';
import {createField, Input} from '../../common/forms-controls/FormsControls';
import {login} from '../../redux/auth-reducer';
import {required} from "../../utils/validators/validator";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import s from '../../common/forms-controls/FormsControls.module.css'
import {Formik} from 'formik';


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Email'}
                   name={'email'}
                   component={Input}
                   validate={[required]}/>
            {/*{createField("Email", "email", Input, [required])}*/}
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
            {props.error &&
            <div className={s.formSummaryError}>
                {props.error}
            </div>}
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
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

// const LoginFormikk = () => {
//     return <div>
//         <Formik>
//
//         </Formik>
//     </div>
// }

export default connect(mapStateToProps, {login})(Login)