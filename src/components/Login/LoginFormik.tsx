// import React from 'react'
// import {NavLink} from 'react-router-dom'
// import { useFormik} from "formik";
// import {Button, Form, Input} from 'antd';
//
//
// const LoginFormik = (formProps: any) => {
//
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//             rememberMe: false
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values))
//         }
//     })
//     return (
//         <div>
//             Login
//             <Form onFinish={formik.handleSubmit}>
//                 <div>
//
//                         <Input
//                             id="email"
//                             name="email"
//                             type="email"
//                             onChange={formik.handleChange}
//                             value={formik.values.email}
//                         />
//
//                 </div>
//                 <div>
//                     <Input
//                         id="password"
//                         name="password"
//                         type="password"
//                         onChange={formik.handleChange}
//                         value={formik.values.password}
//                     />
//                 </div>
//                 <div>
//                     <label>
//                         <Input type="checkbox"
//                                id="rememberMe"
//                                onChange={formik.handleChange}/>
//                     </label>
//                 </div>
//                 <div>
//                     <NavLink to="/#">Forgot?</NavLink>
//                 </div>
//                 <div>
//                     <Button type='primary'>sign in</Button>
//                 </div>
//                 <div><NavLink to="/#">Register</NavLink></div>
//
//             </Form>
//
//
//         </div>
//     )
// }
//
// export default LoginFormik

import { Form, Input, Button, Checkbox } from 'antd';
import { useFormik } from 'formik';



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const LF = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={formik.initialValues }
            onFinish={formik.handleChange}

        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LF
