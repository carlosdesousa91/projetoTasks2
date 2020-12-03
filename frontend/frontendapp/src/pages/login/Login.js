import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
//import './login.css'
import axios from 'axios'

import { history } from '../../history'

const Login = () => {
const handleSubmit = values => {
    //console.log(values)
    axios.post('http://localhost:8000/auth/', values)
    .then(resp => {
        const { data } = resp
        if (data) {
            localStorage.setItem('app-token', data)
            history.push('/')
        }
    })
}
const validations = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(8).required()
})
return(
        <>
             <h3>TASKS</h3>
            
            <Formik 
                initialValues={{}} 
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Form-Group">
                        <Field 
                            name="username" className="Login-Field" 
                        />
                        <ErrorMessage 
                            component="span" 
                            name="username" className="Login-error"
                        />
                    </div>
                    <div className="Form-Group">
                        <Field 
                            name="password" className="Login-Field" 
                        />
                        <ErrorMessage 
                            component="span" 
                            name="password" className="Login-error"
                        />
                    </div>
                    <button className="Login-Btn btn btn-primary" type="submit">Login</button>
                </Form>
            </Formik>
        </>
    )
}

export default Login;
